import { useState, useEffect } from "react"

export const theme = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  useEffect(() => {
    if(darkTheme == true) document.documentElement.classList.add("dark")
    if(darkTheme == false) document.documentElement.classList.remove("dark")
  }, [darkTheme])

  const handleThemeChange = () => setDarkTheme(!darkTheme)

  return { darkTheme, handleThemeChange }
}
