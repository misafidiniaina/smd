export const predictiveData = {
  revenue_forecast: [
    { month: 'Jan', actual: 120000, predicted: 125000 },
    { month: 'Feb', actual: 135000, predicted: 140000 },
    { month: 'Mar', actual: 145000, predicted: 150000 },
    { month: 'Apr', actual: null, predicted: 165000 },
    { month: 'May', actual: null, predicted: 180000 },
    { month: 'Jun', actual: null, predicted: 175000 }
  ],
  customer_segments: [
    { segment: 'High Value', count: 234, value: '#10b981', growth: 15.2 },
    { segment: 'Regular', count: 1456, value: '#3b82f6', growth: 8.7 },
    { segment: 'Occasional', count: 892, value: '#f59e0b', growth: -2.1 },
    { segment: 'At Risk', count: 156, value: '#ef4444', growth: -12.4 }
  ],
  movie_performance_prediction: [
    { title: 'Avatar 3', predicted_revenue: 89000, confidence: 92 },
    { title: 'Upcoming Blockbuster', predicted_revenue: 67000, confidence: 78 },
    { title: 'Summer Hit 2024', predicted_revenue: 45000, confidence: 85 }
  ]
};

export const marketingStrategies = [
  {
    title: 'Target Young Adults',
    description: 'Focus marketing on 18-25 age group for action movies. 73% conversion rate predicted.',
    type: 'blue'
  },
  {
    title: 'Weekend Promotions',
    description: 'Implement weekend family packages. Expected 28% increase in group bookings.',
    type: 'green'
  }
];

export const operationalInsights = [
  {
    title: 'Optimize Showtimes',
    description: '19:00-22:00 shows have 95% occupancy. Consider adding more evening slots.',
    type: 'orange'
  },
  {
    title: 'Inventory Alert',
    description: 'Popcorn sales spike 40% during Sci-Fi movies. Increase stock for Avatar 3 shows.',
    type: 'purple'
  }
];

export const modelPerformanceData = [
  {
    title: 'High Accuracy',
    description: 'Revenue prediction model shows 92% accuracy',
    type: 'green'
  },
  {
    title: 'Customer Insights',
    description: 'Identified 156 at-risk customers for retention',
    type: 'blue'
  },
  {
    title: 'Trend Analysis',
    description: 'Summer season shows 25% revenue increase pattern',
    type: 'purple'
  }
];