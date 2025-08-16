import React from "react";

const ChartContainer = ({ title, children, actions }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-100/50 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl pointer-events-none" />
    <div className="relative p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {actions && (
          <div className="flex items-center space-x-2">{actions}</div>
        )}
      </div>
      {children}
    </div>
  </div>
);

export default ChartContainer;
