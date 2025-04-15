import { useEffect, useState } from "react";
import { useThemeStore } from "@/app/theme-store";
import { CircularProgress, Box } from "@mui/material";
import { IChildren } from "@/interfaces/shared";

export const ThemeInitializer = ({ children }: IChildren) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { theme } = useThemeStore();

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: theme.palette.background.default,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <>{children}</>;
};
