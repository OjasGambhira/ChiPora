import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-14 items-center rounded-full border border-current/30 px-1 transition-colors"
    >
      <span
        className={`block h-5 w-5 rounded-full bg-brass transition-transform duration-300 ease-out ${
          isDark ? "translate-x-0" : "translate-x-6"
        }`}
      />
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
