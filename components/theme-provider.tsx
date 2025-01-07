'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Infer the props directly from NextThemesProvider
interface CustomThemeProviderProps extends React.ComponentProps<typeof NextThemesProvider> {}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
