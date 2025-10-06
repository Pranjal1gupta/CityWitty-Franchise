'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Phone, Mail } from 'lucide-react';

const leads = [
  { id: 1, name: 'Coffee House', contact: 'Amit Kumar', phone: '+91 98765 43215', email: 'amit@coffeehouse.com', stage: 'New', value: '₹50K' },
  { id: 2, name: 'Beauty Salon', contact: 'Priya Sharma', phone: '+91 98765 43216', email: 'priya@beautysalon.com', stage: 'Contacted', value: '₹75K' },
  { id: 3, name: 'Auto Service', contact: 'Rahul Patel', phone: '+91 98765 43217', email: 'rahul@autoservice.com', stage: 'Qualified', value: '₹100K' },
  { id: 4, name: 'Restaurant', contact: 'Sneha Reddy', phone: '+91 98765 43218', email: 'sneha@restaurant.com', stage: 'Proposal', value: '₹120K' },
];

const stages = [
  { name: 'New', count: 5, color: 'gray' },
  { name: 'Contacted', count: 3, color: 'blue' },
  { name: 'Qualified', count: 4, color: 'orange' },
  { name: 'Proposal', count: 2, color: 'green' },
];

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Leads</h1>
            <p className="text-gray-600">Track and manage your sales pipeline</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus size={18} className="mr-2" />
            Add Lead
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {stages.map((stage, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-1">{stage.name}</div>
                <div className="text-2xl font-bold">{stage.count}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div key={stage.name}>
              <div className="bg-gray-100 rounded-t-lg px-4 py-3 font-semibold">
                {stage.name} ({stage.count})
              </div>
              <div className="space-y-3 p-4 bg-gray-50 rounded-b-lg min-h-[400px]">
                {leads
                  .filter((lead) => lead.stage === stage.name)
                  .map((lead) => (
                    <Card key={lead.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{lead.name}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>{lead.contact}</div>
                          <div className="flex items-center">
                            <Phone size={14} className="mr-2" />
                            {lead.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail size={14} className="mr-2" />
                            {lead.email}
                          </div>
                          <div className="pt-2 mt-2 border-t">
                            <span className="font-semibold text-green-600">{lead.value}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
