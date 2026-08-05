// Structural model representing the schema blueprint for an individual Task node
export interface Task {
  id: string;           // Automatically generated unique identifier
  title: string;        // The display string title of the task
  isCompleted: boolean; // Flag status indicating whether the task has been marked completed
  createdAt: string;    // ISO timestamp indicating when the record was initialized
}

// Validation structural schema to bind form interface evaluation error traces
export interface TaskValidationError {
  title?: string;       // Holds conditional validation failure runtime error messages
}

// Explicit strict literal type union managing permissible query filtration routes
export type TaskFilterType = 'ALL' | 'ACTIVE' | 'COMPLETED';
