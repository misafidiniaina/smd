import React from "react";
import { Package, ShoppingBag, DollarSign, AlertTriangle } from "lucide-react";
import MetricCard from "../common/MetricCard";
import ChartContainer from "../common/ChartContainer";
import ProductCard from "./ProductCard";
import SalesChart from "./SalesChart";
import { articlesData, salesByCategoryData } from "../../data/articlesData";

const ArticlesTab = () => {
  return (
    <div className="space-y-8">
      {/* Articles KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Total Products"
          value="156"
          change="+12"
          icon={Package}
          trend="up"
          color="blue"
        />
        <MetricCard
          title="Daily Sales"
          value="103"
          change="+18%"
          icon={ShoppingBag}
          trend="up"
          color="green"
        />
        <MetricCard
          title="Revenue Today"
          value="Ar 524K"
          change="+25%"
          icon={DollarSign}
          trend="up"
          color="orange"
        />
        <MetricCard
          title="Low Stock Items"
          value="8"
          change="-2"
          icon={AlertTriangle}
          trend="down"
          color="red"
        />
      </div>

      {/* Articles Grid & Analytics */}
      <div className="grid grid-cols-1 2xl:grid-cols-4 gap-8">
        <div className="2xl:col-span-3">
          <ChartContainer title="Product Inventory">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesData.map((article, index) => (
                <ProductCard key={index} article={article} />
              ))}
            </div>
          </ChartContainer>
        </div>

        <div className="space-y-6">
          <ChartContainer title="Sales by Category">
            <SalesChart data={salesByCategoryData} />
          </ChartContainer>

          <ChartContainer title="Top Sellers">
            <div className="space-y-3">
              {articlesData
                .sort((a, b) => b.sales_today - a.sales_today)
                .slice(0, 4)
                .map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50/50 rounded-xl"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={article.url_image}
                        alt={"article image"}
                        className="w-full h-full object-cover rounded-[5px]"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">
                        {article.nom_article}
                      </p>
                      <p className="text-xs text-gray-500">
                        {article.sales_today} sold
                      </p>
                    </div>
                    <span className="font-bold text-gray-900">
                      {article.prix}
                    </span>
                  </div>
                ))}
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default ArticlesTab;
