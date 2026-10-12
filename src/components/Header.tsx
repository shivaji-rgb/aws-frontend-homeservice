
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#26352a",
        borderBottom: "1px solid #e8eee8",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 76,
          gap: { xs: 1, md: 3 },
          px: { xs: 2, md: 5 },
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "#278348",
          }}
        >
          <LocalDrinkOutlinedIcon sx={{ fontSize: 36 }} />
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            FreshDrop
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 0.5,
            ml: 2,
          }}
        >
          <LocationOnOutlinedIcon color="success" />
          <Box>
            <Typography variant="caption" color="text.secondary">
              Delivering to
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Your location
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f4f7f4",
            border: "1px solid #e5ebe5",
            borderRadius: 3,
            px: 1.5,
            py: 0.5,
            flex: 1,
            maxWidth: 460,
            mx: "auto",
          }}
        >
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search milk, curd, paneer..."
            sx={{ ml: 1, width: "100%" }}
          />
        </Box>

        <Button
          component={Link}
          to="/login"
          color="inherit"
          startIcon={<AccountCircleOutlinedIcon />}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          Login
        </Button>

        <IconButton
          component={Link}
          to="/cart"
          aria-label="Shopping cart"
          sx={{ color: "#278348" }}
        >
          <Badge badgeContent={0} color="success">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
