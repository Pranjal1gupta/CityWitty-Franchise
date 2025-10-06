'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Eye, TrendingUp, Users, Target } from 'lucide-react';

const campaigns = [
  { id: 1, name: 'Summer Sale 2025', type: 'Email', status: 'Active', reach: '5,200', clicks: '1,240', conversions: '180', budget: '₹25K', spent: '₹18K' },
  { id: 2, name: 'New Merchant Drive', type: 'Social Media', status: 'Active', reach: '12,500', clicks: '3,200', conversions: '420', budget: '₹40K', spent: '₹35K' },
  { id: 3, name: 'Festive Offer', type: 'SMS', status: 'Scheduled', reach: '8,000', clicks: '0', conversions: '0', budget: '₹30K', spent: '₹0' },
  { id: 4, name: 'Referral Program', type: 'Email', status: 'Completed', reach: '3,800', clicks: '920', conversions: '145', budget: '₹20K', spent: '₹20K' },
];

export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Campaigns</h1>
            <p className="text-gray-600">Create and manage marketing campaigns</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus size={18} className="mr-2" />
            New Campaign
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Campaigns', value: '12', icon: Target, color: 'blue' },
            { label: 'Active', value: '4', icon: TrendingUp, color: 'green' },
            { label: 'Total Reach', value: '29K', icon: Users, color: 'orange' },
            { label: 'Conversions', value: '745', icon: Eye, color: 'purple' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`text-${stat.color}-600`} size={24} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{campaign.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{campaign.type}</span>
                      <span className={`px-3 py-1 rounded-full ${
                        campaign.status === 'Active' ? 'bg-green-100 text-green-700' :
                        campaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye size={16} className="mr-2" />
                    View Details
                  </Button>
                </div>

                <div className="grid md:grid-cols-6 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Reach</div>
                    <div className="text-lg font-semibold">{campaign.reach}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Clicks</div>
                    <div className="text-lg font-semibold">{campaign.clicks}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Conversions</div>
                    <div className="text-lg font-semibold text-green-600">{campaign.conversions}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Budget</div>
                    <div className="text-lg font-semibold">{campaign.budget}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Spent</div>
                    <div className="text-lg font-semibold text-orange-600">{campaign.spent}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">ROI</div>
                    <div className="text-lg font-semibold text-blue-600">
                      {campaign.conversions !== '0' ? '240%' : 'N/A'}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Budget Used</span>
                    <span className="font-medium">{((parseInt(campaign.spent.replace(/[^\d]/g, '')) / parseInt(campaign.budget.replace(/[^\d]/g, ''))) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${(parseInt(campaign.spent.replace(/[^\d]/g, '')) / parseInt(campaign.budget.replace(/[^\d]/g, ''))) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
