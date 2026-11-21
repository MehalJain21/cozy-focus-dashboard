
import { useState, useEffect } from 'react';

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">

      <div>
        <p>your little workspace ☁️</p>
        <h1>Good morning, let's focus ♡</h1>
      </div>

      <div className="date">
        {formattedDate}
      </div>

    </header>
  );
}

export default Header;
