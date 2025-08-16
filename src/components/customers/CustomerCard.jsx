import React from 'react';
import { User } from 'lucide-react';

const CustomerCard = ({ customer }) => {
  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50/50 to-transparent rounded-2xl hover:from-blue-50/50 hover:to-purple-50/30 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center space-x-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h4 className="font-bold text-gray-900">{customer.name}</h4>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              customer.current_plan === 'pro' 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {customer.current_plan === 'pro' ? '👑 Pro' : 'Free'}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
            <span>{customer.age} years old</span>
            <span>{customer.gender === 'M' ? 'Male' : 'Female'}</span>
            <span>{customer.location}</span>
            <span>Joined {customer.join_date}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-xl text-gray-900">
          Ar {(customer.total_spent / 1000).toFixed(0)}K
        </p>
        <p className="text-gray-500 text-sm">Total Spent</p>
      </div>
    </div>
  );
};

export default CustomerCard;