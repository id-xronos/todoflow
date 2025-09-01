import React from "react";

interface TaskProps {
  title: string;
  desc: string;
  tags: string[];
  date?: string;
  priority: "low" | "medium" | "high";
  completed?: boolean;
}

const TaskCard: React.FC<TaskProps> = ({ title, desc, tags, date, priority, completed }) => {
  const borderColor =
    priority === "high"
      ? "border-red-500"
      : priority === "medium"
      ? "border-yellow-500"
      : "border-green-500";

  return (
    <div
      className={`bg-white p-4 rounded-xl shadow border-l-4 ${borderColor} ${
        completed ? "opacity-60" : ""
      }`}
    >
      <h3 className="font-semibold text-gray-800 text-sm">
        {completed ? <s>{title}</s> : title}
      </h3>
      <p className="text-xs text-gray-500">{desc}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 px-2 py-1 rounded capitalize"
          >
            {tag}
          </span>
        ))}
      </div>
      {date && (
        <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
          📅 {date}
        </p>
      )}
      <div className="flex gap-2 mt-2">
        <button className="text-gray-500 text-sm">✏️</button>
        <button className="text-red-500 text-sm">🗑</button>
      </div>
    </div>
  );
};

export default TaskCard;
