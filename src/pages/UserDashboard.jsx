import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, LogOut, MapPin, Phone, Clock, Building2, Calendar, Droplet, Menu, Mail } from 'lucide-react';

// Sample data - replace with your backend data
const sampleCamps = [
  {
    id: 1,
    name: "City General Hospital",
    city: "New York",
    address: "123 Main St, New York, NY 10001",
    coordinates: { latitude: 40.7128, longitude: -74.0060 },
    phoneNumber: "+1 (555) 123-4567",
    email: "info@citygeneralhospital.com",
    campTime: "2024-01-15T09:00:00",
  },
  {
    id: 2,
    name: "Memorial Medical Center",
    city: "Los Angeles",
    address: "456 Oak Ave, Los Angeles, CA 90001",
    coordinates: { latitude: 34.0522, longitude: -118.2437 },
    phoneNumber: "+1 (555) 987-6543",
    email: "contact@memorialmedical.com",
    campTime: "2024-01-20T10:00:00",
  },
  // Add more sample data as needed
];

const sampleAppointments = [
  { id: 1, hospitalName: "City General Hospital", done: false },
  { id: 2, hospitalName: "Memorial Medical Center", done: true },
  { id: 3, hospitalName: "St. Mary's Hospital", done: false },
  { id: 4, hospitalName: "University Health Center", done: true },
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("John"); // This will come from your backend
  const [bloodDonated, setBloodDonated] = useState(450); // This will come from your backend
  const donationRef = useRef(null);

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

  const scrollToDonations = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sortedAppointments = [...sampleAppointments].sort((a, b) => {
    if (a.done === b.done) return 0;
    return a.done ? 1 : -1;
  });

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
              <Button variant="ghost" onClick={scrollToDonations} className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                My Donations
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
                  <Button variant="ghost" onClick={scrollToDonations}>My Donations</Button>
                  <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Greeting Section */}
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, {username}! 👋
          </h1>
          <p className="text-xl text-gray-600">
            Here's your blood donation dashboard.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Hospital List */}
          <div className="lg:w-3/5">
            <Card className="h-[calc(100vh-300px)] overflow-hidden">
              <CardHeader>
                <CardTitle>Hospital List</CardTitle>
              </CardHeader>
              <CardContent className="h-full overflow-y-auto pr-4">
                <div className="space-y-4">
                  {sampleCamps.map((camp) => (
                    <Link 
                      to={`/hospital/${camp.id}`} 
                      key={camp.id}
                      state={{ hospitalData: camp }}
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-red-500" />
                            {camp.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <p className="text-sm text-gray-600">{camp.address}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <p className="text-sm text-gray-600">{formatDate(camp.campTime)}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Appointment List and Donation Stats */}
          <div className="lg:w-2/5 space-y-8">
            {/* Appointment List */}
            <Card className="h-[calc(50vh-150px)] overflow-hidden">
              <CardHeader>
                <CardTitle>Appointment List</CardTitle>
              </CardHeader>
              <CardContent className="h-full overflow-y-auto pr-4">
                <div className="space-y-4">
                  {sortedAppointments.map((appointment) => (
                    <div 
                      key={appointment.id}
                      className={`p-4 rounded-lg ${
                        appointment.done ? 'bg-green-100 text-green-800' : 'bg-white border border-gray-200'
                      }`}
                    >
                      <p className="font-semibold">{appointment.hospitalName}</p>
                      <p>{appointment.done ? 'Donation Complete' : 'Pending Donation'}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Donation Stats */}
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white" ref={donationRef}>
              <CardHeader>
                <CardTitle className="text-2xl">Your Donation Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Droplet className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-2">{bloodDonated} mL</p>
                  <p className="text-xl mb-4">Blood Donated</p>
                  <blockquote className="italic text-red-100">
                    "Every drop counts. Your generosity is saving lives!"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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

export default UserDashboard;
