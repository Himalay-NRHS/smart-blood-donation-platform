import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail, X } from 'lucide-react';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
        <Heart className="h-8 w-8 text-red-500" />

          <span className="text-2xl font-bold text-gray-800">LifeFlow</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-red-500">Home</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-red-500">About</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('donate')} className="text-gray-600 hover:text-red-500">Donate</Button></li>
            <li>
              <a href="mailto:himalayrekha@gmail.com">
                <Button variant="ghost" className="text-gray-600 hover:text-red-500 inline-flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Button variant="ghost" onClick={() => scrollToSection('home')}>Home</Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
              <Button variant="ghost" onClick={() => scrollToSection('donate')}>Donate</Button>
              <a href="mailto:himalayrekha@gmail.com">
                <Button variant="ghost" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

