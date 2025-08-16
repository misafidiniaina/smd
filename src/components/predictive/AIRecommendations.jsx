import React from "react";
import { Target } from "lucide-react";

const AIRecommendations = ({
  marketingStrategies,
  operationalInsights,
  modelPerformance,
  moviePredictions,
}) => {
  const getTypeClass = (type) => {
    const classes = {
      blue: "bg-blue-50/50 border-blue-500 text-blue-900",
      green: "bg-green-50/50 border-green-500 text-green-900",
      orange: "bg-orange-50/50 border-orange-500 text-orange-900",
      purple: "bg-purple-50/50 border-purple-500 text-purple-900",
    };
    return classes[type] || classes.blue;
  };

  const getTypeTextClass = (type) => {
    const classes = {
      blue: "text-blue-700",
      green: "text-green-700",
      orange: "text-orange-700",
      purple: "text-purple-700",
    };
    return classes[type] || classes.blue;
  };

  return (
    <div className="space-y-8">
      {/* Movie Performance Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {moviePredictions.map((movie, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl border border-indigo-100/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900">{movie.title}</h4>
              <div className="flex items-center space-x-1">
                <Target className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium text-indigo-600">
                  {movie.confidence}%
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Predicted Revenue</span>
                <span className="font-bold text-gray-900">
                  Ar {(movie.predicted_revenue / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                  style={{ width: `${movie.confidence}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">
                Confidence Level: {movie.confidence}%
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* AI-Powered Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 mb-3">
            🎯 Marketing Strategies
          </h4>
          <div className="space-y-3">
            {marketingStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-l-4 ${getTypeClass(
                  strategy.type
                )}`}
              >
                <h5 className="font-medium">{strategy.title}</h5>
                <p
                  className={`text-sm mt-1 ${getTypeTextClass(strategy.type)}`}
                >
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 mb-3">
            📊 Operational Insights
          </h4>
          <div className="space-y-3">
            {operationalInsights.map((insight, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-l-4 ${getTypeClass(
                  insight.type
                )}`}
              >
                <h5 className="font-medium">{insight.title}</h5>
                <p className={`text-sm mt-1 ${getTypeTextClass(insight.type)}`}>
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Performance */}
      <div className="space-y-4">
        {modelPerformance.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border ${getTypeClass(item.type)}`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.type === "green"
                    ? "bg-green-500"
                    : item.type === "blue"
                    ? "bg-blue-500"
                    : "bg-purple-500"
                }`}
              />
              <span className="font-medium">{item.title}</span>
            </div>
            <p className={`text-sm ${getTypeTextClass(item.type)}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;
