import React from 'react';
import { ExperimentCard } from './ExperimentCard';
import { Experiment } from '../../types';

interface ExperimentsListProps {
  experiments: Experiment[];
  onExperimentClick: (id: string) => void;
}

export const ExperimentsList: React.FC<ExperimentsListProps> = ({
  experiments,
  onExperimentClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {experiments.map((experiment) => (
        <ExperimentCard
          key={experiment.id}
          experiment={experiment}
          onClick={onExperimentClick}
        />
      ))}
    </div>
  );
};