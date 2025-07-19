
"use client"

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
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function About() {

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
                                color: '#ff6f00', mx: 1,

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
              
              {/* contact form */}
               <Box sx={{ bgcolor: "#f9f9f9", pt: 6 }}>
      {/* Top Section */}
      <Container maxWidth="lg">
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: { md: 400 },
      mt: 4,
      gap: 4,
    }}
  >
    {/* Left: Text */}
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Contact <br /> Informations
      </Typography>
      <Typography variant="body1" mb={3}>
        Whether you have a question about a recipe, want to give feedback,
        or just want to say hello, the CookCraft team is here to help.
        Fill out the form below or reach us directly through the contact
        information provided. <br />
        We aim to respond to all inquiries within 24–48 hours.
      </Typography>
      {/* <Button variant="contained" sx={{ bgcolor: "#F57C00" }}>
        CONTACT US
      </Button> */}
    </Box>

    {/* Right: Image */}
    <Box
      component="img"
      src="/images/contact-girl.png"
      alt="Contact"
      sx={{
        width: { xs: "80%", sm: "70%", md: "90%" },
        maxWidth: "350px",
        borderRadius: 3,
        flex: 1,
      }}
    />
  </Box>
</Container>


      {/* Middle Form Section */}
     <Box sx={{ bgcolor: "#edf1f5ff", py: 6, mt: 6 }}>
  <Container maxWidth="lg">
    <Typography
      variant="h6"
      fontWeight="bold"
      textAlign="center"
      mb={4}
      color="#F57C00"
    >
      Send Message
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      {/* Contact Info - Left Side */}
      <Stack spacing={3} sx={{ flex: 1 }}>
        <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ mr: 2 }} color="action" />
          <Box>
            <Typography fontWeight="bold">Phone Number</Typography>
            <Typography>+959123456789</Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <EmailIcon sx={{ mr: 2 }} color="action" />
          <Box>
            <Typography fontWeight="bold">Email</Typography>
            <Typography>cook@gmail.com</Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={{ mr: 2 }} color="action" />
          <Box>
            <Typography fontWeight="bold">Location</Typography>
            <Typography>MICT Building4</Typography>
          </Box>
        </Paper>
      </Stack>

      {/* Contact Form - Right Side */}
      <Box sx={{ flex: 2 }}>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
            <TextField fullWidth label="Name" variant="outlined" />
            <TextField fullWidth label="Phone Number" variant="outlined" />
          </Box>
          <TextField fullWidth label="Subject" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Message"
            variant="outlined"
          />
          <Button variant="contained" sx={{ bgcolor: "#F57C00", px: 4 ,color:'#fff'}}>
            Send Message
          </Button>
        </Stack>
      </Box>
    </Box>
  </Container>
</Box>
{/* Footer */}
      <Box sx={{ bgcolor: "#F57C00", color: "#fff", mt: 0, py: 13}}>
  <Container maxWidth="lg">
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {/* Left Column */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          CookCraft
        </Typography>
        <Typography variant="caption">
          ©2025 FoodBuilt with passion <br />
          for good food.
        </Typography>
      </Box>

      {/* Middle Column */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" mb={1}>
          Enter your email to receive relevant messaging tips.
        </Typography>
        <Stack direction="row" spacing={1}>
          <TextField
            size="small"
            placeholder="Email"
            sx={{
              bgcolor: "#fff",
              borderRadius: 1,
              input: { color: "#000" },
              flex: 1,
            }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#000", color: "#fff" }}
          >
            Send
          </Button>
        </Stack>
      </Box>

      {/* Right Column */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "space-between", sm: "flex-start" },
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {/* Menu */}
        <Box>
          <Typography fontWeight="bold" mb={1}>
            Menu
          </Typography>
          <Typography>Kitchen</Typography>
          <Typography>Taste</Typography>
          <Typography>Recipes</Typography>
        </Box>

        {/* Meet Chefs */}
        <Box>
          <Typography fontWeight="bold" mb={1}>
            Meet Chefs
          </Typography>
          <Typography>Alice</Typography>
          <Typography>Sweet</Typography>
          <Typography>Anna</Typography>
        </Box>

        {/* Social Media */}
        <Box>
          <Typography fontWeight="bold" mb={1}>
            Social Media
          </Typography>
          <Typography>Facebook</Typography>
        </Box>
      </Box>
    </Box>
  </Container>
</Box>

    </Box>
            
        </Box>
    );
};
