
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { label: "Home", path: "/" },
  { label: "All Products", path: "/products" },
  { label: "Fresh Milk", path: "/products/milk" },
  { label: "Curd & Yogurt", path: "/products/curd" },
  { label: "Paneer & Butter", path: "/products/dairy" },
  { label: "Daily Subscription", path: "/subscriptions" },
];

export default function Sidebar() {
  return (
    <Box
      component="nav"
      aria-label="Shop categories"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 0.5, md: 2 },
        px: { xs: 1.5, md: 5 },
        py: 1,
        bgcolor: "#f0f7ef",
        borderBottom: "1px solid #e0ebdf",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.path}
          component={Link}
          to={category.path}
          color="inherit"
          sx={{
            flexShrink: 0,
            textTransform: "none",
            fontWeight: 600,
            color: "#355b3c",
            borderRadius: 2,
            "&:hover": {
              bgcolor: "#dceedd",
              color: "#21723b",
            },
          }}
        >
          {category.label}
        </Button>
      ))}
    </Box>
  );
}
