"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Divider,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import {
  Search as SearchIcon,
  People as PeopleIcon,
  MenuBook as MenuBookIcon,
  ExitToApp as LogoutIcon,
  Check as CheckIcon,
  Add as AddIcon,
  Schedule as TimeIcon,
  Restaurant as CategoryIcon,
  Person as UserIcon,
  PendingActions as PendingIcon,
  Clear as RejectIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function RecipeDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const recipes = [
    {
      id: 1,
      title: "Easy Egg Curry",
      author: "@maychaw",
      category: "Dinner",
      preTime: "10 min",
      cookTime: "30 min",
      image: "photo",
      status: "approved",
    },
    {
      id: 2,
      title: "Banana Pancakes",
      author: "@chefmaw",
      category: "Breakfast",
      preTime: "7 min",
      cookTime: "20 min",
      status: "approved",
    },
    {
      id: 3,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "approved",
    },
    {
      id: 4,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "approved",
    },
    {
      id: 5,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "approved",
    },
    {
      id: 6,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "approved",
    },
    {
      id: 7,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "approved",
    },
    {
      id: 8,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "approved",
    },
  ];



  const filteredApprovedRecipes = recipes
    .filter((recipe) => recipe.status === "approved")
    .filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.author.toLowerCase().includes(searchTerm) ||
        recipe.category.toLowerCase().includes(searchTerm)
    );

  const approvedRecipes = recipes.filter(
    (recipe) => recipe.status === "approved"
  );
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#FF7B00",
            color: "#fff",
          },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", p: 2 }}>
          CookCraft
        </Typography>
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Dashboard", icon: <PeopleIcon />, path: "/admin" },
              { text: "User", icon: <PeopleIcon />, path: "/admin/user" },
              {
                text: "Recipes",
                icon: <MenuBookIcon />,
                path: "/admin/recipe",
              },
            ].map((item) => {
              const router = useRouter();
              // Add error handling
              if (!router) return null;

              const isActive = router.pathname === item.path;

              return (
                <Link href={item.path} passHref key={item.text} legacyBehavior>
                  <ListItem
                    component="a"
                    sx={{
                      textDecoration: "none",
                      backgroundColor: isActive ? "#fff" : "inherit",
                      color: isActive ? "#000" : "inherit",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                        "& .MuiListItemIcon-root": {
                          color: "#000",
                        },
                      },
                      "& .MuiListItemIcon-root": {
                        color: isActive ? "#000" : "inherit",
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        style: {
                          textDecoration: "none",
                        },
                      }}
                    />
                  </ListItem>
                </Link>
              );
            })}
            <Divider sx={{ my: 1 }} />
            <ListItem
              button
              onClick={() => {
                // Add your logout logic here
                console.log("Logout clicked");
              }}
              sx={{
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                  "& .MuiListItemIcon-root": {
                    color: "#000",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "#4CAF50" }}>
            Approved Recipes ({filteredApprovedRecipes.length})
          </Typography>
          <TextField
            placeholder="Search approved recipes..."
            variant="outlined"
            size="small"
            onChange={handleSearch}
            value={searchTerm} // Add this to make it controlled
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Recipe Table */}
        <TableContainer
          component={Paper}
          sx={{
            height: 500, // အမြင့်သတ်မှတ်ခြင်း
            overflow: "auto", // scroll လုပ်နိုင်ရန်
            position: "relative", // header ကိုတွယ်ထားရန်
          }}
        >
          <Table stickyHeader >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Recipe Title
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Uploaded By
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Pre Cooking Time
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Cooking Time
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#f5f5f5",
                    zIndex: 2,
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredApprovedRecipes.map((recipe) => (
                <TableRow key={recipe.id} hover>
                  {/* ... အရင်အတိုင်း cells */}
                  <TableCell sx={{ fontWeight: "medium" }}>
                    {recipe.title}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {recipe.author}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {recipe.category}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {recipe.preTime}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {recipe.cookTime}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {recipe.image}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={recipe.status}
                      color={
                        recipe.status === "approved" ? "success" : "warning"
                      }
                      size="small"
                      icon={
                        recipe.status === "pending" ? (
                          <PendingIcon />
                        ) : (
                          <CheckIcon />
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#f44336",
                        color: "#fff",
                        "&:hover": { borderColor: "#E66C00" },
                        textTransform: "none",
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
