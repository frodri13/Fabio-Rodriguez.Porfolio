'use client'
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        setIsDarkMode(root.classList.contains('dark'))
    }, [])

    const toggleDarkMode = () => {
        const root = window.document.documentElement;
        root.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
      };
    
      return (
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      );
}