
import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { useLogin } from "../hooks/HomeLoginHooks";
const LoginLoader = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin();
  const handleLogin = async () => {
   loginMutation.mutate({
      username,
      password,
    });
      
  };

  return (
    <Box
      sx={{
        width: { xs: "min(100%, 320px)", sm: 400 },
        p: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        component="h5"
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Login
      </Typography>

        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleLogin}
          disabled={loginMutation.isPending || !username || !password}
          sx={{ mt: 3 }}
        >
          {loginMutation.isPending ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Login"
          )}
        </Button>
    </Box>
  );
};

export default LoginLoader;

