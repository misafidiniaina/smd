import React from 'react';
import { Film, Play, Star, Calendar } from 'lucide-react';
import MetricCard from '../common/MetricCard';
import ChartContainer from '../common/ChartContainer';
import MovieCard from './MovieCard';
import GenreChart from './GenreChart';
import { moviesData, genreData } from '../../data/moviesData';

const MoviesTab = () => {
  return (
    <div className="space-y-8">
      {/* Movies KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Total Movies"
          value="48"
          change="+3"
          icon={Film}
          trend="up"
          color="indigo"
        />
        <MetricCard
          title="Now Playing"
          value="24"
          change="+2"
          icon={Play}
          trend="up"
          color="green"
        />
        <MetricCard
          title="Avg Rating"
          value="8.1"
          change="+0.3"
          icon={Star}
          trend="up"
          color="orange"
        />
        <MetricCard
          title="Total Shows"
          value="92"
          change="+8"
          icon={Calendar}
          trend="up"
          color="purple"
        />
      </div>

      {/* Movies List & Analytics */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8">
        <div className="2xl:col-span-2">
          <ChartContainer title="Movie Catalog">
            <div className="space-y-4">
              {moviesData.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </ChartContainer>
        </div>

        <div className="space-y-6">
          <ChartContainer title="Genre Distribution">
            <GenreChart data={genreData} />
          </ChartContainer>

          <ChartContainer title="Performance Metrics">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50/50 rounded-xl">
                <span className="text-gray-600">Avg Duration</span>
                <span className="font-bold">159 min</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 rounded-xl">
                <span className="text-gray-600">Total Runtime</span>
                <span className="font-bold">7,632 min</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 rounded-xl">
                <span className="text-gray-600">Highest Rated</span>
                <span className="font-bold">Dune (9.1)</span>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default MoviesTab;