import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { MapPin } from "lucide-react";

const DemographicsChart = ({ ageData, genderData, locationData, planData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Age Distribution</h4>
        <div className="space-y-2">
          {ageData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm">
                <span>{item.range}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Gender Split</h4>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-1">
              <span>Male</span>
              <span>52%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-500 h-2 rounded-full"
                style={{ width: "52%" }}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-1">
              <span>Female</span>
              <span>48%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pink-500 h-2 rounded-full"
                style={{ width: "48%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopLocations = ({ locationData }) => (
  <div className="space-y-3">
    {locationData.map((loc, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl"
      >
        <div className="flex items-center space-x-3">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="font-medium text-gray-900">{loc.location}</span>
        </div>
        <div className="text-right">
          <span className="font-bold text-gray-900">{loc.customers}</span>
          <span className="text-gray-500 text-sm ml-1">
            ({loc.percentage}%)
          </span>
        </div>
      </div>
    ))}
  </div>
);

export const PlanDistribution = ({ data }) => (
  <div>
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="flex justify-center space-x-6 text-sm">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-purple-500 rounded-full" />
        <span>Pro (43%)</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-gray-500 rounded-full" />
        <span>Free (57%)</span>
      </div>
    </div>
  </div>
);

export default DemographicsChart;
