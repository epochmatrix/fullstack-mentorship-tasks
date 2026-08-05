import React, { useState } from 'react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { type Task } from '../../../types/task.types';
import { TASK_ERRORS } from '../../../constants/task.constants';

interface TaskFormProps {
  existingTasks: Task[]; // Received from the Dashboard for duplicate checking
  onAddTask: (title: string) => void; // Dispatches the verified title back to the parent component
}

export const TaskForm: React.FC<TaskFormProps> = ({ existingTasks, onAddTask }) => {
  // 1. Local State for controlled input and error tracking
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  // 2. Event Handling: Clear errors on the fly as the user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
    if (error) setError(''); // Clears the active validation message when user interaction resumes
  };

  // 3. Form Submission & Professional Validation
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    const cleanedTitle = title.trim(); // Remove leading and trailing whitespace characters

    // A. Verify field is not blank
    if (cleanedTitle === '') {
      setError(TASK_ERRORS.EMPTY);
      return;
    }

    // B. Check minimum character length requirement
    if (cleanedTitle.length < 3) {
      setError(TASK_ERRORS.TOO_SHORT);
      return;
    }

    // C. Scan existing tasks for matching records (Case-insensitive check)
    const isDuplicate = existingTasks.some(
      (task) => task.title.toLowerCase() === cleanedTitle.toLowerCase()
    );

    if (isDuplicate) {
      setError(TASK_ERRORS.DUPLICATE);
      return;
    }

    // Pass the payload to the Dashboard once all validations pass successfully
    onAddTask(cleanedTitle);
    setTitle(''); // Reset input control layout
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-3 items-start bg-gray-50 p-5 rounded-xl border border-gray-200/80 shadow-sm"
    >
      <div className="w-full sm:flex-1">
        <Input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="What needs to be done?"
          error={error}
          id="task-input"
        />
      </div>
      <Button 
        type="submit" 
        variant="primary" 
        className="w-full sm:w-auto h-[42px] px-6 mt-[1.5px]"
      >
        ➕ Add Task
      </Button>
    </form>
  );
};
