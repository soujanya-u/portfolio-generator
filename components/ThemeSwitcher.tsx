"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
