import React from "react";
import { User, Globe, Calendar, Clock, Star, Play } from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="group flex items-start justify-between p-6 bg-gradient-to-r from-gray-50/50 to-transparent rounded-2xl hover:from-indigo-50/50 hover:to-purple-50/30 transition-all duration-300 hover:shadow-md">
      <div className="flex items-start space-x-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl text-2xl group-hover:scale-110 transition-transform duration-300">
          <img
            src={movie.poster}
            alt={movie.title || "Movie Poster"}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h4 className="font-bold text-gray-900 text-lg">{movie.title}</h4>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                movie.status === "Now Playing"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {movie.status}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3 text-gray-400" />
              <span className="truncate">{movie.director}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="h-3 w-3 text-gray-400" />
              <span>{movie.country.split(",")[0]}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3 text-gray-400" />
              <span>{movie.release_year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-gray-400" />
              <span>{movie.duration}min</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span className="font-medium">{movie.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Play className="h-4 w-4 text-indigo-500" />
              <span>{movie.shows} shows</span>
            </div>
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">
              {movie.genre}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right flex-shrink-0 ml-4">
        <p className="font-bold text-xl text-gray-900">
          Ar {(movie.revenue / 1000).toFixed(0)}K
        </p>
        <p className="text-gray-500 text-sm">Revenue</p>
      </div>
    </div>
  );
};

export default MovieCard;
