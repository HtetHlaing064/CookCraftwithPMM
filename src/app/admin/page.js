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
  MoreHoriz as MoreIcon,
  Notifications as PendingIcon,
} from "@mui/icons-material";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import React, { useState, useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminDashboard() {
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
      status: "pending",
    },
    {
      id: 2,
      title: "Banana Pancakes",
      author: "@chefmaw",
      category: "Breakfast",
      preTime: "7 min",
      cookTime: "20 min",
      status: "pending",
    },
    {
      id: 3,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "pending",
    },
    {
      id: 4,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "pending",
    },
    {
      id: 5,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "pending",
    },
    {
      id: 6,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "pending",
    },
    {
      id: 7,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "pending",
    },
    {
      id: 8,
      title: "Fried Rice",
      author: "@kohlwe",
      category: "Breakfast",
      preTime: "15 min",
      cookTime: "45 min",
      status: "pending",
    },
  ];

  const filteredRecipes = recipes
    .filter((recipe) => recipe.status === "pending")
    .filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.author.toLowerCase().includes(searchTerm) ||
        recipe.category.toLowerCase().includes(searchTerm)
    );

  const RecipeTable = ({ users }) => (
    <TableContainer
      component={Paper}
      sx={{
        height: 500, // အမြင့်သတ်မှတ်ခြင်း
        overflow: "auto", // scroll လုပ်နိုင်ရန်
        position: "relative", // header ကိုတွယ်ထားရန်
      }}
    >
      <Table stickyHeader>
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
          {filteredRecipes.map((recipe) => (
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
                  color={recipe.status === "approved" ? "success" : "warning"}
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
                <Box display="flex">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#4CAF50", // Green
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#388E3C", // Darker green on hover
                      },
                      textTransform: "none",
                      mr:2,
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#f44336", // Red
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#D32F2F", // Darker red on hover
                      },
                      textTransform: "none",
                    }}
                  >
                    Reject
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  //   const filteredUsers = useMemo(() => {
  //     return usersData.filter(
  //       (user) =>
  //         user.name.toLowerCase().includes(searchTerm) ||
  //         user.email.toLowerCase().includes(searchTerm) ||
  //         user.phone.toLowerCase().includes(searchTerm)
  //     );
  //   }, [searchTerm, usersData]);

  const recipesData = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Recipes Published",
        data: [150, 230, 180, 210, 190, 250],
        fill: false,
        borderColor: "rgba(63, 81, 181, 1)",
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const categoryData = {
    labels: ["Broadcast", "Lunch", "Dinner"],
    datasets: [
      {
        data: [40, 60, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
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
              { text: "User", icon: <PeopleIcon />, path: "admin/user" },
              { text: "Recipes", icon: <MenuBookIcon />, path: "admin/recipe" },
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

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#fafafa" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mb: 3, fontWeight: "bold", color: "#FF7B00" }}
        >
          Welcome, AdminDashboard!
        </Typography>

        <TextField
          placeholder="Search users..."
          variant="outlined"
          size="small"
          onChange={handleSearch}
          sx={{
            mb: 4,
            width: "60%",
            "& .MuiOutlinedInput-root": {
              height: 60,
              borderRadius: 3,
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main", // remove black border on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main", // optional: focus border color
              },
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

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 4 }}>
          {[
            {
              title: "Total User",
              count: "490 People",
              color: "primary.main",
              image: "/images/group 1.png",
            },
            {
              title: "Total Recipes",
              count: "1000 Recipes",
              color: "secondary.main",
              image: "/images/group 3.png",
            },
            {
              title: "New Pending Recipes",
              count: "38 Posts",
              color: "warning.main",
              image: "/images/group 2.png",
            },
          ].map((item, index) => (
            <Box key={index} sx={{ flex: "1 1 30%", minWidth: 250 }}>
              <Card elevation={3}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <img src={item.image} alt="icon" width={32} height={32} />
                    <Typography variant="subtitle1">{item.title}</Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: item.color }}
                  >
                    {item.count}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mb: 4,
            alignItems: "stretch",
          }}
        >
          <Box sx={{ flex: "1 1 65%", minWidth: 300 }}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Recipes Published
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line
                  data={recipesData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "top" } },
                    scales: { y: { beginAtZero: true } },
                  }}
                />
              </Box>
            </Paper>
          </Box>
          <Box sx={{ flex: "1 1 30%", minWidth: 250 }}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Category
              </Typography>
              <Box sx={{ height: 300 }}>
                <Pie
                  data={categoryData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "bottom" } },
                  }}
                />
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* <Paper elevation={3} sx={{ p: 2, mt: 10 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            User Management
          </Typography>
          <UserTable users={filteredUsers} />
        </Paper> */}

        <Paper
          elevation={3}
          sx={{
            p: 2,
            mt: 10,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            User Management
          </Typography>
          <Box>
            <RecipeTable users={filteredRecipes} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
