'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Mail, Phone } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

const team = [
  { id: 1, name: 'Rahul Kumar', role: 'Sales Manager', email: 'rahul@citywitty.com', phone: '+91 98765 43220', status: 'Active', performance: 92 },
  { id: 2, name: 'Priya Singh', role: 'Marketing Lead', email: 'priya@citywitty.com', phone: '+91 98765 43221', status: 'Active', performance: 88 },
  { id: 3, name: 'Amit Patel', role: 'Sales Executive', email: 'amit@citywitty.com', phone: '+91 98765 43222', status: 'Active', performance: 85 },
  { id: 4, name: 'Sneha Reddy', role: 'Support Specialist', email: 'sneha@citywitty.com', phone: '+91 98765 43223', status: 'Active', performance: 90 },
];

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Team</h1>
            <p className="text-gray-600">Manage your team members and performance</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus size={18} className="mr-2" />
            Add Member
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Members', value: '8' },
            { label: 'Active', value: '7' },
            { label: 'Avg. Performance', value: '89%' },
            { label: 'This Month', value: '+2' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{member.role}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail size={14} className="mr-2" />
                        {member.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone size={14} className="mr-2" />
                        {member.phone}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Performance</span>
                        <span className="font-semibold text-blue-600">{member.performance}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${member.performance}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
