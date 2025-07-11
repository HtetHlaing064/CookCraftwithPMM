"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  FormHelperText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const CATEGORY = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "dessert", label: "Dessert" },
];

const schema = yup.object().shape({
  user_id: yup
    .number()
    .typeError("User ID must be a number")
    .required("User ID is required"),
  name: yup.string().required("Recipe name is required"),

  ingredient: yup
    .string()
    .min(10, "Ingredients should be at least 10 characters")
    .required("Ingredients are required"),

  instruction: yup
    .string()
    .min(10, "Instructions should be at least 10 characters")
    .required("Instructions are required"),

  category: yup
    .string()
    .oneOf(["breakfast", "lunch", "dinner", "dessert"], "Invalid category")
    .required("Category is required"),

  pre_cooking_time: yup.string().required("Pre-cooking time is required"),

  cooking_time: yup.string().required("Cooking time is required"),

  image: yup.mixed().required("Image is required"),

  video_url: yup
    .string()
    .url("Must be a valid URL")
    .required("Video URL is required"),

  status: yup
    .string()
    .oneOf(["pending", "approve", "reject"], "Invalid status"),
});

export default function SubmitRecipePage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");



  const onSubmit =async (formData) => {
  try {
      if (!session?.user?.id) {
        setMessage("Please log in first to submit a recipe.");
        setMessageType("error");
        return;
      }

      console.log("formData", formData);
      const bodyData = {
         user_id: session.user.id,
        name: formData.father_name,
        ingredient: formData.ingredient,
        instruction: formData.instruction,
        category:formData.category ,
        pre_cooking_time: formData.pre_cooking_time,
        cooking_time: formData.cooking_time,
        image: formData.image,
        video_url: formData.video_url,
      };
      console.log(bodyData);
      
      const response = await axios.post("/api/recipes", bodyData);
      reset();
      console.log("Successfully Saved.");
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <Box sx={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Navbar */}
      <AppBar position="static" color="default" sx={{ boxShadow: 2 }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "lg",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fb923c" }}
          >
            CookCraft
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {["Home", "Recipes", "About"].map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  "&:hover": {
                    bgcolor: "#fb923c",
                    color: "#fff",
                    transform: "scale(1.02)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AccountCircleIcon sx={{ color: "gray", fontSize: 28 }} />
            <MenuIcon sx={{ color: "gray", fontSize: 28 }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Banner */}
      <Box
        sx={{
          backgroundImage: `url("/banner1.avif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          py: { xs: 6, md: 8 },
          px: 2,
          position: "relative",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" fontWeight="bold">
              Share Your{" "}
              <Box component="span" sx={{ color: "#fde047" }}>
                Favorite Recipe
              </Box>
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
              Submit your delicious dish and inspire food lovers around the
              world.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: "white",
                color: "#fb923c",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Container>
      </Box>

      {/* Form */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          elevation={4}
          sx={{ p: 4, borderRadius: 3, boxShadow: 6, bgcolor: "white" }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Submit a Recipe 🍽️
          </Typography>

          {message && (
            <Box
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                bgcolor:
                  messageType === "success" ? "success.light" : "error.light",
                color:
                  messageType === "success"
                    ? "success.contrastText"
                    : "error.contrastText",
              }}
            >
              {message}
            </Box>
          )}

          <Stack spacing={3}>
            <TextField
              label="Recipe By"
              fullWidth
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="Recipe Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Pre Cooking Time (minutes)"
              fullWidth
              {...register("pre_cooking_time")}
              error={!!errors.pre_cooking_time}
              helperText={errors.pre_cooking_time?.message}
            />

            <TextField
              label="Cooking Time (minutes)"
              fullWidth
              {...register("cooking_time")}
              error={!!errors.cooking_time}
              helperText={errors.cooking_time?.message}
            />

           

            <FormControl
              fullWidth
              sx={{ mb: 2 }}
              margin="normal"
              error={!!errors.category}
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Controller
                name="category"
                control={control}
                error={!!errors.category}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="category-label"
                    label="Category"
                    value={field.value || ""}
                  >
                    {CATEGORY.map((category, index) => (
                      <MenuItem key={category.value} value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              <FormHelperText>{errors.category?.message}</FormHelperText>
            </FormControl>

            <TextField
              label="Ingredients"
              multiline
              rows={5}
              fullWidth
              {...register("ingredient")}
              error={!!errors.ingredient}
              helperText={errors.ingredient?.message}
            />

            <TextField
              label="Instructions"
              multiline
              rows={5}
              fullWidth
              {...register("instruction")}
              error={!!errors.instruction}
              helperText={errors.instruction?.message}
            />

            <Button variant="outlined" component="label">
              Upload Image
              <input
                type="file"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setImageFile(file);
                }}
              />
            </Button>

            <TextField
          label="Video Link (optional)"
          fullWidth
          {...register("video_url")}
          error={!!errors.video_url}
          helperText={errors.video_url?.message}
        />


            <Button type="submit" variant="contained" size="large">
              Submit Recipe
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}