"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Stack,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Avatar,
  Menu,
  MenuItem,
  Pagination,
} from "@mui/material";
import { useRouter } from "next/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from 'next/link';
import Badge from "@mui/material/Badge";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

export default function HistoryPage() {
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
  const [anchorElMore, setAnchorElMore] = React.useState(null);
  const openMore = Boolean(anchorElMore);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);
  const [open, setOpen] = useState(false);

  const handleClickMore = (event) => {
    setAnchorElMore(event.currentTarget);
  };

  const handleCloseMore = () => {
    setAnchorElMore(null);
  };

  const handleOpenLogoutDialog = () => setOpenLogoutDialog(true);
  const handleCloseLogoutDialog = () => setOpenLogoutDialog(false);

  const handleConfirmLogout = () => {
    setOpenLogoutDialog(false);
    router.push("/");
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    setOpen(false);
    // Handle actual delete logic
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
    // ... other notifications
  ];

  return (
    <Box>
      {/* Navbar (same as before) */}
      <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black', boxShadow: '0 4px 12px rgba(255, 111, 0, 0.2)' }}>
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
                color: 'black', mx: 1,
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

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction="row" spacing={4}>
          {/* Sidebar */}
          <Box sx={{ width: 200 }}>
            <Paper sx={{
              p: 2, borderRadius: 3,
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.4)',
            }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#ff6f00' }}>
                History
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Button
                startIcon={<DeleteIcon />}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'error.main',
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={handleDeleteClick}
              >
                Clear history
              </Button>
            </Paper>
          </Box>

          {/* History Content */}
          <Box sx={{ flex: 1 }}>
            {/* Search Bar */}
            <Box display="flex" alignItems="center" gap={2} mb={4}>
              <TextField
                placeholder="Search history"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 4,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 4,
                  }
                }}
              />
              {/* <Button 
                variant="contained" 
                color="warning" 
                onClick={handleDeleteClick}
                sx={{ borderRadius: 4 }}
              >
                Delete
              </Button> */}
            </Box>

            {/* History Sections */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
                Today - Friday, July 4, 2025
              </Typography>
              <Divider sx={{ mb: 2, borderColor: 'divider' }} />
              <Paper sx={{
                p: 2,
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(255, 111, 0, 0.4)',
                backgroundColor: 'background.paper'
              }}>
                <List disablePadding>
                  <ListItem sx={{ px: 2, py: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{
                      minWidth: 80,
                      color: 'text.secondary',
                      alignSelf: 'center'
                    }}>
                      11:45 AM
                    </Typography>
                    <ListItemIcon sx={{
                      minWidth: 36,
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}>
                      <FavoriteIcon color="error" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="You like the recipe: Mango Smoothie*"
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { fontWeight: 500 }
                      }}
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                  <Divider component="li" sx={{ mx: 2 }} />
                  <ListItem sx={{ px: 2, py: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{
                      minWidth: 80,
                      color: 'text.secondary',
                      alignSelf: 'center'
                    }}>
                      11:35 AM
                    </Typography>
                    <ListItemIcon sx={{
                      minWidth: 36,
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}>
                      <CommentIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="You commented on: Spaghetti Bolognese"
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { fontWeight: 500 }
                      }}
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                  <Divider component="li" sx={{ mx: 2 }} />
                  <ListItem sx={{ px: 2, py: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{
                      minWidth: 80,
                      color: 'text.secondary',
                      alignSelf: 'center'
                    }}>
                      11:30 AM
                    </Typography>
                    <ListItemIcon sx={{
                      minWidth: 36,
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}>
                      <AddCircleOutlineIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="You create a new recipe: Pasta Carbonara"
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { fontWeight: 500 }
                      }}
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
                Yesterday - Thursday, July 3, 2025
              </Typography>
              <Divider sx={{ mb: 2, borderColor: 'divider' }} />
              <Paper sx={{
                p: 2,
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(255, 111, 0, 0.4)',
                backgroundColor: 'background.paper'
              }}>
               <List disablePadding>
                  <ListItem sx={{ px: 2, py: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{
                      minWidth: 80,
                      color: 'text.secondary',
                      alignSelf: 'center'
                    }}>
                      11:45 AM
                    </Typography>
                    <ListItemIcon sx={{
                      minWidth: 36,
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}>
                      <FavoriteIcon color="error" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="You like the recipe: Mango Smoothie*"
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { fontWeight: 500 }
                      }}
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                  <Divider component="li" sx={{ mx: 2 }} />
                  <ListItem sx={{ px: 2, py: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{
                      minWidth: 80,
                      color: 'text.secondary',
                      alignSelf: 'center'
                    }}>
                      11:35 AM
                    </Typography>
                    <ListItemIcon sx={{
                      minWidth: 36,
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}>
                      <CommentIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="You commented on: Spaghetti Bolognese"
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { fontWeight: 500 }
                      }}
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                  <Divider component="li" sx={{ mx: 2 }} />
                  <ListItem sx={{ px: 2, py: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{
                      minWidth: 80,
                      color: 'text.secondary',
                      alignSelf: 'center'
                    }}>
                      11:30 AM
                    </Typography>
                    <ListItemIcon sx={{
                      minWidth: 36,
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}>
                      <AddCircleOutlineIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="You create a new recipe: Pasta Carbonara"
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { fontWeight: 500 }
                      }}
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Box>

           <Box sx={{ mb: 4 }}>
  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
    You like the recipe: Mango Smoothie*
  </Typography>
  <Divider sx={{ mb: 2, borderColor: 'divider' }} />
  <Paper sx={{ 
    p: 2, 
    mb: 3, 
    borderRadius: 2,
    boxShadow: '0 2px 8px rgba(255, 111, 0, 0.4)',
    backgroundColor: 'background.paper'
  }}>
    <List disablePadding>
      <ListItem sx={{ px: 2, py: 1.5 }}>
        <ListItemText 
          primary="You commented on: Spaghetti Bolognese" 
          primaryTypographyProps={{ 
            variant: 'body2',
            sx: { fontWeight: 500 }
          }}
        />
      </ListItem>
      <Divider component="li" sx={{ mx: 2 }} />
      <ListItem sx={{ px: 2, py: 1.5 }}>
        <ListItemText 
          primary="You create a new recipe: Pasta Carbonara" 
          primaryTypographyProps={{ 
            variant: 'body2',
            sx: { fontWeight: 500 }
          }}
        />
      </ListItem>
    </List>
  </Paper>
</Box>

          </Box>
        </Stack>
      </Container>

      {/* Delete Confirmation Modal */}
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle sx={{ bgcolor: "orange", color: "white", textAlign: "center" }}>
          Warning!
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", py: 2 }}>
          <Typography>Are you sure you want to clear all your history?</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button variant="outlined" onClick={handleConfirmDelete}>YES</Button>
          <Button variant="contained" color="warning" onClick={handleCancel}>NO</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}