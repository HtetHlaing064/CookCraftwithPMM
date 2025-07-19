

"use client";

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
  Chip,
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
  Pagination,
  CircularProgress,
} from "@mui/material";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Next.js ရဲ့ Link component
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
import { useState,useEffect } from "react";
import Badge from "@mui/material/Badge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSession } from "next-auth/react";

export default function Recipe() {

  const { data: session, status } = useSession();


  // Database recipe states
   const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getFilteredRecipes = () => {
    if (selectedCategory === "All") return recipes;
    return recipes.filter(recipe => {
      const category = recipe.category?.toLowerCase();
      return category === selectedCategory.toLowerCase();
    });
  };

    // Fetch recipes when component mounts or session changes
    useEffect(() => {
      fetchRecipes();
    }, [session]);

    // Fetch recipes from database
  const fetchRecipes = async () => {
    if (!session?.user?.id) {
      setRecipes(staticRecipes);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/recipes');

      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const data = await response.json();
      console.log('Fetched recipes:', data);

      // Transform database data to match UI expectations
      const transformedRecipes = data.map(recipe => ({
        ...recipe,
        title: recipe.name, // Map name to title for UI compatibility
        author: recipe.user?.username || 'Unknown Chef',
        image: recipe.image_url,
        rating: 4.6 // Default rating since we don't have ratings in DB yet
      }));

      setRecipes(transformedRecipes);
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError(err.message);
      setRecipes(staticRecipes); // Fallback to static data
    } finally {
      setLoading(false);
    }
  };

  const recommendedRecipes = [

    {
      title: "Rakhine Mote Ti",
      author: "The cooking channel",
      image: "/images/food1.jpg",
    },
    {
      title: "Fried Chicken",
      author: "Anna",
      image: "/images/food2.jpg",
    },
    {
      title: "Chin Paung Kyaw",
      author: "Alice",
      image: "/images/food3.jpg",
    },
    {
      title: "Fried Noodle",
      author: "The cooking channel",
      image: "/images/food4.jpg",
    },
    {
      title: "Chicken Soup",
      author: "Sweet",
      image: "/images/food5.jpg",
    },
    {
      title: "Egg Curry",
      author: "The cooking channel",
      image: "/images/food6.jpg",
    },
    {
      title: "Grilled Fish",
      author: "Alice",
      image: "/images/food1.jpg",
    },
    {
      title: "Fish paste and rice Salad",
      author: "Schar’s kitchen",
      image: "/images/food2.jpg",
    },
    {
      title: "Crab Curry",
      author: "Sweet",
      image: "/images/3.jpg",
    },
  ];

  const router = useRouter();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const openProfile = Boolean(anchorEl);
  const openNotification = Boolean(anchorE2);
  const handleClickProfile = (event) => setAnchorEl(event.currentTarget);
  const handleClickNotification = (event) => setAnchorE2(event.currentTarget);
  const handleCloseProfile = () => setAnchorEl(null);
  const handleCloseNotification = () => setAnchorE2(null);
  const [currentPage, setCurrentPage] = useState(1);

  // navbar more
  const [anchorElMore, setAnchorElMore] = React.useState(null);
  const openMore = Boolean(anchorElMore);

  const handleClickMore = (event) => {
    setAnchorElMore(event.currentTarget);
  };

  const handleCloseMore = () => {
    setAnchorElMore(null);
  };

  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);

  const handleOpenLogoutDialog = () => setOpenLogoutDialog(true);
  const handleCloseLogoutDialog = () => setOpenLogoutDialog(false);

  const handleConfirmLogout = () => {
    setOpenLogoutDialog(false);
    console.log("User confirmed log out");
    router.push("/");
    // သင့် Log Out Logic ထည့်ပါ (ဥပမာ: router.push("/login"))
  };

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

  return (
    <Box>
      {/* Navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 4px 12px rgba(255, 111, 0, 0.2)",
        }}
      >
        {/* Toolbar space-around  */}
        <Toolbar sx={{ justifyContent: "space-around", alignItems: "center" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ color: "#ff6f00", fontWeight: "bold" }}
          >
            COOKCRAFT
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Link href="/home" passHref>
              <Button
                sx={{
                  color: "black",
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": {
                    color: "#ff6f00",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/recipes" passHref>
              <Button
                sx={{
                  color: "#ff6f00", mx: 1,
                }}
              >
                Recipes
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                sx={{
                  color: "black",
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": {
                    color: "#ff6f00",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                About
              </Button>
              {/* textTransform: 'none' ဆိုစာလုံး အသေးရေးလို့ရ */}
            </Link>

            <Link href="/contact" passHref>
              <Button
                sx={{
                  color: "black",
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": {
                    color: "#ff6f00",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Contact Us
              </Button>
              {/* textTransform: 'none' ဆိုစာလုံး အသေးရေးလို့ရ */}
            </Link>
          </Box>

          {/*  Action Icons */}
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
                  paddingY: "6px",
                  paddingX: "16px",
                  fontSize: "16px",
                  fontWeight: 500,
                  transition: "transform 0.3s",
                  "&:hover": {
                    backgroundColor: "#e86f00",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Create Post
              </Button>
            </Link>

            {/* <Link href="/notifications" passHref>
                <IconButton sx={{ color:'black' }}>
                    <NotificationsIcon />
                </IconButton>
            </Link> */}

            {/* notifaction */}
            <Avatar
              sx={{
                bgcolor: "#F57C00",
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  backgroundColor: "#e86f00",
                  transform: "translateY(-3px)",
                },
              }}
              onClick={handleClickNotification}
            >
              <NotificationsIcon />
            </Avatar>
            <Menu
              sx={{
                p: 2,
                minWidth: 300,
              }}
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
                      "&:hover": {
                        backgroundColor: "#ff9f00",
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

            <Link href="/profile" passHref style={{ textDecoration: "none" }}>
              <Avatar
                sx={{
                  bgcolor: "#ff7f00",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    backgroundColor: "#e86f00",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                K
              </Avatar>
            </Link>

            {/* navbarmore */}
            <IconButton color="inherit" onClick={handleClickMore}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElMore}
              open={openMore}
              onClose={handleCloseMore}
              PaperProps={{
                elevation: 4,
                sx: {
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 180,
                  bgcolor: "white",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseMore();
                  handleOpenLogoutDialog();
                  console.log("Edit Profile clicked");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff9f00",
                  },
                }}
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
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff9f00",
                  },
                }}
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
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff9f00",
                  },
                }}
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
              <DialogTitle
                id="logout-dialog-title"
                sx={{ textAlign: "center" }}
              >
                <WarningAmberIcon sx={{ color: "#ff7f00", fontSize: 50 }} />
              </DialogTitle>

              <DialogContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Are you sure?
                </Typography>
                <Typography variant="body2">You want to log out?</Typography>
              </DialogContent>

              <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseLogoutDialog}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConfirmLogout}
                  autoFocus
                >
                  Log Out
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ pt: 4, pl: 5, maxWidth: "1200px", mx: "auto" }}>
        {/* Header Banner */}
        <Box
          sx={{
            width: "100%",
            height: 200,

            backgroundImage: 'url("/images/thai-chicken.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 4,
            mb: 4,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Typography variant="body2" ml={90}>
            Trending now
          </Typography>
          <Typography variant="h5" fontWeight="bold" ml={90}>
            Kevin’s Famous Spicy
          </Typography>
          <Typography variant="h5" fontWeight="bold" ml={90}>
            Salsa with Mangos
          </Typography>
          <Typography variant="subtitle2" ml={90}>
            By Kevin Josh
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <TextField
            placeholder="Search"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: 600,

              borderRadius: 5,
              input: { padding: 1.5 },
            }}
          />
        </Box>

        {/* All Recipes */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          All Recipes
        </Typography>

        <Box flex={1}>
            {/* Loading State */}
            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress sx={{ color: '#ff6f00' }} />
                <Typography sx={{ ml: 2 }}>Loading delicious recipes...</Typography>
              </Box>
            )}

            {/* Error State */}
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}. Showing sample recipes instead.
              </Alert>
            )}

            {/* Session Status Info */}
            {!loading && (
              <Box sx={{ mb: 2, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  {session?.user?.id
                    ? `Welcome back, ${session.user.name || session.user.username}! Showing recipes from our community.`
                    : 'Showing sample recipes. Log in to see more recipes from our community!'
                  }
                </Typography>
              </Box>
            )}

            {/* Flex container - Grid မသုံးဘဲ Flexbox နဲ့ layout ဖော်မယ် */}
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              mb: 4
            }}>
              {getFilteredRecipes()
                .slice((currentPage - 1) * 12, currentPage * 12)
                .map((recipe) => (
                  <Box key={recipe.id} sx={{
                    flex: '0 0 calc(33.333% - 16px)', // 3 items per row
                    maxWidth: 'calc(33.333% - 16px)',
                    minWidth: '280px', // Minimum width for mobile
                    '@media (max-width: 900px)': {
                      flex: '0 0 calc(50% - 16px)', // 2 items per row on tablet
                      maxWidth: 'calc(50% - 16px)'
                    },
                    '@media (max-width: 600px)': {
                      flex: '0 0 100%', // 1 item per row on mobile
                      maxWidth: '100%'
                    }
                  }}>
                    {/* <Link href={`/recipes/detail/${recipe.id}`} passHref style={{ textDecoration: 'none' }}> */}
                    <Link href="/recipes/detail" passHref style={{ textDecoration: 'none' }}>

                      <Card sx={{

                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        borderRadius: '16px',
                        border: '3px solid transparent',
                        transition: 'transform 0.5s',
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          borderColor: '#ff6f00',
                          boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)',
                        },
                        cursor: 'pointer' // Add cursor pointer to indicate it's clickable
                      }}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={recipe.image_url || recipe.image || "/images/food1.jpg"}
                          alt={recipe.name || recipe.title}
                          sx={{ objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
                            {recipe.name || recipe.title}
                          </Typography>
                          {/* Author and rating in one line */}
                          <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 1
                          }}>
                            <Typography variant="body2" color="text.secondary">
                              By {recipe.user?.username || recipe.author || 'Unknown Chef'}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                              <Typography variant="body2" sx={{ ml: 0.5 }}>
                                {recipe.rating || 4.6}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Category Chip */}
                          <Box sx={{ mt: 1 }}>
                            <Chip
                              label={recipe.category}
                              size="small"
                              sx={{
                                backgroundColor: '#fff3e0',
                                color: '#ff6f00',
                                textTransform: 'capitalize'
                              }}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Link>
                  </Box>
                ))}
            </Box>

            {/* Pagination  */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={Math.ceil(getFilteredRecipes().length / 12)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
                sx={{
                  '& .MuiPaginationItem-root': {
                    borderRadius: 2,
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#ff6f00',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#e65100'
                    }
                  }
                }}
              />
            </Box>

          </Box>
        {/* Recommended Recipes */}
        <Typography variant="h6" fontWeight="bold" mt={7} mb={2} >
          RecommendedRecipes
        </Typography>

          <Box flex={1}>
            {/* Loading State */}
            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress sx={{ color: '#ff6f00' }} />
                <Typography sx={{ ml: 2 }}>Loading delicious recipes...</Typography>
              </Box>
            )}

            {/* Error State */}
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}. Showing sample recipes instead.
              </Alert>
            )}

            {/* Session Status Info */}
            {!loading && (
              <Box sx={{ mb: 2, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  {session?.user?.id
                    ? `Welcome back, ${session.user.name || session.user.username}! Showing recipes from our community.`
                    : 'Showing sample recipes. Log in to see more recipes from our community!'
                  }
                </Typography>
              </Box>
            )}

            {/* Flex container - Grid မသုံးဘဲ Flexbox နဲ့ layout ဖော်မယ် */}
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              mb: 4
            }}>
              {getFilteredRecipes()
                .slice((currentPage - 1) * 12, currentPage * 12)
                .map((recipe) => (
                  <Box key={recipe.id} sx={{
                    flex: '0 0 calc(33.333% - 16px)', // 3 items per row
                    maxWidth: 'calc(33.333% - 16px)',
                    minWidth: '280px', // Minimum width for mobile
                    '@media (max-width: 900px)': {
                      flex: '0 0 calc(50% - 16px)', // 2 items per row on tablet
                      maxWidth: 'calc(50% - 16px)'
                    },
                    '@media (max-width: 600px)': {
                      flex: '0 0 100%', // 1 item per row on mobile
                      maxWidth: '100%'
                    }
                  }}>
                    {/* <Link href={`/recipes/detail/${recipe.id}`} passHref style={{ textDecoration: 'none' }}> */}
                    <Link href="/recipes/detail" passHref style={{ textDecoration: 'none' }}>

                      <Card sx={{

                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        borderRadius: '16px',
                        border: '3px solid transparent',
                        transition: 'transform 0.5s',
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          borderColor: '#ff6f00',
                          boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)',
                        },
                        cursor: 'pointer' // Add cursor pointer to indicate it's clickable
                      }}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={recipe.image_url || recipe.image || "/images/food1.jpg"}
                          alt={recipe.name || recipe.title}
                          sx={{ objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
                            {recipe.name || recipe.title}
                          </Typography>
                          {/* Author and rating in one line */}
                          <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 1
                          }}>
                            <Typography variant="body2" color="text.secondary">
                              By {recipe.user?.username || recipe.author || 'Unknown Chef'}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <StarIcon sx={{ color: "orange", fontSize: 16 }} />
                              <Typography variant="body2" sx={{ ml: 0.5 }}>
                                {recipe.rating || 4.6}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Category Chip */}
                          <Box sx={{ mt: 1 }}>
                            <Chip
                              label={recipe.category}
                              size="small"
                              sx={{
                                backgroundColor: '#fff3e0',
                                color: '#ff6f00',
                                textTransform: 'capitalize'
                              }}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Link>
                  </Box>
                ))}
            </Box>

            {/* Pagination  */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={Math.ceil(getFilteredRecipes().length / 12)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
                sx={{
                  '& .MuiPaginationItem-root': {
                    borderRadius: 2,
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#ff6f00',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#e65100'
                    }
                  }
                }}
              />
            </Box>

          </Box>
        {/* Footer Links */}


        {/* Footer Links */}
      </Box>

      {/* footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: '#ff6f00',
          color: 'white',
          py: 3,
          px: 2,
          borderTop: '1px solid #ffe0b2',
          mt: 4,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          {/* Brand name with subtle highlight */}
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            COOKCRAFT
          </Typography>

          {/* Short tagline */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            Where culinary creativity meets community
          </Typography>

          {/* Copyright with love icon */}
          <Typography variant="caption" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5
          }}>
            © {new Date().getFullYear()} Made with
            <FavoriteIcon sx={{ color: 'white', fontSize: '14px' }} />
            in Myanmar
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}




