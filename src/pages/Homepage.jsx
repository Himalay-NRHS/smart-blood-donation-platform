import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Users, Droplet, Hospital, Calendar, Bell, Heart, Mail, UserPlus, LogIn } from 'lucide-react';
import Navbar from './Navbar';

const Homepage = () => {
  const [registeredUsers, setRegisteredUsers] = useState(2);
  const [totalBloodDonated, setTotalBloodDonated] = useState(400);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white pt-16">
              <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">Every Drop Counts</h1>
              <p className="text-xl text-gray-600 mb-8">Join us in the mission to save lives through blood donation.</p>
              <blockquote className="text-2xl italic text-red-600 mb-8">
                "The gift of blood is the gift of life."
              </blockquote>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/logo.webp" alt="Blood Donation" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p className="text-5xl font-bold mb-2">{registeredUsers}</p>
              <p className="text-xl">Registered Users</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm">
              <Droplet className="w-12 h-12 mx-auto mb-4" />
              <p className="text-5xl font-bold mb-2">{totalBloodDonated}</p>
              <p className="text-xl">mL Blood Donated</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Hospital className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-semibold mb-4">Connect with Camps</h3>
              <p className="text-gray-600">Easily find and connect with blood donation camps in your area, eliminating the hassle of forwarded messages.</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
              <p className="text-gray-600">Help hospitals find donors with specific blood groups in emergency situations within their city.</p>
            </div>
            <div className="text-center p-6">
              <Bell className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-semibold mb-4">Stay Informed</h3>
              <p className="text-gray-600">Receive email notifications about upcoming blood donation camps in your area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-6 w-6 text-red-500" />
                  User Signup
                </CardTitle>
                <CardDescription>Be a lifesaver!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join our community of donors and start saving lives today.</p>
                <blockquote className="italic text-gray-600 mb-4">
                  "The need is constant. The gratification is instant. Give blood."
                </blockquote>
                <Link to="/user-signup">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LogIn className="h-6 w-6 text-red-500" />
                  User Login
                </CardTitle>
                <CardDescription>Welcome back, hero!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Log in to check your donation history and find nearby donation camps.</p>
                <blockquote className="italic text-gray-600 mb-4">
                  "Your blood type may be rare, but your kindness is well done."
                </blockquote>
                <Link to="/user-login">
                  <Button className="w-full">Login</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-500" />
                  Organization Signup
                </CardTitle>
                <CardDescription>Join the cause!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Register your organization to host blood drives and save more lives.</p>
                <blockquote className="italic text-gray-600 mb-4">
                  "Partnering for a purpose: Turning compassion into action."
                </blockquote>
                <Link to="/org-signup">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Organization Login
                </CardTitle>
                <CardDescription>Welcome back, partner!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access your dashboard to manage blood drives and donor information.</p>
                <blockquote className="italic text-gray-600 mb-4">
                  "Together, we can make a difference one donation at a time."
                </blockquote>
                <Link to="/org-login">
                  <Button className="w-full">Login</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-8">
            <Heart className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-xl mb-4">Join us in our mission to save lives through blood donation.</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Himalay-NRHS/smart-blood-donation-platform" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:himalayrekha@gmail.com" className="hover:text-red-500 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2023 LifeFlow Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

