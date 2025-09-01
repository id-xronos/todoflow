import React from "react";
import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import TaskColumn from "./components/TaskColumn";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Progress Section */}
        <section className="grid grid-cols-4 gap-4 mb-8">
          <ProgressCard title="Total Tasks" value="6" icon="📝" />
          <ProgressCard title="Completed" value="2 (33%)" icon="✅" />
          <ProgressCard title="Pending" value="4" icon="⏳" />
          <ProgressCard
            title="High Priority"
            value="2"
            icon="🔥"
            subtitle="2 overdue"
            textColor="text-red-500"
          />
        </section>

        {/* Tasks Section */}
        <section className="grid grid-cols-3 gap-4">
          <TaskColumn
            title="To Do"
            count={2}
            tasks={[
              {
                title: "Exercise for 30 minutes",
                desc: "Go for a run or do a home workout",
                tags: ["medium", "health"],
                date: "9/1/2025",
                priority: "medium",
              },
              {
                title: "Schedule doctor appointment",
                desc: "Annual checkup is overdue",
                tags: ["high", "health"],
                date: "8/30/2025",
                priority: "high",
              },
            ]}
          />

          <TaskColumn
            title="In Progress"
            count={2}
            tasks={[
              {
                title: "Complete project proposal",
                desc: "Finish the Q4 project proposal and send it to the team for review",
                tags: ["high", "work"],
                date: "9/5/2025",
                priority: "high",
              },
              {
                title: "Plan weekend trip",
                desc: "Research and book accommodation for mountain hiking trip",
                tags: ["low", "personal"],
                date: "9/10/2025",
                priority: "low",
              },
            ]}
          />

          <TaskColumn
            title="Done"
            count={2}
            tasks={[
              {
                title: "Buy groceries",
                desc: "Get ingredients for dinner party this weekend",
                tags: ["medium", "shopping"],
                date: "9/2/2025",
                priority: "medium",
                completed: true,
              },
              {
                title: 'Read "Atomic Habits" chapter',
                desc: "Continue reading and take notes",
                tags: ["low", "learning"],
                priority: "low",
                completed: true,
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
