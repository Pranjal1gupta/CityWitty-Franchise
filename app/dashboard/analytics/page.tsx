'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const monthlySignups = [
  { month: 'Jan', signups: 12 },
  { month: 'Feb', signups: 15 },
  { month: 'Mar', signups: 18 },
  { month: 'Apr', signups: 22 },
  { month: 'May', signups: 28 },
  { month: 'Jun', signups: 32 },
];

const categoryRevenue = [
  { category: 'Food & Dining', revenue: 35000 },
  { category: 'Retail', revenue: 28000 },
  { category: 'Fitness', revenue: 18000 },
  { category: 'Wellness', revenue: 14000 },
];

const merchantDistribution = [
  { name: 'Food & Dining', value: 35 },
  { name: 'Retail', value: 25 },
  { name: 'Fitness', value: 20 },
  { name: 'Wellness', value: 12 },
  { name: 'Others', value: 8 },
];

const COLORS = ['#0B6CF6', '#FF8A3D', '#10B981', '#8B5CF6', '#F59E0B'];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-600">Detailed insights into your franchise performance</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Revenue', value: '₹5.4L', change: '+12.5%' },
            { label: 'Total Merchants', value: '28', change: '+8.2%' },
            { label: 'Avg. Deal Size', value: '₹19K', change: '+5.3%' },
            { label: 'Customer LTV', value: '₹45K', change: '+18.7%' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium text-green-600">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Signups Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlySignups}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="signups" stroke="#0B6CF6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#FF8A3D" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Merchant Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={merchantDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name} (${entry.value}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {merchantDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { label: 'Conversion Rate', value: '68%', max: 100, color: 'blue' },
                  { label: 'Customer Retention', value: '82%', max: 100, color: 'green' },
                  { label: 'Market Penetration', value: '45%', max: 100, color: 'orange' },
                  { label: 'Lead Response Time', value: '2.5hrs', description: 'Average time to first response', color: 'purple' },
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                      <span className="text-lg font-bold">{metric.value}</span>
                    </div>
                    {metric.max && (
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${metric.color}-600 rounded-full`}
                          style={{ width: metric.value }}
                        />
                      </div>
                    )}
                    {metric.description && (
                      <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
