'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Target, ArrowUp, ArrowDown, IndianRupee } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 45000, signups: 12, merchants: 8 },
  { month: 'Feb', revenue: 52000, signups: 15, merchants: 11 },
  { month: 'Mar', revenue: 61000, signups: 18, merchants: 14 },
  { month: 'Apr', revenue: 71000, signups: 22, merchants: 17 },
  { month: 'May', revenue: 85000, signups: 28, merchants: 22 },
  { month: 'Jun', revenue: 95000, signups: 32, merchants: 28 },
];

const recentActivity = [
  { action: 'New merchant onboarded', name: 'Pizza Paradise', time: '2 hours ago' },
  { action: 'Lead converted', name: 'Fashion Hub', time: '5 hours ago' },
  { action: 'Campaign launched', name: 'Summer Sale', time: '1 day ago' },
  { action: 'Team member added', name: 'Rahul Kumar', time: '2 days ago' },
];

export default function OverviewPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your franchise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <IndianRupee className="text-blue-600" size={24} />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp size={16} className="mr-1" />
                  12.5%
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">₹95,000</div>
              <div className="text-sm text-gray-600">Monthly Revenue</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="text-orange-600" size={24} />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp size={16} className="mr-1" />
                  8.2%
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">28</div>
              <div className="text-sm text-gray-600">Active Merchants</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="text-green-600" size={24} />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp size={16} className="mr-1" />
                  15.3%
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">32</div>
              <div className="text-sm text-gray-600">New Signups</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-purple-600" size={24} />
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  <ArrowDown size={16} className="mr-1" />
                  2.1%
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">68%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#0B6CF6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="merchants" fill="#0B6CF6" />
                  <Bar dataKey="signups" fill="#FF8A3D" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-600">{activity.name}</div>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
