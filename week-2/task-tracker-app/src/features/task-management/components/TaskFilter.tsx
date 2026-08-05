import React from 'react';
import { type TaskFilterType } from '../../../types/task.types';
import { Button } from '../../../components/ui/Button';

interface TaskFilterProps {
  currentFilter: TaskFilterType;
  onFilterChange: (filter: TaskFilterType) => void; // Notifies the Dashboard component when the filter changes
}

export const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange }) => {
  // List of available filter options
  const filterOptions: TaskFilterType[] = ['ALL', 'ACTIVE', 'COMPLETED'];

  return (
    <div className="flex gap-2 justify-center my-5 bg-gray-100 p-1.5 rounded-xl border border-gray-200/50">
      {filterOptions.map((filter) => {
        const isActive = currentFilter === filter;
        return (
          <Button
            key={filter}
            variant={isActive ? 'primary' : 'secondary'}
            onClick={() => onFilterChange(filter)}
            className={`flex-1 capitalize text-xs py-2 rounded-lg font-bold tracking-wide transition-all ${
              !isActive ? 'bg-transparent border-none text-gray-500 hover:text-gray-800 hover:bg-gray-200/50' : ''
            }`}
          >
            {filter.toLowerCase()}
          </Button>
        );
      })}
    </div>
  );
};
