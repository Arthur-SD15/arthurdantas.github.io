"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ButtonTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export default ButtonTheme;
