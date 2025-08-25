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
import Link from 'next/link';

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
              <Link href="/admin/dashboard/add-property" className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Add Property</h3>
                  <p className="text-blue-100">List a new property</p>
                </div>
                <Plus className="h-8 w-8 text-blue-200 group-hover:scale-110 transition-transform duration-300" />
              </Link>
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

      
      </main>
    </div>
  );
}
