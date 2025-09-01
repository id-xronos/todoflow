import React from "react";

interface ProgressCardProps {
  title: string;
  value: string;
  icon: string;
  subtitle?: string;
  textColor?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, icon, subtitle, textColor }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className={`text-lg font-bold ${textColor ? textColor : ""}`}>{value}</p>
        {subtitle && <p className="text-xs text-red-500">{subtitle}</p>}
      </div>
    </div>
  );
};

export default ProgressCard;
