import HeroSection from "@/components/hero-section";
import FeaturedProperties from "@/components/properties-list";
import ServiceCards from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import FloatingButtons from "@/components/floating-buttons";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Properties */}
      <FeaturedProperties />
      
      {/* Services */}
      <ServiceCards />
      
      {/* Contact Section */}
      <ContactForm />
      
      {/* Floating Buttons */}
      <FloatingButtons />
      
      <Footer />
    </div>
  );
}
