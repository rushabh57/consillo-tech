"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import gsap from "gsap"


// Logo
import logo from "/logo_1.png"
import { Toggle } from "./ui/toggle"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])


  return (
    <nav className="w-full  flex justify-between px-2 h-[80px]">
      {/* Logo */}
      <div className="flex items-center gap-2 pt-2 h-[80px] w-fit overflow-hidden">
        <img
          src={logo}
          alt="consilo_logo"
          id="logo-img"
          className="w-34 h-[160px] dark:invert dark:grayscale-100     object-cover cursor-pointer"
        />
      </div>

      <div className="flex items-center gap-4">
      <Button  variant="link">Contect us</Button>
      <Toggle
  pressed={darkMode}
  onPressedChange={(val) => setDarkMode(val)}
  className="p-2 rounded-full"
>
  {darkMode ? (
    <MoonIcon className="w-4 h-4" />
  ) : (
    <SunIcon className="w-4 h-4" />
  )}
</Toggle>

      </div>
    </nav>
  )
}
