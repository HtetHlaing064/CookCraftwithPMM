"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Container,
  Stack,
  TextField,
  InputAdornment,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";

export default function RecipeListPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const openProfile = Boolean(anchorEl);
  const openNotification = Boolean(anchorE2);
  const handleClickProfile = (event) => setAnchorEl(event.currentTarget);
  const handleClickNotification = (event) => setAnchorE2(event.currentTarget);
  const handleCloseProfile = () => setAnchorEl(null);
  const handleCloseNotification = () => setAnchorE2(null);
  const [currentPage, setCurrentPage] = useState(2);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Selected Page:", page);
    // You can also fetch data for this page here
  };

  const categories = ["All", "Breakfast", "Lunch", "Dinner"];
  const recipes = [
    {
      id: 1,
      title: "Burmese Noodle Salad",
      author: "The cooking channel",
      rating: 4.6,
      image: "/images/food1.jpg",
    },
    {
      id: 2,
      title: "Fried Rice",
      author: "Schar's kitchen",
      rating: 4.6,
      image: "/images/food2.jpg",
    },
    {
      id: 3,
      title: "Steamed Sticky Rice",
      author: "Pasta da Italia",
      rating: 4.6,
      image: "/images/food3.jpg",
    },
    {
      id: 4,
      title: "Burmese Noodle Salad",
      author: "The cooking channel",
      rating: 4.6,
      image: "/images/food1.jpg",
    },
    {
      id: 5,
      title: "Fried Rice",
      author: "Schar's kitchen",
      rating: 4.6,
      image: "/images/food2.jpg",
    },
    {
      id: 6,
      title: "Steamed Sticky Rice",
      author: "Pasta da Italia",
      rating: 4.6,
      image: "/images/food3.jpg",
    },
  ];

  // Sample notification data to populate the dropdown
  const notifications = [
    {
      id: 1,
      type: "comment",
      user: "Anna",
      message: "commented on your Chicken Curry Recipe Post",
      time: "12:05pm",
      avatarSrc: "/images/avatar_anna.jpg",
      isNew: true,
    },
    {
      id: 2,
      type: "like",
      user: "Myat Noe",
      message: "liked your Chicken Curry Recipe Post",
      time: "10:00am",
      avatarSrc: "/images/avatar_myatnoe.jpg",
      isNew: true,
    },
    {
      id: 3,
      type: "comment",
      user: "Myat Noe",
      message: "commented your Chicken Curry Recipe Post",
      time: "9:50am",
      avatarSrc: "/images/avatar_myatnoe.jpg",
      isNew: true,
    },
    {
      id: 4,
      type: "warning",
      message:
        "Warning from Admin: Your [comment] violates our community guidelines.",
      time: "9:10am",
      isNew: false,
    },
  ];

  const NextArrow = ({ onClick }) => (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        position: "absolute",
        top: "85%",
        right: 70,
        transform: "translateY(-50%)",
        zIndex: 2,
        textTransform: "none",
        borderColor: "#ff7b00",
        color: "white",
        borderRadius: "50px",
        px: 3,
        "&:hover": { backgroundColor: "#e65100" },
      }}
    >
      <ArrowForwardIosIcon />
    </Button>
  );

  const PrevArrow = ({ onClick }) => (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        position: "absolute",
        top: "85%",
        right: 150,
        transform: "translateY(-50%)",
        zIndex: 2,
        textTransform: "none",
        borderColor: "#ff7b00",
        color: "white",
        borderRadius: "50px",
        px: 3,
        "&:hover": { backgroundColor: "#e65100" },
      }}
    >
      <ArrowBackIosNewIcon />
    </Button>
  );

  // Carousel Component
  const trendingItems = [
    {
      title: "Kevin's Famous Spicy Salsa with Mangos",
      author: "By Kevin Josh",
      image: "/images/food1.jpg",
    },
    {
      title: "Classic Italian Seafood Pasta",
      author: "By Maria Rossi",
      image: "/images/food2.jpg",
    },
    {
      title: "Grilled Summer Vegetable Skewers",
      author: "By David Chen",
      image: "/images/food3.jpg",
    },
  ];

  const TrendingSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <Box sx={{ p: { xs: 2, md: 4 }, position: "relative" }}>
        <Slider {...settings}>
          {trendingItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: "200px", md: "250px" },
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: { xs: "100%", md: "50%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 2, md: 6 },
                  zIndex: 2,
                }}
              >
                <Typography variant="button" sx={{ color: "white" }}>
                  Trending now
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "white", my: 2 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "white" }}>
                  {item.author}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#F57C00" }}
            >
              CookCraft
            </Typography>
            <Typography>Home</Typography>
            <Typography sx={{ color: "#F57C00" }}>Recipes</Typography>
            <Typography>About</Typography>
            <Typography>Contact us</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="contained" sx={{ bgcolor: "#F57C00" }}>
              Create Post
            </Button>
            {/* <NotificationsIcon /> */}
            <Avatar
              sx={{ bgcolor: "#F57C00", cursor: "pointer" }}
              onClick={handleClickNotification}
            >
              <NotificationsIcon />
            </Avatar>
            <Menu
              sx={{ p: 2, minWidth: 300 }}
              anchorEl={anchorE2} // Anchors the menu to the clicked element
              open={openNotification} // Controls visibility based on the 'open' state
              onClose={handleCloseNotification} // Closes the menu on outside click/item selection
              // ... (styling props)
            >
              <Box>
                {notifications.map((notification, index) => [
                  <MenuItem
                    key={`item-${notification.id}`}
                    onClick={handleClickNotification}
                    sx={{
                      alignItems: "flex-start",
                      px: 2,
                      py: 1.5,
                      gap: 1.5,
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        width: "100%",
                      }}
                    >
                      {/* Conditional rendering for avatar or warning icon */}
                      {notification.type !== "warning" ? (
                        <Avatar
                          src={
                            notification.avatarSrc ||
                            "https://via.placeholder.com/40"
                          }
                          sx={{ width: 36, height: 36, mr: 1.5 }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 36,
                            height: 36,
                            mr: 1.5,
                            bgcolor: "#fff3e0",
                            borderRadius: "50%",
                          }}
                        >
                          <NotificationsIcon color="warning" />
                        </Box>
                      )}

                      {/* Notification text content */}
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body2">
                          {notification.type === "comment" ||
                          notification.type === "like" ? (
                            <>
                              <Typography
                                component="span"
                                sx={{ fontWeight: "bold" }}
                              >
                                {notification.user}
                              </Typography>{" "}
                              {notification.message}
                            </>
                          ) : (
                            <Typography
                              component="span"
                              sx={{ color: "text.secondary" }}
                            >
                              {notification.message}
                            </Typography>
                          )}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {notification.time}
                        </Typography>
                      </Box>

                      {/* 'New' dot indicator */}
                      {notification.isNew && (
                        <Badge
                          color="error"
                          variant="dot"
                          sx={{
                            ml: 1,
                            "& .MuiBadge-badge": {
                              height: 8,
                              minWidth: 8,
                              borderRadius: "50%",
                            },
                          }}
                        />
                      )}
                    </Box>
                  </MenuItem>,

                  // Divider between items (not after last item)
                  index !== notifications.length - 1 && (
                    <Divider key={`divider-${notification.id}`} />
                  ),
                ])}
              </Box>
            </Menu>
            {/* Profile */}
            <Avatar
              sx={{ bgcolor: "#F57C00", cursor: "pointer" }}
              onClick={handleClickProfile}
            >
              K
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              open={openProfile}
              onClose={handleCloseProfile}
            >
              <Box sx={{ p: 2, minWidth: 220 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "#F57C00" }}>K</Avatar>
                  <Box>
                    <Typography fontWeight="bold">Kaung Htet Lin</Typography>
                    <Typography variant="body2" color="text.secondary">
                      kaung@gmail.com
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <MenuItem onClick={handleCloseProfile}>
                <EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit Profile
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <HistoryIcon fontSize="small" sx={{ mr: 1 }} /> History
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <LogoutIcon fontSize="small" sx={{ mr: 1 }} /> Sign Out
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Banner */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <TrendingSlider />

        {/* Search + Categories */}
        <Box mt={5}>
          <Typography variant="h6" textAlign="center">
            What to Cook?
          </Typography>
          <Stack direction="row" justifyContent="center" mt={2}>
            <TextField
              placeholder="Search"
              fullWidth
              sx={{ maxWidth: 600, borderRadius: 30, borderColor: "#d9d9d9" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Box>

        <Stack direction="row" spacing={4} mt={4}>
          {/* Category Filters */}
          <Stack spacing={2}>
            <Typography variant="h6">Categories</Typography>
            {categories.map((cat, idx) => (
              <Button
                key={idx}
                variant={cat === "All" ? "contained" : "outlined"}
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                {cat}
              </Button>
            ))}
          </Stack>

          {/* Recipe Cards */}
          <Box flex={1}>
            <Grid container spacing={2}>
              {recipes.map(
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
            <Stack direction="row" justifyContent="center" spacing={1} mt={4}>
              <Chip
                label="Previous"
                variant="outlined"
                size="small"
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
              />

              {[1, 2, 3].map((n) => (
                <Chip
                  key={n}
                  label={n}
                  variant={n === currentPage ? "filled" : "outlined"}
                  color={n === currentPage ? "default" : "primary"}
                  size="small"
                  onClick={() => handlePageChange(n)}
                />
              ))}

              <Typography variant="body2" sx={{ px: 1 }}>
                ... 10
              </Typography>

              <Chip
                label="Next"
                color="warning"
                size="small"
                onClick={() =>
                  currentPage < 10 && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === 10}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
