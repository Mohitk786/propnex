import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building, 
  Users, 
  Shield, 
  TrendingUp, 
  Award,
  ArrowRight 
} from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: Home,
      title: "Property Search",
      description: "Find your dream home with our advanced search filters and verified listings",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Professional property management services for landlords and investors",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Get expert advice from our experienced real estate professionals",
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-50 to-red-50"
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties are verified and authenticated for your peace of mind",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Smart investment advice for real estate portfolio building",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: Award,
      title: "Premium Service",
      description: "Exclusive services for premium properties and high-end clients",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate services to meet all your property needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-10 w-10 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl px-8 py-4 text-lg font-semibold">
            View All Services
            <ArrowRight className="h-6 w-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;