import { Experiment } from '../types';

export const mockExperiments: Experiment[] = [
  {
    id: '1',
    name: 'Homepage Redesign',
    description: 'Testing new homepage layout with improved CTA placement',
    status: 'active',
    startDate: '2024-04-01',
    metrics: [
      {
        name: 'Conversion Rate',
        value: 15.2,
        change: 2.3,
        unit: '%'
      },
      {
        name: 'Avg. Time on Page',
        value: 145,
        change: 12,
        unit: 'seconds'
      }
    ],
    confidenceInterval: {
      lower: 1.2,
      upper: 3.4
    },
    steadyState: true,
    sampleSize: {
      control: 5000,
      treatment: 5000
    }
  },
  {
    id: '2',
    name: 'Pricing Page Optimization',
    description: 'A/B testing different pricing tiers and layouts',
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    metrics: [
      {
        name: 'Subscription Rate',
        value: 8.5,
        change: 1.2,
        unit: '%'
      },
      {
        name: 'Revenue per User',
        value: 45.5,
        change: 5.2,
        unit: 'USD'
      }
    ],
    confidenceInterval: {
      lower: 0.8,
      upper: 1.6
    },
    steadyState: true,
    sampleSize: {
      control: 10000,
      treatment: 10000
    }
  }
];