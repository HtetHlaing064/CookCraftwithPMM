"use client";
import React from "react";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Corrected import
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function ProfilePage() {
  const [tabValue, setTabValue] = React.useState("home");
  const [filter, setFilter] = React.useState("latest"); // 'latest' or 'oldest'

  // --- Pagination State and Logic ---
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8; // Number of recipes to show per page

  // Dummy data for recipes (you'd fetch this from an API in a real app)
  const allRecipes = [
    // Renamed to allRecipes to distinguish from displayedRecipes
    {
      id: 1,
      title: "Chicken Soup",
      author: "The Cooking Channel",
      rating: 4.6,
      image: "/images/food2.jpg",
    },
    {
      id: 2,
      title: "Pork Curry",
      author: "Sichars kitchen",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 3,
      title: "Fried Water Spinach Leaves",
      author: "The Cooking Channel",
      rating: 4.6,
      image: "/images/food2.jpg",
    },
    {
      id: 4,
      title: "Rakhine Mote Ti",
      author: "The Cooking Channel",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 5,
      title: "Mote Lat Saung",
      author: "Sichars kitchen",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 6,
      title: "Mote Hin Gar",
      author: "Pasta da Italia",
      rating: 4.6,
      image: "/images/food2.jpg",
    },
    {
      id: 7,
      title: "Crispy Pork Belly",
      author: "The Cooking Channel",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 8,
      title: "Crispy Pork Belly",
      author: "Sichars kitchen",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 9,
      title: "Chin Paung Kyaw",
      author: "Aliya",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 10,
      title: "Fried Taiwanese Pickled Mustard Greens",
      author: "The Cooking Channel",
      rating: 4.6,
      image: "/images/food2.jpgv",
    },
    {
      id: 11,
      title: "Crab Curry",
      author: "Sichars kitchen",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 12,
      title: "Fried Egg",
      author: "Anne",
      rating: 4.8,
      image: "/images/food2.jpg",
    },
    {
      id: 13,
      title: "Spicy Noodles",
      author: "Chef John",
      rating: 4.5,
      image: "/images/food2.jpg",
    },
    {
      id: 14,
      title: "Vegetable Stir-fry",
      author: "Healthy Eats",
      rating: 4.7,
      image: "/images/food2.jpg",
    },
    {
      id: 15,
      title: "Chocolate Cake",
      author: "Sweet Delights",
      rating: 4.9,
      image: "/images/food2.jpg",
    },
    {
      id: 16,
      title: "Lemon Chicken",
      author: "Quick Meals",
      rating: 4.2,
      image: "/images/food2.jpg",
    },
    // Add more recipe data to see pagination clearly
  ];

  // Calculate total number of pages
  const pageCount = Math.ceil(allRecipes.length / itemsPerPage);

  // Get recipes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedRecipes = allRecipes.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Optionally scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // --- End Pagination State and Logic ---

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>CookCraft Profile</title>
        <meta name="description" content="CookCraft User Profile Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Layout (AppBar) */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "sans-serif" }}
          >
            CookCraft
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/recipes" passHref>
            <Button color="inherit">Recipes</Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit">About</Button>
          </Link>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User" src="/user-profile.jpg" sx={{ ml: 1 }} />
          <Button
            variant="outlined"
            sx={{
              ml: 1,
              borderColor: "orange",
              color: "orange",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              "&:hover": { borderColor: "darkorange" },
            }}
          >
            K
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{ p: { xs: 2, sm: 3 }, maxWidth: "1200px", mx: "auto" }}
      >
        {/* Profile Header Section */}
        <Box sx={{ position: "relative", mb: 4 }}>
          <Box
            sx={{
              height: 200,
              backgroundColor: "#eee", // Fallback if image not loaded
              borderRadius: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              backgroundImage: "url(/cover-photo.jpg)", // Example cover photo path in public folder
              backgroundSize: "cover",
              backgroundPosition: "center",
              p: 2,
              boxShadow: 1,
            }}
          >
            <Button
              variant="contained"
              startIcon={<CameraAltIcon />}
              sx={{
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              Add a cover photo
            </Button>
          </Box>
          <Avatar
            alt="Carpertman"
            src="/user-profile.jpg" // Example user profile image path in public folder
            sx={{
              width: 120,
              height: 120,
              position: "absolute",
              top: "50%", // Aligns the top of the avatar to the middle of the cover photo
              left: { xs: 16, sm: 30 }, // Responsive left padding
              border: "4px solid white",
              boxShadow: 3,
            }}
          />
          <Box sx={{ ml: { xs: "150px", sm: "180px" }, mt: { xs: 3, sm: 2 } }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
              Carpertman
            </Typography>
            <Typography variant="body2" color="text.secondary">
              -107 Recipes
            </Typography>
          </Box>
        </Box>

        {/* Profile Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="profile navigation tabs"
          >
            <Tab
              label="Home"
              value="home"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            />
            <Tab
              label="Recipes"
              value="recipes"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            />
            <Tab
              label="Favorite Recipes"
              value="favorite"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            />
          </Tabs>
        </Box>

        {/* Content based on selected tab */}
        {tabValue === "home" && (
          <Box>
            {/* Latest/Oldest Filter */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="body2" component="div">
                <Button
                  variant={filter === "latest" ? "contained" : "text"}
                  onClick={() => setFilter("latest")}
                  size="small"
                  sx={{ textTransform: "none", mr: 1 }}
                >
                  Latest
                </Button>
                <Button
                  variant={filter === "oldest" ? "contained" : "text"}
                  onClick={() => setFilter("oldest")}
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  Oldest
                </Button>
              </Typography>
            </Box>

            {/* Recipe Grid */}
            <Grid container spacing={2}>
              {displayedRecipes.map(
                (
                  recipe // Use displayedRecipes here
                ) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        m: "auto",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180" // Increased height slightly for better image display
                        image={recipe.image}
                        alt={recipe.title}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          {recipe.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          By {recipe.author}
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 0.5 }}
                          >
                            {recipe.rating}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>

            {/* Pagination */}
            <Stack spacing={2} sx={{ mt: 4, alignItems: "center" }}>
              <Pagination
                count={pageCount} // Total number of pages
                page={currentPage} // Current active page
                onChange={handlePageChange} // Handler for page changes
                siblingCount={0}
                boundaryCount={1}
                showFirstButton
                showLastButton
              />
            </Stack>
          </Box>
        )}

        {/* You'd add similar content for 'recipes' and 'favorite' tabs if needed */}
        {tabValue === "recipes" && (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              All Recipes
            </Typography>
            {/* You could render a filtered version of the recipe grid here */}
           <Grid container spacing={2}>
              {displayedRecipes.map(
                (
                  recipe // Use displayedRecipes here
                ) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        m: "auto",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180" // Increased height slightly for better image display
                        image={recipe.image}
                        alt={recipe.title}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          {recipe.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          By {recipe.author}
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 0.5 }}
                          >
                            {recipe.rating}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>

          </Box>
        )}
        {tabValue === "favorite" && (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Favorite Recipes
            </Typography>
            {/* You could render a filtered version of the recipe grid here */}

             <Grid container spacing={2}>
              {displayedRecipes.map(
                (
                  recipe // Use displayedRecipes here
                ) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        m: "auto",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180" // Increased height slightly for better image display
                        image={recipe.image}
                        alt={recipe.title}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          {recipe.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          By {recipe.author}
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 0.5 }}
                          >
                            {recipe.rating}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}
