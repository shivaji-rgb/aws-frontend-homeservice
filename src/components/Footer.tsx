
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        bgcolor: "#173f2b",
        color: "#ffffff",
        pt: 5,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, mb: 1 }}
            >
              FreshDrop
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#d6e6d9", maxWidth: 300 }}
            >
              Fresh milk and dairy essentials delivered to
              your doorstep, every day.
            </Typography>
          </Box>

          {/* Shop */}
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
              Shop
            </Typography>

            <MuiLink
              component={RouterLink}
              to="/products"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              All Products
            </MuiLink>

            <MuiLink
              component={RouterLink}
              to="/subscriptions"
              color="inherit"
              underline="hover"
              sx={{ display: "block" }}
            >
              Subscriptions
            </MuiLink>
          </Box>

          {/* Customer Care */}
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
              Customer Care
            </Typography>

            <MuiLink
              component={RouterLink}
              to="/orders"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              My Orders
            </MuiLink>

            <MuiLink
              component={RouterLink}
              to="/help"
              color="inherit"
              underline="hover"
              sx={{ display: "block" }}
            >
              Help &amp; Support
            </MuiLink>
          </Box>

          {/* Contact */}
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
              Contact Us
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#d6e6d9" }}
            >
              Email: support@freshdrop.example
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#d6e6d9", mt: 1 }}
            >
              Freshness delivered with care.
            </Typography>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid #41654e",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#d6e6d9" }}
          >
            © 2026 FreshDrop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
