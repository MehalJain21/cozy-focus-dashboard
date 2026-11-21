
function ProgressCard({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="card progress-card">
      <div className="progress-heading">
        <h3>Daily progress ♡</h3>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <span className="progress-message">
        {progress === 100 && totalTasks > 0
          ? 'You did amazing today! ✨'
          : progress >= 50
          ? 'You are doing great! ☁️'
          : 'Small steps still matter ♡'}
      </span>
    </div>
  );
}

export default ProgressCard;
