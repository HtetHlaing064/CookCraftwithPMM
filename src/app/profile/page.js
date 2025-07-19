



"use client";
import React, { useState } from "react";
import Head from "next/head";
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
  Stack,
  Card,
  CardMedia,
  CardContent,
  ListItemIcon,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Badge,
  Tabs,
  Tab,
  Pagination,
} from "@mui/material";

import { useRouter } from "next/navigation";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import StarIcon from "@mui/icons-material/Star";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function ProfilePage() {
  const router = useRouter();

  // --- Image state for cover and profile ---
  const [coverImage, setCoverImage] = useState("/cover-photo.jpg");
  const [profileImage, setProfileImage] = useState("/user-profile.jpg");

  // --- Notification Menu States ---
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const openNotification = Boolean(anchorE2);

  const handleClickNotification = (event) => setAnchorE2(event.currentTarget);
  const handleCloseNotification = () => setAnchorE2(null);

  // --- Pagination & Tabs ---
  const [currentPage, setCurrentPage] = useState(1);
  const [tabValue, setTabValue] = useState("home");
  const [filter, setFilter] = useState("latest"); // 'latest' or 'oldest'

  const itemsPerPage = 8;
  const allRecipes = [
    { id: 1, title: "Chicken Soup", author: "The Cooking Channel", rating: 4.6, image: "/images/food2.jpg" },
    { id: 2, title: "Pork Curry", author: "Sichars kitchen", rating: 4.8, image: "/images/food2.jpg" },
    { id: 3, title: "Fried Water Spinach Leaves", author: "The Cooking Channel", rating: 4.6, image: "/images/food2.jpg" },
    { id: 4, title: "Rakhine Mote Ti", author: "The Cooking Channel", rating: 4.8, image: "/images/food2.jpg" },
    { id: 5, title: "Mote Lat Saung", author: "Sichars kitchen", rating: 4.8, image: "/images/food2.jpg" },
    { id: 6, title: "Mote Hin Gar", author: "Pasta da Italia", rating: 4.6, image: "/images/food2.jpg" },
    { id: 7, title: "Crispy Pork Belly", author: "The Cooking Channel", rating: 4.8, image: "/images/food2.jpg" },
    { id: 8, title: "Crispy Pork Belly", author: "Sichars kitchen", rating: 4.8, image: "/images/food2.jpg" },
    { id: 9, title: "Chin Paung Kyaw", author: "Aliya", rating: 4.8, image: "/images/food2.jpg" },
    { id: 10, title: "Fried Taiwanese Pickled Mustard Greens", author: "The Cooking Channel", rating: 4.6, image: "/images/food2.jpg" },
    { id: 11, title: "Crab Curry", author: "Sichars kitchen", rating: 4.8, image: "/images/food2.jpg" },
    { id: 12, title: "Fried Egg", author: "Anne", rating: 4.8, image: "/images/food2.jpg" },
    { id: 13, title: "Spicy Noodles", author: "Chef John", rating: 4.5, image: "/images/food2.jpg" },
    { id: 14, title: "Vegetable Stir-fry", author: "Healthy Eats", rating: 4.7, image: "/images/food2.jpg" },
    { id: 15, title: "Chocolate Cake", author: "Sweet Delights", rating: 4.9, image: "/images/food2.jpg" },
    { id: 16, title: "Lemon Chicken", author: "Quick Meals", rating: 4.2, image: "/images/food2.jpg" },
  ];

  const pageCount = Math.ceil(allRecipes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedRecipes = allRecipes.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setCurrentPage(1);
  };

  // --- More Options Menu ---
  const [anchorElMore, setAnchorElMore] = useState(null);
  const openMore = Boolean(anchorElMore);
  const handleClickMore = (event) => setAnchorElMore(event.currentTarget);
  const handleCloseMore = () => setAnchorElMore(null);

  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const handleOpenLogoutDialog = () => setOpenLogoutDialog(true);
  const handleCloseLogoutDialog = () => setOpenLogoutDialog(false);
  const handleConfirmLogout = () => {
    setOpenLogoutDialog(false);
    console.log("User confirmed log out");
    router.push("/");
  };

  // --- Sample Notifications ---
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
      message: "Warning from Admin: Your [comment] violates our community guidelines.",
      time: "9:10am",
      isNew: false,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>CookCraft Profile</title>
        <meta name="description" content="CookCraft User Profile Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* AppBar Navigation */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 4px 12px rgba(255, 111, 0, 0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "#ff6f00", fontWeight: "bold" }}>
            COOKCRAFT
          </Typography>
          <Box>
            <Link href="/home" passHref>
              <Button
                sx={{
                  color: "black",
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": { color: "#ff6f00", transform: "translateY(-3px)" },
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/recipes" passHref>
              <Button
                sx={{
                  color: "black",
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": { color: "#ff6f00", transform: "translateY(-3px)" },
                }}
              >Recipes
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                sx={{
                  color: "black",
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": { color: "#ff6f00", transform: "translateY(-3px)" },
                }}
              >
                About
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Link href="/recipes/create" passHref>
              <Button
                variant="outlined"
                startIcon={
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "#ff7f00",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      fontSize: "16px",
                    }}
                  >
                    <AddIcon fontSize="inherit" />
                  </Box>
                }
                sx={{
                  textTransform: "none",
                  backgroundColor: "#ff7f00",
                  color: "white",
                  borderRadius: "20px",
                  py: "6px",
                  px: "16px",
                  fontSize: "16px",
                  fontWeight: 500,
                  transition: "transform 0.3s",
                  "&:hover": { backgroundColor: "#e86f00", transform: "translateY(-3px)" },
                }}
              >
                Create Post
              </Button>
            </Link>
            <Avatar
              sx={{
                bgcolor: "#F57C00",
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": { backgroundColor: "#e86f00", transform: "translateY(-3px)" },
              }}
              onClick={handleClickNotification}
            >
              <NotificationsIcon />
            </Avatar>
            <Menu
              sx={{ p: 2, minWidth: 300 }}
              anchorEl={anchorE2}
              open={openNotification}
              onClose={handleCloseNotification}
            >
              <Box>
                {notifications.map((notification, index) => (
                  <React.Fragment key={`notification-${notification.id}`}>
                    <MenuItem
                      onClick={handleClickNotification}
                      sx={{ "&:hover": { backgroundColor: "#ff9f00" } }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
                        {notification.type !== "warning" ? (
                          <Avatar
                            src={notification.avatarSrc || "https://via.placeholder.com/40"}
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
                        <Box sx={{ flexGrow: 1 }}>
                          {notification.type === "comment" || notification.type === "like" ? (
                            <Typography variant="body2">
                              <Typography component="span" sx={{ fontWeight: "bold" }}>
                                {notification.user}
                              </Typography>{" "}
                              {notification.message}
                            </Typography>
                          ) : (
                            <Typography component="span" sx={{ color: "text.secondary" }}>
                              {notification.message}
                            </Typography>
                          )}
                          <Typography variant="caption" color="text.secondary">
                            {notification.time}
                          </Typography>
                        </Box>
                        {notification.isNew && (
                          <Badge
                            color="error"
                            variant="dot"
                            sx={{
                              ml: 1,
                              "& .MuiBadge-badge": { height: 8, minWidth: 8, borderRadius: "50%" },
                            }}
                          />
                        )}
                      </Box>
                    </MenuItem>
                    {index !== notifications.length - 1 && (
                      <Divider key={`divider-${notification.id}`} />
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Menu>
            <Link href="/profile" passHref style={{ textDecoration: "none" }}>
              <Avatar
                src={profileImage}
                sx={{
                  bgcolor: "#ff7f00",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": { backgroundColor: "#e86f00", transform: "translateY(-3px)" },
                }}
              >
                K
              </Avatar>
            </Link>
            <IconButton color="inherit" onClick={handleClickMore}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElMore}
              open={openMore}
              onClose={handleCloseMore}
              PaperProps={{
                elevation: 4,
                sx: { borderRadius: 2, mt: 1, minWidth: 180, bgcolor: "white" },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseMore();
                  
                  console.log("Edit Profile clicked");
                  router.push("/profile/edit-profile");
                }}
                sx={{ "&:hover": { backgroundColor: "#ff9f00" } }}
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseMore();
                  console.log("History clicked");
                  router.push("/history");
                }}
                sx={{ "&:hover": { backgroundColor: "#ff9f00" } }}
              >
                <ListItemIcon>
                  <HistoryIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="History" />
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleCloseMore();
                  handleOpenLogoutDialog();
                  console.log("Sign Out clicked");
                }}
                sx={{ "&:hover": { backgroundColor: "#ff9f00" } }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </MenuItem>
            </Menu>
            <Dialog
              open={openLogoutDialog}
              onClose={handleCloseLogoutDialog}
              aria-labelledby="logout-dialog-title"
              aria-describedby="logout-dialog-description"
            >
              <DialogTitle id="logout-dialog-title" sx={{ textAlign: "center" }}>
                <WarningAmberIcon sx={{ color: "#ff7f00", fontSize: 50 }} />
              </DialogTitle>
              <DialogContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Are you sure?
                </Typography>
                <Typography variant="body2">You want to log out?</Typography>
              </DialogContent>
              <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" color="error" onClick={handleCloseLogoutDialog}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleConfirmLogout} autoFocus>
                  Log Out
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      {/* <Box component="main" sx={{ p: { xs: 2, sm: 3 }, maxWidth: "1200px", mx: "auto" }}> */}
      <Box component="main" sx={{ p: { xs: 2, sm: 3 }, maxWidth: "1067px", width: "100%", mx: "auto" }}>

        {/* Profile Header */}
        <Box sx={{ position: "relative", mb: 4 }}>
          <Box
            sx={{
              height: 200,
              backgroundColor: "#eee",
              borderRadius: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              backgroundImage: `url(${coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              p: 2,
              boxShadow: 1,
            }}
          >
            <input
              accept="image/*"
              type="file"
              id="cover-upload"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setCoverImage(imageUrl);
                  console.log("Cover photo updated:", imageUrl);
                }
              }}
            />
            <label htmlFor="cover-upload">
              <Button
                component="span"
                variant="contained"
                startIcon={<CameraAltIcon />}
                sx={{
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                }}
              >
                Change cover photo
              </Button>
            </label>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Avatar
              alt="User Profile"
              src={profileImage}
              sx={{
                width: 120,
                height: 120,
                position: "absolute",
                top: "-50px",
                left: { xs: 16, sm: 30 },
                border: "4px solid white",
                boxShadow: 3,
              }}
            />
            <input
              accept="image/*"
              type="file"
              id="profile-upload"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setProfileImage(imageUrl);
                  console.log("Profile photo updated:", imageUrl);
                }
              }}
            />
            <label htmlFor="profile-upload">
              <IconButton
                component="span"
                sx={{
                  position: "absolute",
                  top: "40px",
                  left: { xs: 90, sm: 110 },
                  bgcolor: "white",
                  border: "2px solid #ff7f00",
                  zIndex: 10,
                  "&:hover": { bgcolor: "#ff7f00" },
                }}
              >
                <CameraAltIcon fontSize="small" />
              </IconButton>
            </label>
          </Box>
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
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile navigation tabs">
            <Tab label="Home" value="home" sx={{ textTransform: "none", fontWeight: "bold" }} />
            <Tab label="Recipes" value="recipes" sx={{ textTransform: "none", fontWeight: "bold" }} />
            <Tab label="Favorite Recipes" value="favorite" sx={{ textTransform: "none", fontWeight: "bold" }} />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {tabValue === "home" && (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mb: 2 }}>
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
            </Box>
            <Grid container spacing={2} justifyContent="center">
              {displayedRecipes.map((recipe) => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                  {/* <Card sx={{ maxWidth: 345, m: "auto", borderRadius: 2, boxShadow: 3 }}> */}
                  <Card
                    sx={{
                      maxWidth: 345,
                      m: "auto",
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      borderRadius: '16px',
                      border: '3px solid transparent',
                      transition: 'all 0.5s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: '#ff6f00',
                        boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)',
                      },
                    }}
                    // onClick={() => router.push(`/recipes/${recipe.id}`)} // Add click handler
                    onClick={() => router.push(`/recipes/detail`)}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={recipe.image}
                      alt={recipe.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {recipe.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        By {recipe.author}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                          {recipe.rating}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Stack spacing={2} sx={{ mt: 4, alignItems: "center" }}>
              <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                siblingCount={0}
                boundaryCount={1}
                showFirstButton
                showLastButton
              />
            </Stack>
          </Box>
        )}

        {tabValue === "recipes" && (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              All Recipes
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {displayedRecipes.map((recipe) => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345, m: "auto", borderRadius: 2, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={recipe.image}
                      alt={recipe.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {recipe.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        By {recipe.author}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                          {recipe.rating}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tabValue === "favorite" && (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Favorite Recipes
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {displayedRecipes.map((recipe) => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345, m: "auto", borderRadius: 2, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={recipe.image}
                      alt={recipe.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {recipe.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        By {recipe.author}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                          {recipe.rating}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}