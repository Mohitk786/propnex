import ContactForm from "@/components/contact-form";
import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactPage = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">

    
      <ContactForm />

     
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose PropertyHub?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Expert Guidance</h3>
                  <p className="text-gray-600">Our experienced team provides personalized advice for your property needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Verified Listings</h3>
                  <p className="text-gray-600">All properties are verified and authenticated for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock customer support to assist you anytime, anywhere.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Best Prices</h3>
                  <p className="text-gray-600">Competitive pricing and exclusive deals on premium properties.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200/50">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Quick Response Guarantee</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Response within 2 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">24/7 phone support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Email support within 4 hours</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/50 rounded-2xl">
              <p className="text-sm text-gray-600">
                <strong>Emergency Contact:</strong> For urgent property inquiries, call us directly at <strong>+91 99999 00000</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
