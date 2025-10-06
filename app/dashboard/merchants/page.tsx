'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Phone, Mail, MapPin, CreditCard as Edit, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const merchants = [
  { id: 1, name: 'Pizza Paradise', category: 'Food & Dining', phone: '+91 98765 43210', email: 'info@pizzaparadise.com', location: 'Mumbai', status: 'Active', discount: '20%' },
  { id: 2, name: 'Fashion Hub', category: 'Retail', phone: '+91 98765 43211', email: 'contact@fashionhub.com', location: 'Mumbai', status: 'Active', discount: '15%' },
  { id: 3, name: 'Gym Pro', category: 'Fitness', phone: '+91 98765 43212', email: 'info@gympro.com', location: 'Mumbai', status: 'Pending', discount: '25%' },
  { id: 4, name: 'Spa Bliss', category: 'Wellness', phone: '+91 98765 43213', email: 'hello@spabliss.com', location: 'Mumbai', status: 'Active', discount: '30%' },
  { id: 5, name: 'Book Store', category: 'Education', phone: '+91 98765 43214', email: 'info@bookstore.com', location: 'Mumbai', status: 'Active', discount: '10%' },
];

export default function MerchantsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Merchants</h1>
            <p className="text-gray-600">Manage your merchant partners</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus size={18} className="mr-2" />
            Add Merchant
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Merchants', value: '28', color: 'blue' },
            { label: 'Active', value: '24', color: 'green' },
            { label: 'Pending', value: '4', color: 'orange' },
            { label: 'Avg. Discount', value: '18%', color: 'purple' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Search merchants..." className="pl-10" />
              </div>
              <Button variant="outline">Filter</Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {merchants.map((merchant) => (
                  <TableRow key={merchant.id}>
                    <TableCell className="font-medium">{merchant.name}</TableCell>
                    <TableCell>{merchant.category}</TableCell>
                    <TableCell>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Phone size={14} className="mr-2" />
                          {merchant.phone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail size={14} className="mr-2" />
                          {merchant.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-green-600">{merchant.discount}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        merchant.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {merchant.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
