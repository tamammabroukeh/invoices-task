import { AppBar, Toolbar, Typography } from "@mui/material";
import ThemeToggle from "@/components/ui/ThemeSwitcher";

function Header() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Invoices Manager UI
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
