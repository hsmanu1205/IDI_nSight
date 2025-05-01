import React, { useState } from 'react';
import { FilterPanel } from './FilterPanel';
import { ExperimentsList } from './ExperimentsList';
import { ExportButton } from '../shared/ExportButton';
import { mockExperiments } from '../../utils/mockData';
import { Experiment, ExperimentStatus } from '../../types';
import { Beaker, BarChart2 } from 'lucide-react';

export const ExperimentsDashboard: React.FC = () => {
  const [filteredExperiments, setFilteredExperiments] = useState<Experiment[]>(mockExperiments);

  const handleFilterChange = ({
    status,
    dateRange,
  }: {
    status: ExperimentStatus[];
    dateRange: { start: string; end: string };
  }) => {
    let filtered = [...mockExperiments];

    if (status.length > 0) {
      filtered = filtered.filter((exp) => status.includes(exp.status));
    }

    if (dateRange.start) {
      filtered = filtered.filter(
        (exp) => new Date(exp.startDate) >= new Date(dateRange.start)
      );
    }

    if (dateRange.end) {
      filtered = filtered.filter(
        (exp) => new Date(exp.startDate) <= new Date(dateRange.end)
      );
    }

    setFilteredExperiments(filtered);
  };

  const handleExport = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Name,Status,Start Date,End Date,Metrics\n' +
      filteredExperiments
        .map((exp) => {
          const metrics = exp.metrics
            .map((m) => `${m.name}: ${m.value}${m.unit}`)
            .join('; ');
          return `${exp.name},${exp.status},${exp.startDate},${
            exp.endDate || ''
          },${metrics}`;
        })
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'experiments.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExperimentClick = (id: string) => {
    console.log(`Navigate to experiment ${id}`);
  };

  const stats = {
    total: mockExperiments.length,
    active: mockExperiments.filter(e => e.status === 'active').length,
    completed: mockExperiments.filter(e => e.status === 'completed').length
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Experiments Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Beaker className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Experiments</p>
              <p className="text-2xl font-semibold">{stats.total}</p>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <BarChart2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Experiments</p>
              <p className="text-2xl font-semibold">{stats.active}</p>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-semibold">{stats.completed}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex-1">
          <FilterPanel onFilterChange={handleFilterChange} />
        </div>
        <ExportButton onExport={handleExport} />
      </div>

      <ExperimentsList
        experiments={filteredExperiments}
        onExperimentClick={handleExperimentClick}
      />
    </div>
  );
};