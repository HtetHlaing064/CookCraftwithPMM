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
  Menu,
  MenuItem,
  TextField,
  Chip,
  Rating,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  ListItemIcon, ListItemText, Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
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


export default function RecipeDetailPage() {

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
              <Button sx={{
                color: 'black',
                mx: 1,
                transition: 'transform 0.3s',
                '&:hover': {
                  color: '#ff6f00',
                  transform: 'translateY(-3px)',
                }
              }}>Home</Button>
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

            <Link href="/contact" passHref>
              <Button sx={{
                color: 'black', mx: 1,
                transition: 'transform 0.3s',
                '&:hover': {
                  color: '#ff6f00',
                  transform: 'translateY(-3px)',
                }
              }}>Contact Us</Button>
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
