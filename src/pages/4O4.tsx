import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFoundPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: theme.spacing(3),
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: "6rem",
            color: theme.palette.error.main,
            mb: 2,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
            fontWeight: 700,
            mb: 2,
            color:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.common.black,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 3,
            color: theme.palette.text.secondary,
          }}
        >
          Oops! Page not found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "600px",
            color: theme.palette.text.secondary,
          }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          Return to Home
        </Button>
      </Box>
    </Container>
  );
}
