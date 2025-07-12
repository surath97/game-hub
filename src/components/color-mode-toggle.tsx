import { HStack, IconButton, Text } from "@chakra-ui/react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <HStack>
      <IconButton aria-label="toggle color mode" variant='surface' onClick={toggleColorMode}>
        {theme === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
      <Text whiteSpace='nowrap' hideBelow={"md"}>{theme === "light" ? 'Light' : 'Dark'} Mode</Text>
    </HStack>
  )
}
