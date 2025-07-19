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
   ListItemIcon, ListItemText, Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
   Menu,
   IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { useRouter } from "next/navigation";
import Link from 'next/link'; // Next.js ရဲ့ Link component

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

import Badge from "@mui/material/Badge";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

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

  // navbar
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

// nav
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
              <Button sx={{ color: 'black', mx: 1,
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
            {/* <Link href="/recipes/create" passHref>
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
            </Link> */}

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
                  
                  console.log("Edit Profile clicked");
                  router.push("/profile/edit-profile");
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