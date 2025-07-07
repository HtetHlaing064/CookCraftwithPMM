"use client";


import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  NextLink,


} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import MuiLink from '@mui/material/Link';
import Link from 'next/link';

const schema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  // password: yup.string().required("Password is required"),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'At least one uppercase letter required')
    .matches(/[a-z]/, 'At least one lowercase letter required')
    .matches(/\d/, 'At least one number required')
    .matches(/[!@#$%^&*]/, 'At least one special character required'),

});


export default function SignIn() {

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  })

  const onSubmit = async (formData) => {
    try {
      console.log("formData", formData);
      const bodyData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,

      };
      const response = await axios.post("/api/users", bodyData);
      reset();
      console.log("Successfully Saved.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box padding={2} component="form" onSubmit={handleSubmit(onSubmit)}
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/025/448/large_2x/fresh-vegetable-and-herb-border-free-photo.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Left: Form Section */}
        <Box sx={{
          flex: 1,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
        }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Join CookCraft Today!
          </Typography>
          <Typography variant="body2" color="#FB8C00">
            Create your account to start sharing
          </Typography>

          <TextField
            fullWidth
            label="Username"
            type="text"
            variant="outlined"
            margin="normal"

            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}

          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"

            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}

          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"

            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}

          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, backgroundColor: "#f7931e", color: "#fff" }}
          >
            Sign Up
          </Button>

          <Typography variant="body2" mt={2} textAlign="center">
            Already have an account?{" "}
            <MuiLink component={Link} href="/users/sign-in" underline="hover">
              SIGN IN
            </MuiLink>
          </Typography>

        </Box>

        {/* Right: Image Section */}
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