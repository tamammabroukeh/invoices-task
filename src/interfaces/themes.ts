import { createTheme } from "@mui/material/styles";
import { ThemeMode } from "@/types/themes";
export interface ThemeState {
  mode: ThemeMode;
  theme: ReturnType<typeof createTheme>;
  isInitialized: boolean;
  toggleTheme: () => void;
  initializeTheme: () => void;
}
