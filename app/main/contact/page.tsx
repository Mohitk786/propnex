import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 99999 00000", "+91 88888 00000"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@propertyhub.com", "support@propertyhub.com"],
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business District", "Mumbai, Maharashtra 400001", "India"],
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-50 to-red-50"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 text-center relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our properties? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${info.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`h-8 w-8 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Additional Information */}
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

      <Footer />
      
      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
