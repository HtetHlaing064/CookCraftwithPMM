"use client";

import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Container,
  Paper,
  Stack,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Divider,
  Chip,
  Rating,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function RecipeDetailPage() {
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#F57C00" }}
          >
            CookCraft
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography>Home</Typography>
            <Typography sx={{ color: "#F57C00" }}>Recipes</Typography>
            <Typography>About</Typography>
            <Typography>Contact us</Typography>
            <NotificationsIcon />
            <Avatar sx={{ bgcolor: "#F57C00" }}>K</Avatar>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Left Side */}
          <Box flex={2}>
            <Card elevation={6} sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                width="400"
                height="500"
                image="/images/chicken.jpg"
                alt="Crispy Fried Prawns"
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Crispy Fried Prawns
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} my={1}>
                  <Avatar sx={{ width: 24, height: 24 }} />
                  <Typography variant="body2">Kelvin</Typography>
                </Stack>
                <Stack direction="row" spacing={1} my={1}>
                  <Button
                    variant="outlined"
                    startIcon={<ThumbUpIcon />}
                    size="small"
                  >
                    Like
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<ShareIcon />}
                    size="small"
                  >
                    Share
                  </Button>
                </Stack>
                <Rating value={4} readOnly size="small" />
                <Stack direction="row" spacing={2} mt={2}>
                  <Chip label="Prep Time - 10 mins" variant="outlined" />
                  <Chip label="Cook Time - 20 mins" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>

            {/* Comments */}
            {/* <Paper variant="outlined" sx={{ mt: 4, p: 2 }}>
              <Typography variant="h6">Comments</Typography>
              {[
                { name: "Kelvin", time: "1 hour ago" },
                { name: "Alice", time: "2 hours ago" },
                { name: "Sweet", time: "2 hours ago" },
                { name: "Rose", time: "2 hours ago" },
              ].map((comment, index) => (
                <Box key={index} mt={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ width: 32, height: 32 }}>{comment.name[0]}</Avatar>
                    <Box>
                      <Typography fontWeight="bold">{comment.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {comment.time}
                      </Typography>
                      <Typography mt={0.5}>Comment Text</Typography>
                      <Stack direction="row" spacing={1} mt={1}>
                        <Button size="small">1 reply</Button>
                        <Button size="small">Reply</Button>
                      </Stack>
                    </Box>
                  </Stack>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
              <Stack direction="row" spacing={2} alignItems="center" mt={2}>
                <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                <TextField variant="outlined" size="small" placeholder="Add a comment" fullWidth />
                <Button variant="contained" sx={{ bgcolor: "#F57C00" }}>
                  Send
                </Button>
              </Stack>
            </Paper> */}

            <Paper variant="outlined" sx={{ mt: 4, p: 2 }}>
              <Typography variant="h6">Comments</Typography>

              {/* Scrollable comment list */}
              <Box sx={{ maxHeight: 300, overflowY: "auto", pr: 1 }}>
                {[
                  { name: "Kelvin", time: "1 hour ago" },
                  { name: "Alice", time: "2 hours ago" },
                  { name: "Sweet", time: "2 hours ago" },
                  { name: "Rose", time: "2 hours ago" },
                  // Add more dummy comments here if needed
                ].map((comment, index) => (
                  <Box key={index} mt={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {comment.name[0]}
                      </Avatar>
                      <Box>
                        <Typography fontWeight="bold">
                          {comment.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {comment.time}
                        </Typography>
                        <Typography mt={0.5}>Comment Text</Typography>
                        <Stack direction="row" spacing={1} mt={1}>
                          <Button size="small">1 reply</Button>
                          <Button size="small">Reply</Button>
                        </Stack>
                      </Box>
                    </Stack>
                    <Divider sx={{ mt: 2 }} />
                  </Box>
                ))}
              </Box>

              {/* Add comment input */}
              <Stack direction="row" spacing={2} alignItems="center" mt={2}>
                <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Add a comment"
                  fullWidth
                />
                <Button variant="contained" sx={{ bgcolor: "#F57C00" }}>
                  Send
                </Button>
              </Stack>
            </Paper>
          </Box>

          {/* Right Side */}
          <Box flex={1}>
            <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Ingredients
              </Typography>
              <List>
                {[
                  "Prawns",
                  "Wheat flour",
                  "Corn flour",
                  "Rice flour",
                  "Egg",
                  "Salt",
                  "Prawns",
                  "Wheat flour",
                  "Corn flour",
                  "Rice flour",
                  "Egg",
                  "Salt",
                ].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemText primary={`• ${item}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Instruction
              </Typography>
              <Typography variant="body2" whiteSpace="pre-line">
                {`Heat oil in a heavy-bottomed pot, over low heat. Sprinkle the sugar and stir continuously until it is caramelized.

Add and sear the pork on all sides. Stir-in the chopped onions and garlic.

Season with soy sauce and add enough water to fully submerge the pork belly.

Turn the heat up to high and bring the liquid to a boil, then reduce it to medium-low for slow simmer.

Cover the pot and braise the pork for about 1 hour and 30 minutes. Stir 2-3 times in between and adjust the water as necessary to prevent the bottom from burning.

When the pork belly is tender and almost all the braising liquid has evaporated, add the pearl onions and cook for about 5 minutes. The sauce needs to be reduced to a thick glaze consistency.

Remove the pot from heat, sprinkle the chopped spring onions and serve with rice.`}
              </Typography>
            </Paper>
          </Box>
        </Stack>

        {/* Recommend Section */}
        <Box mt={6}>
          <Typography variant="h6" gutterBottom>
            Recommend
          </Typography>
          <Stack direction="row" spacing={2}>
            {[
              "Egg Curry",
              "Burmese Tea Leaves Salad",
              "Peanut Sauce",
              "Chicken Curry",
              "Peanut Sauce",
              "Chicken Curry",
            ].map((label, index) => (
              <Paper
                key={index}
                sx={{ width: 200, borderRadius: 2, overflow: "hidden" }}
              >
                <Box
                  component="img"
                  src={`/images/food${index + 1}.jpg`}
                  alt={label}
                  sx={{ width: "100%", height: 100, objectFit: "cover" }}
                />
                <Box p={1}>
                  <Typography variant="body2" fontWeight="bold">
                    {label}
                  </Typography>
                </Box>
              </Paper>
            ))}
            
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
