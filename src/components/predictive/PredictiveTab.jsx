import React from 'react';
import { TrendingUp, Target, Brain, Activity } from 'lucide-react';
import MetricCard from '../common/MetricCard';
import ChartContainer from '../common/ChartContainer';
import RevenueChart from './RevenueChart';
import AIRecommendations from './AIRecommendations';
import { 
  predictiveData, 
  marketingStrategies, 
  operationalInsights, 
  modelPerformanceData 
} from '../../data/predictiveData';

const PredictiveTab = () => {
  return (
    <div className="space-y-8">
      {/* Predictive KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Revenue Forecast"
          value="Ar 950K"
          change="+23.5%"
          icon={TrendingUp}
          trend="up"
          color="green"
          subtitle="next 3 months"
        />
        <MetricCard
          title="Churn Risk"
          value="5.2%"
          change="-1.3%"
          icon={Target}
          trend="up"
          color="orange"
        />
        <MetricCard
          title="Model Accuracy"
          value="89.4%"
          change="+2.1%"
          icon={Brain}
          trend="up"
          color="purple"
        />
        <MetricCard
          title="Predictions Made"
          value="2,847"
          change="+156"
          icon={Activity}
          trend="up"
          color="blue"
        />
      </div>

      {/* Predictive Analytics */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8">
        <div className="2xl:col-span-2">
          <ChartContainer title="Revenue Forecast vs Actual">
            <RevenueChart data={predictiveData.revenue_forecast} />
          </ChartContainer>
        </div>

        <div className="space-y-6">
          <ChartContainer title="Customer Segments">
            <div className="space-y-4">
              {predictiveData.customer_segments.map((segment, index) => (
                <div key={index} className="p-4 bg-gray-50/50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-900">{segment.segment}</h5>
                    <span className={`text-sm font-medium ${
                      segment.growth > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {segment.growth > 0 ? '+' : ''}{segment.growth}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{segment.count} customers</span>
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: segment.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartContainer>

          <ChartContainer title="Model Performance">
            <div className="space-y-4">
              {modelPerformanceData.map((item, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  item.type === 'green' ? 'bg-green-50/50 border-green-100' :
                  item.type === 'blue' ? 'bg-blue-50/50 border-blue-100' : 
                  'bg-purple-50/50 border-purple-100'
                }`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'green' ? 'bg-green-500' :
                      item.type === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                    }`} />
                    <span className={`font-medium ${
                      item.type === 'green' ? 'text-green-800' :
                      item.type === 'blue' ? 'text-blue-800' : 'text-purple-800'
                    }`}>{item.title}</span>
                  </div>
                  <p className={`text-sm ${
                    item.type === 'green' ? 'text-green-700' :
                    item.type === 'blue' ? 'text-blue-700' : 'text-purple-700'
                  }`}>{item.description}</p>
                </div>
              ))}
            </div>
          </ChartContainer>
        </div>
      </div>

      {/* Movie Performance Predictions & AI Recommendations */}
      <ChartContainer title="Movie Performance Predictions">
        <AIRecommendations 
          marketingStrategies={marketingStrategies}
          operationalInsights={operationalInsights}
          modelPerformance={modelPerformanceData}
          moviePredictions={predictiveData.movie_performance_prediction}
        />
      </ChartContainer>
    </div>
  );
};

export default PredictiveTab;