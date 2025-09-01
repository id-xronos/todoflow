import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  title: string;
  desc: string;
  tags: string[];
  date?: string;
  priority: "low" | "medium" | "high";
  completed?: boolean;
}

interface TaskColumnProps {
  title: string;
  count: number;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, count, tasks }) => {
  const bgColor =
    title === "To Do"
      ? "bg-red-50"
      : title === "In Progress"
      ? "bg-blue-50"
      : "bg-green-50";

  return (
    <div className={`${bgColor} p-4 rounded-xl`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">
          {title} <span className="text-xs bg-gray-200 px-2 py-1 rounded">{count}</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
