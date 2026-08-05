import React, { useState } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskFilter } from './components/TaskFilter';
import { TaskItem } from './components/TaskItem';
import { type Task, type TaskFilterType } from '../../types/task.types';
import { INITIAL_TASKS } from '../../constants/task.constants';

export const TaskDashboard: React.FC = () => {
  // 1. STATE MANAGEMENT: Holds the core list of tasks and the currently active filter selection
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [filter, setFilter] = useState<TaskFilterType>('ALL');

  // 2. STATE UPDATES & HANDLERS: Instantiates a new task records with localized structural validation
  const handleAddTask = (title: string): void => {
    const newTask: Task = {
      id: crypto.randomUUID(), // Industry-standard production-ready native UUID generation
      title,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    // Functional Update execution pattern to enforce structural immutability guidelines
    setTasks((prev) => [...prev, newTask]);
  };

  // Toggles the specific completion operational status flag of a target task node
  const handleToggleComplete = (id: string): void => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))
    );
  };

  // Permanently purges and filters out a single targeted task collection item by identifier
  const handleDeleteTask = (id: string): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // 3. RENDERING LOGIC: Segregates and computes datasets depending on runtime filter flags
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ACTIVE') return !task.isCompleted;
    if (filter === 'COMPLETED') return task.isCompleted;
    return true;
  });

  // 4. DERIVED STATE (Statistical analysis aggregations)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.isCompleted).length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-xl border border-gray-100 mt-6">
      {/* Header layout layout module */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Task Manager</h1>
        <p className="text-sm text-gray-500 mt-1.5 font-medium">
          Demonstrating Architecture & Advanced Hooks Flow
        </p>
      </header>

      {/* Metrics breakdown visualization profile layer (Progress Tracking Component) */}
      <section className="mb-6 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
        <div className="flex justify-between items-center text-sm font-bold text-blue-900 mb-2">
          <span>📊 Progress Summary</span>
          <span>{completedTasks}/{totalTasks} Completed ({completionPercentage}%)</span>
        </div>
        <div className="w-full bg-blue-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-500 ease-out" 
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </section>

      {/* Decoupled layout components bridge configuration layer */}
      <section className="space-y-4">
        <TaskForm existingTasks={tasks} onAddTask={handleAddTask} />
        
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

        {/* Task list tracking iteration output layer */}
        <div className="space-y-3 mt-4 max-h-[400px] overflow-y-auto pr-1">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-10 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-xl font-medium bg-gray-50/50">
              No tasks found for this view.
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};
