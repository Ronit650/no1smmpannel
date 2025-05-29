import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="text-lg font-semibold">Dashboard</div>
      <button onClick={toggleDark} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}