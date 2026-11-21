
import { useState, useEffect } from 'react';

import FocusTimer from './components/FocusTimer';
import TaskList from './components/TaskList';
import ProgressCard from './components/ProgressCard';
import MotivationCard from './components/MotivationCard';
import QuickShortcuts from './components/QuickShortcuts';

import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  // Store tasks in App
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('cozy-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem('cozy-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });



  const handleFreshStart = () => {
  const confirmed = window.confirm(
    'Are you sure you want to clear all tasks?'
  );

  if (confirmed) {
    setTasks([]);
  }
};

const handleSelfCare = () => {
  alert('Take a deep breath. You deserve a little break. ♡');
};


  return (
    <div className="app">

      <aside className="sidebar">
        <h2>☁️ cozy focus</h2>

        <nav>
          <a className="active">⌂ Home</a>
          <a>☷ Tasks</a>
          <a>◷ Focus</a>
          <a>▤ Statistics</a>
        </nav>

        <p className="sidebar-note">
          little steps matter ♡
        </p>
      </aside>

      <main className="main-content">

        <header className="header">
          <div>
            <p>your little workspace ☁️</p>
            <h1>Good morning, let's focus ♡</h1>
          </div>

          <div className="date">{formattedDate}</div>
        </header>

        <section className="dashboard-grid">

          <div className="card clock-card">
            <p>Current time</p>
            <h2>{formattedTime}</h2>
            <span>a fresh start ✨</span>
          </div>

          <div id="focus">
  <FocusTimer />
</div>

         <div id="tasks">
  <TaskList
    tasks={tasks}
    setTasks={setTasks}
  />
</div>

          <ProgressCard tasks={tasks} />

          <MotivationCard />

        </section>

      <QuickShortcuts
  onFreshStart={handleFreshStart}
  onSelfCare={handleSelfCare}
/>

      </main>
    </div>
  );
}

export default App;
