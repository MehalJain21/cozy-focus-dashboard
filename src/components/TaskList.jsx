
import { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';

function TaskList({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask('');
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="card tasks-card">
      <div className="task-heading">
        <div>
          <h3>Today's tasks ♡</h3>
          <span>
            {completedCount} of {tasks.length} completed
          </span>
        </div>
      </div>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add a little task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button type="submit" aria-label="Add task">
          <Plus size={18} />
        </button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks yet. Add your first little task ☁️
          </p>
        ) : (
          tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <button
                className={`check-btn ${task.completed ? 'checked' : ''}`}
                onClick={() => handleToggle(task.id)}
                aria-label="Toggle task completion"
              >
                {task.completed && <Check size={15} />}
              </button>

              <span className={task.completed ? 'completed' : ''}>
                {task.title}
              </span>

              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
                aria-label="Delete task"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
