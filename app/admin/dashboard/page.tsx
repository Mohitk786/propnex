'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Building, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  LogOut,
  Eye,
  Plus,
  MessageSquare,
  Star
} from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // In production, verify token with backend
    setUser({ username: 'admin', role: 'admin' });
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Properties",
      value: "1,247",
      change: "+12%",
      icon: Building,
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      title: "Active Users",
      value: "8,934",
      change: "+8%",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Total Revenue",
      value: "₹2.4 Cr",
      change: "+23%",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      title: "Growth Rate",
      value: "18.2%",
      change: "+5%",
      icon: TrendingUp,
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-50 to-red-50"
    }
  ];

  const recentActivities = [
    { action: "New property listed", property: "Luxury Villa in Mumbai", time: "2 hours ago", type: "listing" },
    { action: "Property sold", property: "Apartment in Delhi", time: "4 hours ago", type: "sale" },
    { action: "New user registered", property: "John Doe", time: "6 hours ago", type: "user" },
    { action: "Contact form submitted", property: "Property inquiry", time: "8 hours ago", type: "contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b-2 border-white/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Home className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">Welcome back, {user?.username}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                className="border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button 
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${stat.bgColor} rounded-2xl`}>
                    <stat.icon className={`h-6 w-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Add Property</h3>
                  <p className="text-blue-100">List a new property</p>
                </div>
                <Plus className="h-8 w-8 text-blue-200 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">View Properties</h3>
                  <p className="text-green-100">Manage listings</p>
                </div>
                <Eye className="h-8 w-8 text-green-200 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-600 to-red-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Messages</h3>
                  <p className="text-pink-100">View inquiries</p>
                </div>
                <MessageSquare className="h-8 w-8 text-pink-200 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <div className={`p-2 rounded-xl ${
                    activity.type === 'listing' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'sale' ? 'bg-green-100 text-green-600' :
                    activity.type === 'user' ? 'bg-purple-100 text-purple-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {activity.type === 'listing' && <Building className="h-4 w-4" />}
                    {activity.type === 'sale' && <DollarSign className="h-4 w-4" />}
                    {activity.type === 'user' && <Users className="h-4 w-4" />}
                    {activity.type === 'contact' && <MessageSquare className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.property}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
