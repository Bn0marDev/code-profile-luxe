import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 left-6 z-50 rounded-full bg-card backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-card transition-all duration-300 hover:shadow-glow"
      aria-label={theme === "dark" ? "تفعيل النمط النهاري" : "تفعيل النمط الليلي"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-transform hover:rotate-180 duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform hover:rotate-180 duration-500" />
      )}
    </Button>
  );
};
