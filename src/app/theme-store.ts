import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { lightTheme } from "@/theme/light-theme";
import { darkTheme } from "@/theme/dark-theme";
import { ThemeState } from "@/interfaces/themes";

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: "dark",
      theme: lightTheme,
      isInitialized: false,
      toggleTheme: () => {
        const newMode = get().mode === "light" ? "dark" : "light";
        set({
          mode: newMode,
          theme: newMode === "dark" ? darkTheme : lightTheme,
        });
      },
      initializeTheme: () => {
        const mode = get().mode;
        set({
          theme: mode === "dark" ? darkTheme : lightTheme,
          isInitialized: true,
        });
      },
    }),
    {
      name: "theme-preference",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ mode: state.mode }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.initializeTheme();
        }
      },
    }
  )
);