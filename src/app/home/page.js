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
  ListItemIcon, ListItemText, Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from "@mui/material";

import { useRouter } from "next/navigation";
import Link from 'next/link'; // Next.js ရဲ့ Link component
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";


export default function RecipeListPage() {

  const router = useRouter();

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

              {/* Left Orange Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0, top: 0,
                  bottom: 0,
                  width: { xs: '30%', md: '25%' },
                  background: 'linear-gradient(to right, rgba(255,111,0,0.7), transparent)',
                  zIndex: 1,
                }}
              />

              {/* Right Orange Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: { xs: '30%', md: '25%' },
                  background: 'linear-gradient(to left, rgba(255,111,0,0.7), transparent)',
                  zIndex: 1,
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
      <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black', boxShadow: '0 4px 12px rgba(255, 111, 0, 0.2)', }}>
        {/* Toolbar space-around  */}
        <Toolbar sx={{ justifyContent: 'space-around', alignItems: 'center' }}>

          {/* Logo */}
          <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>

            COOKCRAFT

          </Typography>

          {/* Navigation Links */}
          <Box>
            <Link href="/home" passHref>
              <Button sx={{ color: '#ff6f00', mx: 1, }}>Home</Button>
            </Link>
            <Link href="/recipes" passHref>
              <Button sx={{
                color: 'black', mx: 1,
                transition: 'transform 0.3s',
                '&:hover': {
                  color: '#ff6f00',
                  transform: 'translateY(-3px)',
                }
              }}>Recipes</Button>
            </Link>
            <Link href="/about" passHref>
              <Button sx={{
                color: 'black', mx: 1,
                transition: 'transform 0.3s',
                '&:hover': {
                  color: '#ff6f00',
                  transform: 'translateY(-3px)',
                }
              }}>About</Button>
              {/* textTransform: 'none' ဆိုစာလုံး အသေးရေးလို့ရ */}
            </Link>
          </Box>

          {/*  Action Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                  transition: 'transform 0.3s',
                  "&:hover": {
                    backgroundColor: "#e86f00",
                    transform: 'translateY(-3px)',
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
                bgcolor: "#F57C00", cursor: "pointer",
                transition: 'transform 0.3s',
                "&:hover": {
                  backgroundColor: "#e86f00",
                  transform: 'translateY(-3px)',
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

            <Link href="/profile" passHref style={{ textDecoration: 'none' }}>
              <Avatar sx={{
                bgcolor: '#ff7f00', cursor: 'pointer',
                transition: 'transform 0.3s',
                "&:hover": {
                  backgroundColor: "#e86f00",
                  transform: 'translateY(-3px)',
                },
              }}>K</Avatar>
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
                }
                }
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
              <DialogTitle id="logout-dialog-title" sx={{ textAlign: "center" }}>
                <WarningAmberIcon sx={{ color: "#ff7f00", fontSize: 50 }} />
              </DialogTitle>

              <DialogContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Are you sure?
                </Typography>
                <Typography variant="body2">
                  You want to log out?
                </Typography>
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

      {/* Banner */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <TrendingSlider />

        {/* Search + Categories */}
        <Box mt={5}>
          <Typography variant="h4" textAlign="center"
            sx={{ fontWeight: 'bold', color: '#ff6f00' }}
          >
            What to Cook?
          </Typography>
          {/* search */}
          <Stack direction="row" justifyContent="center" mt={2}>
            <TextField
              variant="outlined"
              placeholder="Search"
              fullWidth
              sx={{
                maxWidth: 600,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px',
                  backgroundColor: 'white',
                  borderColor: '#ff6f00',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6f00',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6f00',
                    borderWidth: '1.5px',
                  }
                },
                '&:hover': {
                  borderColor: '#ff6f00',
                }
              }}

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
