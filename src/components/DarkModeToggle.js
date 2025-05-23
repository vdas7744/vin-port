import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-xl text-gray-600 dark:text-yellow-300 hover:text-blue-600 dark:hover:text-white transition duration-200"
      title="Toggle Dark Mode"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
