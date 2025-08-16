import React from "react";
import { Film, Users, ShoppingBag, Brain, Settings } from "lucide-react";
import { useDashboard } from "../hooks/useDashboard";
import { TIME_PERIODS } from "../utils/constants";
import TabButton from "../components/common/TabButton";
import MoviesTab from "../components/movies/MoviesTab";
import ArticlesTab from "../components/articles/ArticlesTab";
import CustomersTab from "../components/customers/CustomersTab";
import PredictiveTab from "../components/predictive/PredictiveTab";

const Dashboard = () => {
  const { activeTab, selectedPeriod, handleTabChange, handlePeriodChange } =
    useDashboard();

  const tabs = [
    { id: "movies", label: "Movies", icon: Film },
    { id: "articles", label: "Articles", icon: ShoppingBag },
    { id: "customers", label: "Customers", icon: Users },
    { id: "predictive", label: "AI Analytics", icon: Brain },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case "movies":
        return <MoviesTab />;
      case "articles":
        return <ArticlesTab />;
      case "customers":
        return <CustomersTab />;
      case "predictive":
        return <PredictiveTab />;
      default:
        return <MoviesTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Header Content */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-6 gap-4 sm:gap-0">
            {/* Logo and Title Section */}
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
                StellamCine
              </h1>
              <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg">
                Comprehensive business intelligence for cinema management
              </p>
            </div>

            {/* Controls Section */}
            <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-6 flex-shrink-0">
              <select
                value={selectedPeriod}
                onChange={(e) => handlePeriodChange(e.target.value)}
                className="bg-white/90 border border-gray-200/50 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-gray-700 font-medium shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all duration-200 outline-none"
              >
                {TIME_PERIODS.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
              <button className="p-2 sm:p-3 bg-gray-100/80 hover:bg-gray-200/80 rounded-xl sm:rounded-2xl transition-colors duration-200 group">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 group-hover:text-gray-700 transition-colors duration-200" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <nav className="pb-4 sm:pb-6 overflow-x-auto">
            <div className="flex space-x-1 sm:space-x-2 min-w-max sm:min-w-0">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  icon={tab.icon}
                  isActive={activeTab === tab.id}
                  onClick={handleTabChange}
                />
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Area with Fixed Top Padding */}
      <main className="pt-32 sm:pt-36 lg:pt-40">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
          {/* Content Container with Consistent Height */}
          <div className="min-h-[calc(100vh-12rem)] sm:min-h-[calc(100vh-13rem)] lg:min-h-[calc(100vh-14rem)]">
            {renderActiveTab()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
