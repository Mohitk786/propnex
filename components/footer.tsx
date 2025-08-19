"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Buy Property", href: "/buy" },
      { name: "Rent Property", href: "/rent" },
      { name: "Sell Property", href: "/sell" },
      { name: "Property Valuation", href: "/valuation" },
    ],
    "Resources": [
      { name: "Market Trends", href: "/trends" },
      { name: "Property Guide", href: "/guide" },
      { name: "Legal Advice", href: "/legal" },
      { name: "Investment Tips", href: "/investment" },
    ],
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {/* Enhanced Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-10 mb-20 text-center border border-white/20 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stay Updated with Market Insights
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest property news, market trends, and exclusive deals delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/95 text-gray-900 border-2 border-white/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl py-3 flex-1"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Home className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                PropertyHub
              </span>
            </Link>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Your trusted partner in real estate. We help you find, buy, sell, and rent properties with confidence and ease.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-white/90">123 Business District, Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-white/90">+91 99999 00000</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-white/90">info@propertyhub.com</span>
              </div>
            </div>
          </div>

          {/* Enhanced Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xl font-semibold mb-8 text-blue-300">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/80 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-16 bg-white/20" />

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-white/80">
              © 2024 PropertyHub. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-white/80 font-medium">Follow us:</span>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: 'hover:text-blue-400' },
                { Icon: Twitter, color: 'hover:text-sky-400' },
                { Icon: Instagram, color: 'hover:text-pink-400' },
                { Icon: Linkedin, color: 'hover:text-blue-500' }
              ].map(({ Icon, color }, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="ghost"
                  className={`hover:bg-white/10 text-white/80 ${color} transition-all duration-300 rounded-xl hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;