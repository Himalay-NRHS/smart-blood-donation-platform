import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github } from 'lucide-react';

const Homepage = () => {
  const [registeredUsers, setRegisteredUsers] = useState(1000);
  const [totalBloodDonated, setTotalBloodDonated] = useState(5000);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Every Drop Counts</h1>
          <p className="text-xl text-gray-600 mb-8">Join us in the mission to save lives through blood donation.</p>
          <blockquote className="text-2xl italic text-red-600 mb-8">
            "The gift of blood is the gift of life."
          </blockquote>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-red-500">{registeredUsers}</p>
              <p className="text-gray-600">Registered Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-500">{totalBloodDonated} mL</p>
              <p className="text-gray-600">Total Blood Donated</p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* User and Organization Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>User Login</CardTitle>
              <CardDescription>Welcome back, hero!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Log in to check your donation history and find nearby donation camps.</p>
              <blockquote className="italic text-gray-600 mb-4">
                "Your blood type may be rare, but your kindness is well done."
              </blockquote>
              <Link to="/user-login">
                <Button>Login</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Signup</CardTitle>
              <CardDescription>Be a lifesaver!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Join our community of donors and start saving lives today.</p>
              <blockquote className="italic text-gray-600 mb-4">
                "The need is constant. The gratification is instant. Give blood."
              </blockquote>
              <Link to="/user-signup">
                <Button>Sign Up</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organization Login</CardTitle>
              <CardDescription>Welcome back, partner!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Access your dashboard to manage blood drives and donor information.</p>
              <blockquote className="italic text-gray-600 mb-4">
                "Together, we can make a difference one donation at a time."
              </blockquote>
              <Link to="/org-login">
                <Button>Login</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organization Signup</CardTitle>
              <CardDescription>Join the cause!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Register your organization to host blood drives and save more lives.</p>
              <blockquote className="italic text-gray-600 mb-4">
                "Partnering for a purpose: Turning compassion into action."
              </blockquote>
              <Link to="/org-signup">
                <Button>Sign Up</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Join us in our mission to save lives through blood donation.</p>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-red-500">
            <Github className="h-5 w-5 mr-2" />
            View project on GitHub
          </a>
          <p className="mt-4 text-sm text-gray-500">© 2023 LifeFlow Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

