'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const transactions = [
  { id: 'TXN001', date: '2025-06-15', description: 'Merchant Commission', amount: '+₹12,500', type: 'credit', status: 'Completed' },
  { id: 'TXN002', date: '2025-06-14', description: 'Marketing Expenses', amount: '-₹8,000', type: 'debit', status: 'Completed' },
  { id: 'TXN003', date: '2025-06-12', description: 'Signup Fees', amount: '+₹15,000', type: 'credit', status: 'Completed' },
  { id: 'TXN004', date: '2025-06-10', description: 'Team Salaries', amount: '-₹45,000', type: 'debit', status: 'Completed' },
  { id: 'TXN005', date: '2025-06-08', description: 'Merchant Commission', amount: '+₹18,200', type: 'credit', status: 'Completed' },
];

export default function FinancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Finance</h1>
            <p className="text-gray-600">Track your financial performance</p>
          </div>
          <Button variant="outline">
            <Download size={18} className="mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Total Revenue', value: '₹5.4L', change: '+12.5%', trend: 'up' },
            { label: 'Total Expenses', value: '₹2.8L', change: '+5.2%', trend: 'up' },
            { label: 'Net Profit', value: '₹2.6L', change: '+18.3%', trend: 'up' },
            { label: 'Profit Margin', value: '48%', change: '+3.5%', trend: 'up' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profit & Loss Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total Income</div>
                    <div className="text-2xl font-bold text-green-600">₹5,40,000</div>
                  </div>
                  <TrendingUp className="text-green-600" size={32} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Merchant Commissions</span>
                    <span className="font-semibold">₹3,20,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Signup Fees</span>
                    <span className="font-semibold">₹1,80,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Other Income</span>
                    <span className="font-semibold">₹40,000</span>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total Expenses</div>
                    <div className="text-2xl font-bold text-red-600">₹2,80,000</div>
                  </div>
                  <TrendingDown className="text-red-600" size={32} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Team Salaries</span>
                    <span className="font-semibold">₹1,80,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Marketing</span>
                    <span className="font-semibold">₹60,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Operations</span>
                    <span className="font-semibold">₹40,000</span>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Net Profit</div>
                    <div className="text-3xl font-bold text-blue-600">₹2,60,000</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-sm text-gray-600">{transaction.date}</TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>
                        <span className={`font-semibold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.amount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
