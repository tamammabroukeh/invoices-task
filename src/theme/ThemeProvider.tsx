import { useThemeStore } from "@/app/theme-store";
import { ThemeInitializer } from "@/components/ui/ThemeInitializer";
import { IChildren } from "@/interfaces/shared";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useEffect } from "react";

export const ThemeProvider = ({ children }: IChildren) => {
  const { theme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeInitializer>{children}</ThemeInitializer>
    </MuiThemeProvider>
  );
};
