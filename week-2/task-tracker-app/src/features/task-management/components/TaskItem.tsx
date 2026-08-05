import React from 'react';
import { type Task } from '../../../types/task.types';
import { Button } from '../../../components/ui/Button';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void; // Toggles task completion state
  onDelete: (id: string) => void;         // Deletes the task from the list
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  
  // Professional helper utility to format the date into a human-readable string
  const formatCreationDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div 
      className={`flex items-center justify-between p-4 border rounded-xl shadow-sm transition-all duration-300 transform hover:scale-[1.01] ${
        task.isCompleted 
          ? 'border-green-200 bg-green-50/20' 
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-start gap-3.5 flex-1 min-w-0">
        {/* 1. Selection Checkbox Control */}
        <div className="flex items-center h-5 mt-0.5">
          <input
            id={`task-checkbox-${task.id}`}
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onToggleComplete(task.id)}
            className="h-[18px] w-[18px] rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition-colors"
          />
        </div>

        {/* 2. Task Content and Creation Timestamp */}
        <div className="flex flex-col min-w-0 flex-1">
          <label 
            htmlFor={`task-checkbox-${task.id}`}
            className={`text-sm font-semibold cursor-pointer break-words transition-all select-none ${
              task.isCompleted ? 'line-through text-gray-400 font-medium' : 'text-gray-800'
            }`}
          >
            {task.title}
          </label>
          <span className="text-[11px] text-gray-400 mt-0.5 font-medium">
            📅 Created: {formatCreationDate(task.createdAt)}
          </span>
        </div>
      </div>

      {/* 3. Action Control (Delete Button) */}
      <div className="ml-4 flex-shrink-0">
        <Button 
          variant="danger" 
          onClick={() => onDelete(task.id)} 
          className="px-3 py-1.5 text-xs font-bold rounded-lg"
          aria-label={`Delete task ${task.title}`}
        >
          🗑️ Delete
        </Button>
      </div>
    </div>
  );
};
