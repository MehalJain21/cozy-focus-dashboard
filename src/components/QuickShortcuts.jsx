
import {
  Clock,
  CheckSquare,
  RotateCcw,
  Heart
} from 'lucide-react';

function QuickShortcuts({ onFreshStart, onSelfCare }) {

  const shortcuts = [
    {
      icon: Clock,
      title: 'Focus time',
      subtitle: 'Time to concentrate',
      color: '#EAE1F0',
      action: () => document.getElementById('focus')?.scrollIntoView({
        behavior: 'smooth'
      })
    },
    {
      icon: CheckSquare,
      title: 'My tasks',
      subtitle: 'Stay organized',
      color: '#F4E7EC',
      action: () => document.getElementById('tasks')?.scrollIntoView({
        behavior: 'smooth'
      })
    },
    {
      icon: RotateCcw,
      title: 'Fresh start',
      subtitle: 'Reset your day',
      color: '#F4EDD9',
      action: onFreshStart
    },
    {
      icon: Heart,
      title: 'Self care',
      subtitle: 'Take a little break',
      color: '#E8EDE5',
      action: onSelfCare
    },
  ];

  return (
    <div className="shortcuts-section">

      <h3>Little shortcuts ♡</h3>

      <p className="shortcuts-subtitle">
        Small actions for a better day.
      </p>

      <div className="shortcuts-grid">

        {shortcuts.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              className="shortcut-card"
              style={{ background: item.color }}
              key={index}
              onClick={item.action}
            >
              <Icon size={23} />

              <h4>{item.title}</h4>

              <span>{item.subtitle}</span>
            </button>
          );
        })}

      </div>
    </div>
  );
}

export default QuickShortcuts;
