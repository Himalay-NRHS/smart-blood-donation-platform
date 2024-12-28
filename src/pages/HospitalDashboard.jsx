import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Heart, LogOut, Menu, Droplet, ChevronDown, ChevronUp, Search, Building2, User2 } from 'lucide-react';

const dummyUsers = {
  'A+': [
    { bloodGroup: 'A+', name: 'Alice Smith', id: 1, phoneNumber: '+1 (555) 123-4567' },
    { bloodGroup: 'A+', name: 'Adam Johnson', id: 2, phoneNumber: '+1 (555) 234-5678' },
  ],
  'A-': [
    { bloodGroup: 'A-', name: 'Anna Brown', id: 3, phoneNumber: '+1 (555) 345-6789' },
    { bloodGroup: 'A-', name: 'Andrew Davis', id: 4, phoneNumber: '+1 (555) 456-7890' },
  ],
  'B+': [
    { bloodGroup: 'B+', name: 'Beth Wilson', id: 5, phoneNumber: '+1 (555) 567-8901' },
    { bloodGroup: 'B+', name: 'Brian Taylor', id: 6, phoneNumber: '+1 (555) 678-9012' },
  ],
  'B-': [
    { bloodGroup: 'B-', name: 'Bella Moore', id: 7, phoneNumber: '+1 (555) 789-0123' },
    { bloodGroup: 'B-', name: 'Benjamin White', id: 8, phoneNumber: '+1 (555) 890-1234' },
  ],
  'AB+': [
    { bloodGroup: 'AB+', name: 'Chloe Anderson', id: 9, phoneNumber: '+1 (555) 901-2345' },
    { bloodGroup: 'AB+', name: 'Charles Martin', id: 10, phoneNumber: '+1 (555) 012-3456' },
  ],
  'AB-': [
    { bloodGroup: 'AB-', name: 'Catherine Lee', id: 11, phoneNumber: '+1 (555) 123-4567' },
    { bloodGroup: 'AB-', name: 'Christopher Harris', id: 12, phoneNumber: '+1 (555) 234-5678' },
  ],
  'O+': [
    { bloodGroup: 'O+', name: 'Diana Clark', id: 13, phoneNumber: '+1 (555) 345-6789' },
    { bloodGroup: 'O+', name: 'Daniel Lewis', id: 14, phoneNumber: '+1 (555) 456-7890' },
  ],
  'O-': [
    { bloodGroup: 'O-', name: 'Emma Walker', id: 15, phoneNumber: '+1 (555) 567-8901' },
    { bloodGroup: 'O-', name: 'Ethan Hall', id: 16, phoneNumber: '+1 (555) 678-9012' },
  ],
};

const dummyHospitals = [
  { id: 1, name: 'City General Hospital', address: '123 Main St, Cityville, ST 12345', phoneNumber: '+1 (555) 111-2222' },
  { id: 2, name: 'Mercy Medical Center', address: '456 Oak Ave, Townsburg, ST 23456', phoneNumber: '+1 (555) 222-3333' },
  { id: 3, name: 'St. Mary\'s Hospital', address: '789 Elm Rd, Villageton, ST 34567', phoneNumber: '+1 (555) 333-4444' },
  { id: 4, name: 'University Health Center', address: '101 College Blvd, Collegetown, ST 45678', phoneNumber: '+1 (555) 444-5555' },
];

const dummyParticipants = [
  { id: 1, name: "Alice Smith", phoneNumber: "+1 (555) 123-4567", bloodGroup: "A+", disease: "None" },
  { id: 2, name: "Bob Johnson", phoneNumber: "+1 (555) 987-6543", bloodGroup: "O-", disease: "Hypertension" },
  { id: 3, name: "Charlie Brown", phoneNumber: "+1 (555) 246-8135", bloodGroup: "B+", disease: "None" },
  { id: 4, name: "Diana Prince", phoneNumber: "+1 (555) 369-2580", bloodGroup: "AB-", disease: "Diabetes" },
];

const HospitalDashboard = () => {
  const [hospitalName] = useState("City General Hospital");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [searchResults, setSearchResults] = useState({ users: [], hospitals: [] });
  const [expandedParticipant, setExpandedParticipant] = useState(null);
  const [bloodCollected, setBloodCollected] = useState(1500); // ml

  const handleBloodGroupChange = (value) => {
    setSelectedBloodGroup(value);
  };

  const handleSearch = () => {
    let filteredUsers = [];
    if (selectedBloodGroup && selectedBloodGroup !== "all") {
      filteredUsers = dummyUsers[selectedBloodGroup] || [];
    } else {
      filteredUsers = Object.values(dummyUsers).flat();
    }
    setSearchResults({
      users: filteredUsers,
      hospitals: dummyHospitals,
    });
  };

  const handleVisibilityChange = (checked) => {
    setIsVisible(checked);
    // Here you would typically make a backend call
    console.log(`Camp visibility set to: ${checked}`);
  };

  const toggleParticipantExpansion = (id) => {
    setExpandedParticipant(expandedParticipant === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-800 font-serif">LifeFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Droplet className="h-4 w-4" />
                Blood Collected: {bloodCollected} ml
              </Button>
              <Button 
                variant="destructive" 
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
                  <Button variant="outline">Blood Collected: {bloodCollected} ml</Button>
                  <Button variant="destructive">Logout</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 font-serif">{hospitalName} Dashboard</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-8">
            {/* Search Box */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Search Donors and Hospitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Select value={selectedBloodGroup} onValueChange={handleBloodGroupChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Blood Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Blood Groups</SelectItem>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={handleSearch} className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
                {(searchResults.users.length > 0 || searchResults.hospitals.length > 0) && (
                  <div className="mt-4 space-y-4 max-h-96 overflow-y-auto">
                    {searchResults.users.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-serif">Donors</h3>
                        {searchResults.users.map((user) => (
                          <Card key={user.id} className="mb-2">
                            <CardContent className="p-4 flex items-center space-x-4">
                              <User2 className="h-8 w-8 text-blue-500" />
                              <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-600">Blood Group: {user.bloodGroup}</p>
                                <p className="text-sm text-gray-600">{user.phoneNumber}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                    {searchResults.hospitals.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-serif">Hospitals</h3>
                        {searchResults.hospitals.map((hospital) => (
                          <Card key={hospital.id} className="mb-2">
                            <CardContent className="p-4 flex items-center space-x-4">
                              <Building2 className="h-8 w-8 text-green-500" />
                              <div>
                                <p className="font-semibold">{hospital.name}</p>
                                <p className="text-sm text-gray-600">{hospital.address}</p>
                                <p className="text-sm text-gray-600">{hospital.phoneNumber}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Schedule Box */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Camp Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span>{isVisible ? "Close the camp" : "Turn on to be visible across donors"}</span>
                  <Switch
                    checked={isVisible}
                    onCheckedChange={handleVisibilityChange}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Blood Collected Box */}
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Blood Collected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Droplet className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-2">{bloodCollected} mL</p>
                  <blockquote className="italic text-red-100">
                    "Your efforts are making a significant impact in saving lives!"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Participants List */}
          <div className="md:w-1/2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Participants List</CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100vh-200px)] overflow-y-auto">
                <div className="space-y-4">
                  {dummyParticipants.map((participant) => (
                    <Card key={participant.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{participant.name}</p>
                            <p className="text-sm text-gray-600">{participant.phoneNumber}</p>
                            <p className="text-sm text-gray-600">Blood Group: {participant.bloodGroup}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleParticipantExpansion(participant.id)}
                          >
                            {expandedParticipant === participant.id ? <ChevronUp /> : <ChevronDown />}
                          </Button>
                        </div>
                        {expandedParticipant === participant.id && (
                          <div className="mt-2 pt-2 border-t">
                            <p className="text-sm text-gray-600">Disease: {participant.disease}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
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
        <h3 className="text-2xl font-bold mb-2 font-serif">LifeFlow</h3>
        <p>Empowering hospitals to save lives</p>
      </div>
      <div className="flex space-x-4">
        <Link to="#" className="hover:text-red-500 transition-colors">About</Link>
        <Link to="#" className="hover:text-red-500 transition-colors">Contact</Link>
        <Link to="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
      </div>
    </div>
    <div className="mt-8 text-center text-sm">
      © 2023 LifeFlow. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default HospitalDashboard;

