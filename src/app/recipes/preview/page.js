"use client";
import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RecipePreviewPage() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);


  const searchParams = useSearchParams();
  const formDataRaw = searchParams.get("formData");
  const formData = formDataRaw
    ? JSON.parse(decodeURIComponent(formDataRaw))
    : null;

  const handleEdit = () => {
    // Create page ဆီကို formData နဲ့အတူ ပြန်သွားမယ်
    router.push(
      `/recipes/create?formData=${encodeURIComponent(JSON.stringify(formData))}`
    );
  };

  // ပြင်ဆင်ပြီး code:
  const isValidImageUrl = () => {
    const imageUrl = formData?.image_url || formData?.imageUrl; // Check both property names
    if (!imageUrl) return false;

    const url = String(imageUrl); // Ensure it's a string
    return (
      url.startsWith("http://") || // Be specific with http/https
      url.startsWith("https://") ||
      url.startsWith("/") ||
      url.startsWith("blob:") // For client-side image previews
    );
  };

  if (!formData) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h6">No recipe data found to preview.</Typography>
        <Button onClick={() => router.push("/recipes/create")} variant="contained" sx={{ mt: 2, backgroundColor: "#f97316", "&:hover": { backgroundColor: "#ea580c" } }}>
          Go to Create Recipe
        </Button>
      </Box>
    );
  }
  console.log("Image URL from formData:", formData.image_url || formData.imageUrl);
  console.log("Full formData:", formData);

  // ... (existing imports and code)

  const handleSave = async () => {
    if (!formData) {
      alert("No recipe data to save!");
      return;
    }

    // Check if user is authenticated
    if (!session?.user?.id) {
      alert("Please log in first to save the recipe.");
      router.push("/auth/signin");
      return;
    }

    try {
      const saveData = {
        ...formData,
        user_id: session.user.id, // Use authenticated user's ID
        video_url: formData.video_url || null,
        status: formData.status || "pending"
      };

      console.log("Sending data to API:", saveData);

      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saveData),
      });

      console.log("API Response status:", response.status);

      if (response.ok) {
        const result = await response.json();
        console.log("API Response data:", result);
        alert('Recipe saved successfully! ID: ' + result.recipeId);
        router.push('/recipes');
      } else {
        const errorData = await response.json();
        console.error('API Error Response:', errorData);
        alert('Failed to save recipe: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      alert('An error occurred while saving the recipe: ' + error.message);
    }
  };


  return (
    <Box sx={{ backgroundColor: "#ffffffff", minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          py: 2,
          backgroundColor: "white",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#fb923c",
            fontSize: "1.25rem",
          }}
        >
          CookCraft
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography sx={{ cursor: "pointer" }}>Home</Typography>
          <Typography sx={{ cursor: "pointer" }}>Recipes</Typography>
          <Typography sx={{ cursor: "pointer" }}>About</Typography>
          <Typography sx={{ cursor: "pointer" }}>Contact us</Typography>
        </Box>


      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Header Banner */}
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            minHeight: 200,
            mb: 4,
            borderRadius: 2,
            overflow: "hidden",
            backgroundImage: "url('/images/food1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              //   backgroundColor: "rgba(255,255,255,0.8)",
              color: "#fff",
              p: 1,
              borderRadius: 1,
            }}
          >
            Recipe <span style={{ color: "#fb923c" }}>Submission</span> Form
          </Typography>
        </Paper>

        {/* Welcome Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          align="center"
          sx={{ mb: 3 }}
        >
          Welcome to <span style={{ color: "#fb923c" }}>Our Recipe</span>{" "}
          Submission Page!
        </Typography>

        {/* Recipe Card */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            mb: 4,
            border: "1px solid #fb923c",
            backgroundColor: "#fff",
          }}
        >
          {/* Recipe Image */}

          {isValidImageUrl() ? (
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              minHeight: "300px", // Added for consistent height even without image
              backgroundColor: "#f5f5f5"
            }}>
              <img
                src={formData.image_url || formData.imageUrl}
                alt="Recipe Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: "8px",
                  objectFit: "contain", // Use contain to ensure full image is visible
                }}
                onError={(e) => {
                  e.currentTarget.onerror = null; // Prevents infinite loop if default image also fails
                  e.currentTarget.src = "/images/default-food.jpg"; // Fallback image
                }}
              />
            </Box>
          ) : (
            <Box sx={{
              backgroundColor: "#f0f0f0",
              p: 4,
              textAlign: "center",
              borderRadius: "8px",
              my: 2,
              minHeight: "200px", // Ensures consistency
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Typography variant="body1" color="text.secondary">
                No image available
              </Typography>
            </Box>
          )}
          {/* Recipe Title */}
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="bold">
                {formData.name}
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#fff7ed",
                  p: 1,
                  borderRadius: 2,
                  mb: 2,
                  border: "1px solid #fb923c",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ whiteSpace: "pre-line", fontSize: "0.95rem" }}
                >
                  {formData.category}
                </Typography>
              </Paper>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              divider={
                <Box sx={{ mx: 1, borderLeft: 1, borderColor: "grey.300" }} />
              }
              spacing={1}
              mt={1}
            >
              <Typography variant="body2" fontWeight="medium">
                Prep Time – {formData.pre_cooking_time}
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                Cook Time – {formData.cooking_time}
              </Typography>
            </Stack>
          </Box>
          {/* Ingredients */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#fff7ed",
              p: 2,
              borderRadius: 2,
              mb: 2,
              border: "1px solid #fb923c",
            }}
          >
            <Typography fontWeight="bold" mb={1}>
              Ingredients
            </Typography>
            <Typography>{formData.ingredient}</Typography>
          </Paper>
          {/* Instructions */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#fff7ed",
              p: 2,
              borderRadius: 2,
              mb: 2,
              border: "1px solid #fb923c",
            }}
          >
            <Typography fontWeight="bold" mb={1}>
              Instruction
            </Typography>
            <Typography
              variant="body2"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              {formData.instruction}
            </Typography>
          </Paper>
        </Paper>

        {/* Action Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c3c0bdff",
              "&:hover": { backgroundColor: "#c4c4c4ff" },
              fontWeight: "bold",
              borderRadius: 1,
              px: 4,
              fontSize: "1rem",
            }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f97316",
              color: "#fff",
              "&:hover": { backgroundColor: "#ea580c" },
              fontWeight: "bold",
              borderRadius: 1,
              px: 4,
              fontSize: "1rem",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
