import React from "react";
import { Eye } from "lucide-react";

const ProductCard = ({ article }) => {
  return (
    <div className="group p-6 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl border border-gray-100/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
          <img
            src={article.url_image}
            alt={"article image"}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-gray-900 text-lg mb-1">
            {article.nom_article}
          </h5>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-lg">
            {article.categorie}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Price</span>
          <span className="font-bold text-lg text-gray-900">
            {article.prix}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Stock</span>
          <span
            className={`font-medium ${
              article.stock < 15 ? "text-red-600" : "text-gray-900"
            }`}
          >
            {article.stock} units
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Sold Today</span>
          <span className="font-medium text-green-600">
            {article.sales_today}
          </span>
        </div>
      </div>

      <div className="flex space-x-2 mt-4">
        <button className="flex-1 p-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl transition-colors duration-200 text-sm font-medium">
          Edit
        </button>
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200">
          <Eye className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
