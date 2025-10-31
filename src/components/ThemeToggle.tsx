import { BiMoon, BiSun } from 'react-icons/bi'

interface Props {
  lightThemeText: string
  darkThemeText: string
}

declare global {
  interface Window {
    __toggleDarkMode?: () => void
  }
}

export default function ThemeToggle({ lightThemeText, darkThemeText }: Props) {
  const toggleTheme = () => {
    if (typeof window !== 'undefined' && window.__toggleDarkMode) {
      window.__toggleDarkMode()
    }
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="cursor-pointer dark-hidden inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 hover:bg-bg hover:text-accent h-8 rounded-md px-2.5 py-3 gap-1.5"
      >
        <BiSun size="1.1em" />
        <span className="hidden sm:inline">{lightThemeText}</span>
      </button>
      <button
        onClick={toggleTheme}
        className="cursor-pointer light-hidden inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 hover:bg-bg hover:text-accent h-8 rounded-md px-2.5 py-3 gap-1.5"
      >
        <BiMoon size="1.1em" />
        <span className="hidden sm:inline">{darkThemeText}</span>
      </button>
    </>
  )
}
