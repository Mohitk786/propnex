import HeroSection from "@/components/hero-section";
import FeaturedProperties from "@/components/properties-list";
import ServiceCards from "@/components/service-card";
import ContactForm from "@/components/contact-form";
import FloatingButtons from "@/components/floating-buttons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getProperties } from "@/actions/property";
import { Property } from "@/types/property";

export default async function Home() {
  
  let  properties = await getProperties({
    limit: 6,
    page: 1,
  });

  properties = JSON.parse(JSON.stringify(properties))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      <HeroSection />
      
      <FeaturedProperties  properties={properties?.data as Property[] || []} /> 
      
      <ServiceCards />
      
      <ContactForm />
      
      <FloatingButtons />
      
      <Footer />
    </div>
  );
}
