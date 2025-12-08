import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Button from "./components/Button";
import Card from "./components/Card";
const App = () => {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(themeMode);
    }, [themeMode]);
    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeBtn */}
                        <Button />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        {/*  */}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
