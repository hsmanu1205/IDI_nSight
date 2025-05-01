import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, ChevronRight } from 'lucide-react';
import { Experiment } from '../../types';
import { StatusBadge } from '../shared/StatusBadge';

interface ExperimentCardProps {
  experiment: Experiment;
  onClick: (id: string) => void;
}

export const ExperimentCard: React.FC<ExperimentCardProps> = ({ experiment, onClick }) => {
  return (
    <div
      className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(experiment.id)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {experiment.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{experiment.description}</p>
        </div>
        <StatusBadge status={experiment.status} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {experiment.metrics.map((metric) => (
          <div key={metric.name} className="space-y-2">
            <p className="text-sm text-gray-500">{metric.name}</p>
            <div className="flex items-center">
              <span className="text-lg font-semibold">{metric.value}{metric.unit}</span>
              <span className={`ml-2 flex items-center ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span className="text-sm">{Math.abs(metric.change)}%</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        {experiment.steadyState && (
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            Steady state reached
          </div>
        )}
        <div className="ml-auto flex items-center text-blue-600 text-sm group-hover:translate-x-1 transition-transform">
          View Details
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};