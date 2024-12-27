import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold text-gray-800">LifeFlow</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" className="text-gray-600 hover:text-red-500">Home</Button></li>
            <li><Button variant="ghost" className="text-gray-600 hover:text-red-500">About</Button></li>
            <li><Button variant="ghost" className="text-gray-600 hover:text-red-500">Donate</Button></li>
            <li><Button variant="ghost" className="text-gray-600 hover:text-red-500">Contact</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

