import React from 'react';
import { Users, Crown, DollarSign, UserCheck } from 'lucide-react';
import MetricCard from '../common/MetricCard';
import ChartContainer from '../common/ChartContainer';
import CustomerCard from './CustomerCard';
import DemographicsChart, { TopLocations, PlanDistribution } from './DemographicsChart';
import { 
  customersData, 
  ageDistributionData, 
  genderDistributionData, 
  locationData, 
  planDistributionData 
} from '../../data/customersData';

const CustomersTab = () => {
  return (
    <div className="space-y-8">
      {/* Customer KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Total Customers"
          value="2,847"
          change="+12.3%"
          icon={Users}
          trend="up"
          color="blue"
        />
        <MetricCard
          title="Pro Members"
          value="1,234"
          change="+8.7%"
          icon={Crown}
          trend="up"
          color="purple"
        />
        <MetricCard
          title="Avg Spending"
          value="Ar 127K"
          change="+15.2%"
          icon={DollarSign}
          trend="up"
          color="green"
        />
        <MetricCard
          title="Retention Rate"
          value="78.5%"
          change="+5.1%"
          icon={UserCheck}
          trend="up"
          color="orange"
        />
      </div>

      {/* Customer Analytics */}
      <div className="grid grid-cols-1 2xl:grid-cols-5 gap-8">
        <div className="2xl:col-span-3">
          <ChartContainer title="Customer Database">
            <div className="space-y-4">
              {customersData.map((customer, index) => (
                <CustomerCard key={index} customer={customer} />
              ))}
            </div>
          </ChartContainer>
        </div>

        <div className="2xl:col-span-2 space-y-6">
          <ChartContainer title="Demographics">
            <DemographicsChart 
              ageData={ageDistributionData}
              genderData={genderDistributionData}
              locationData={locationData}
              planData={planDistributionData}
            />
          </ChartContainer>

          <ChartContainer title="Top Locations">
            <TopLocations locationData={locationData} />
          </ChartContainer>

          <ChartContainer title="Plan Distribution">
            <PlanDistribution data={planDistributionData} />
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default CustomersTab;