import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
          T
        </div>
        <h1 className="text-xl font-semibold">Todo Flow</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          + Add Todo
        </button>
        <button className="text-xl">⟳</button>
      </div>
    </header>
  );
};

export default Header;
