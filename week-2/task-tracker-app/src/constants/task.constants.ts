import { type Task } from '../types/task.types';

// Default initial tasks provided when the project starts
export const INITIAL_TASKS: Task[] = [
  {
    id: 'initial-1',
    title: 'Study useState and state updates in React',
    isCompleted: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'initial-2',
    title: 'Meeting with Ustaz Aslem',
    isCompleted: false,
    createdAt: new Date().toISOString(),
  },

  {
    id: 'initial-3',
    title: 'Meeting with Ustaz Aslem',
    isCompleted: false,
    createdAt: new Date().toISOString(), 
  },
];

// Constant error messages used during validation
export const TASK_ERRORS = {
  EMPTY: 'Task title cannot be empty!',
  TOO_SHORT: 'Task title must be more than 3 characters long!',
  DUPLICATE: 'This task is already registered! Please try another.',
} as const; 
// Using "as const" makes it read-only so no one can modify it in the code - Very Professional!
