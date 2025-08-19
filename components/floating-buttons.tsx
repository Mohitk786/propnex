"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCallButton, setShowCallButton] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // tablet and mobile
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your properties. Can you help me?";
    const phone = "+919999900000";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919999900000';
  };

  const toggleCallButton = () => {
    setShowCallButton(!showCallButton);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {/* WhatsApp Button - Always visible */}
      <Button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button - Only on mobile/tablet */}
      {isMobile && (
        <>
          {/* Toggle Button */}
          <Button
            onClick={toggleCallButton}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            title="Call us"
          >
            {showCallButton ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
          </Button>

          {/* Call Button with Animation */}
          {showCallButton && (
            <div className="animate-bounce">
              <Button
                onClick={handleCall}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title="Call +91 99999 00000"
              >
                <Phone className="h-6 w-6" />
              </Button>
            </div>
          )}
        </>
      )}

      {/* Pulse Effect for Call Button */}
      {isMobile && showCallButton && (
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FloatingButtons;
