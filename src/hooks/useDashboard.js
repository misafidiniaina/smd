import { useState } from "react";

export const useDashboard = () => {
  const [activeTab, setActiveTab] = useState("movies");
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return {
    activeTab,
    selectedPeriod,
    handleTabChange,
    handlePeriodChange,
  };
};
