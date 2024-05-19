import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            {theme === 'dark' ? (
                <button
                    onClick={() => setTheme('light')}
                    className="flex items-center justify-center p-2 rounded-full focus:outline-none transition hover:bg-yellow-200"
                >
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                </button>
            ) : (
                <button
                    onClick={() => setTheme('dark')}
                    className="flex items-center justify-center p-2 rounded-full focus:outline-none transition hover:bg-blue-200"
                >
                    <MoonIcon className="h-6 w-6 text-blue-500" />
                </button>
            )}
        </>
    );
};