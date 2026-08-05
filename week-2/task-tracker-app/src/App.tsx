import React from 'react';
import { TaskDashboard } from './features/task-management/TaskDashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 antialiased">
      <TaskDashboard />
    </div>
  );
};

export default App;
