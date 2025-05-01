import React from 'react';
import { ExperimentStatus } from '../../types';
import { CheckCircle, Pause, Play } from 'lucide-react';

interface StatusBadgeProps {
  status: ExperimentStatus;
}

const statusConfig = {
  active: {
    color: 'bg-green-100/80 text-green-800 border border-green-200/50',
    icon: Play,
  },
  completed: {
    color: 'bg-blue-100/80 text-blue-800 border border-blue-200/50',
    icon: CheckCircle,
  },
  paused: {
    color: 'bg-yellow-100/80 text-yellow-800 border border-yellow-200/50',
    icon: Pause,
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${config.color}`}>
      <Icon className="w-3.5 h-3.5 mr-1" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};