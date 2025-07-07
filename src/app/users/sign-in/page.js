"use client";

import { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  
} from "@mui/material";
import MuiLink from '@mui/material/Link';
import Link from 'next/link';

export default function SignIn() {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/025/448/large_2x/fresh-vegetable-and-herb-border-free-photo.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight={600}>
               Welcome back to CookCraft!
          </Typography>
          <Typography variant="body2" color="#FB8C00">
               
              Sign in to containue sharing
          </Typography>

          <Box component="form" noValidate>
           
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#FF9800",
                "&:hover": { bgcolor: "#FB8C00" },
                textTransform: "none",
              }}
            >
              Sign In
            </Button>
          </Box>

           <Typography variant="body2" mt={2} textAlign="center">
            Don't have an account?{" "}
            <MuiLink component={Link} href="/users/sign-up" underline="hover">
              SIGN UP
            </MuiLink>
          </Typography>
        </Box>

        {/* Right Side Image */}
        <Box
          sx={{
            flex: 1,
            minHeight: { xs: 200, md: "auto" },
            backgroundImage: `url(https://www.adobe.com/acrobat/hub/media_1b055f61b038d654ab3dc0cd5328a4f0e6346c9ab.jpeg?width=1200&format=pjpg&optimize=medium)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Paper>
    </Box>
  );
}
