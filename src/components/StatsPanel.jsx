import React, { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

const StatsPanel = () => {
  const { progress } = useContext(TodoContext);

  if (!progress) return null;

  const { tasksCompletedTotal, tasksCompletedToday } = progress;

  return (
    <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)'}}>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">{tasksCompletedTotal}</p>
          <p className="text-sm opacity-80">Total Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{tasksCompletedToday}</p>
          <p className="text-sm opacity-80">Today</p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
