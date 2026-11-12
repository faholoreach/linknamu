"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-white/60 bg-white/40 px-4 py-2 text-sm shadow-sm backdrop-blur-xl transition duration-300 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {dark ? "☀️ 라이트" : "🌙 다크"}
    </button>
  );
}
