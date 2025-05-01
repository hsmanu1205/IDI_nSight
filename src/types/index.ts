export type ExperimentStatus = 'active' | 'completed' | 'paused';

export interface Experiment {
  id: string;
  name: string;
  description: string;
  status: ExperimentStatus;
  startDate: string;
  endDate?: string;
  metrics: {
    name: string;
    value: number;
    change: number;
    unit: string;
  }[];
  confidenceInterval: {
    lower: number;
    upper: number;
  };
  steadyState: boolean;
  sampleSize: {
    control: number;
    treatment: number;
  };
}

export interface FilterOptions {
  status: ExperimentStatus[];
  dateRange: {
    start: string;
    end: string;
  };
  metrics: string[];
}