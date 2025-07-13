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

export default function RecipeSubmissionPage() {
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

        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography>a)</Typography>
          <Typography>«</Typography>
          <Typography>r</Typography>
          <Typography>)</Typography>
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
            color:"#fff",
              p: 1,
              borderRadius: 1,
            }}
          >
            Recipe <span style={{ color: "#fb923c" }}>Submission</span> Form
          </Typography>
        </Paper>

        {/* Welcome Title */}
        <Typography variant="h6" fontWeight="bold" align="center" sx={{ mb: 3 }}>
          Welcome to <span style={{ color: "#fb923c" }}>Our Recipe</span> Submission Page!
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
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Box
              component="img"
              src="/images/food2.jpg"
              alt="Crispy Fried Prawns"
              sx={{
                width: 500,
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Recipe Title */}
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="bold">
                Crispy Fried Prawns
              </Typography>
              <Chip
                label="Lunch"
                size="small"
                sx={{
                  backgroundColor: "#fff7ed",
                  color: "#fb923c",
                  fontWeight: "bold",
                }}
              />
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
                Prep Time – 10 mins
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                Cook Time – 20 mins
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
            <List dense disablePadding>
              {[
                "Prawns",
                "Wheat flour",
                "Corn flour",
                "Rice flour",
                "Egg",
                "Salt",
              ].map((item, idx) => (
                <ListItem key={idx} sx={{ py: 0 }}>
                  <ListItemText primary={`• ${item}`} />
                </ListItem>
              ))}
            </List>
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
              sx={{ whiteSpace: "pre-line", lineHeight: 1.8, fontSize: "0.95rem" }}
            >
              {`Prepare the prawns: Slit the back of each prawn and remove the digestive tract.
Score the prawns: Make 5–6 diagonal cuts on the underside of the prawn's belly.
Stretch the prawns: Place a prawn on a cutting board. Press down lengthwise to stretch it out. You can aim to stretch it 1.5 times its original length. With patience, you might even get it to double in length.

Make the batter: In a bowl combine the all-purpose flour, rice flour, cornstarch, beaten egg, and salt. Gradually add water, mixing until you get a thick batter.`}
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
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f97316",
              "&:hover": { backgroundColor: "#ea580c" },
              fontWeight: "bold",
              borderRadius: 1,
              px: 4,
              fontSize: "1rem",
            }}
          >
            Save
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}