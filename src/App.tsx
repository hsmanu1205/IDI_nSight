import React from 'react';
import { ExperimentsDashboard } from './components/Dashboard/ExperimentsDashboard';
import { BeakerIcon, LayoutDashboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="glass-card border-0 border-b border-gray-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <BeakerIcon className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IDInsight Experiments
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
              <LayoutDashboard className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Dashboard</span>
            </button>
          </div>
        </div>
      </nav>
      <ExperimentsDashboard />
    </div>
  );
}

export default App;