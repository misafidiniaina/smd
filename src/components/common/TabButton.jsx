import React from "react";

const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 active:bg-gray-200/50"
    }`}
  >
    <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
    <span className="flex-shrink-0">{label}</span>
  </button>
);

export default TabButton;
