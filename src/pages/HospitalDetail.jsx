import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, LogOut, MapPin, Phone, Mail, Building2, Home, Menu, Clock } from 'lucide-react';
import GoogleMapEmbed from './GoogleMapEmbed';

const HospitalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const hospital = location.state?.hospitalData;

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRegister = () => {
    console.log(`Registering for blood donation at ${hospital.name}`);
    alert(`You have registered for blood donation at ${hospital.name}`);
    // Here you would typically make an API call to register the user
  };

  if (!hospital) {
    return <div>No hospital data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-800">LifeFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/dashboard')} className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Button variant="ghost" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                  <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Building2 className="h-8 w-8 text-red-500" />
              {hospital.name}
            </CardTitle>
            <CardDescription className="text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {hospital.city}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <p className="text-lg">{hospital.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <p className="text-lg">{hospital.phoneNumber}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <p className="text-lg">{hospital.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <p className="text-lg">Next Camp: {formatDate(hospital.campTime)}</p>
              </div>
              <div className="mt-6">
                <Button onClick={handleRegister} className="w-full">
                  Register for Blood Donation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google Map */}
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>
          <CardContent>
            <GoogleMapEmbed 
              latitude={hospital.coordinates.latitude} 
              longitude={hospital.coordinates.longitude} 
              zoom={15}
            />
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">LifeFlow</h3>
              <p>Connecting donors to save lives</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">About</a>
              <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2023 LifeFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HospitalDetail;

