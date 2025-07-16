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
  IconButton,
  
} from "@mui/material";
import {
  Search as SearchIcon,
  People as PeopleIcon,
  MenuBook as MenuBookIcon,
  ExitToApp as LogoutIcon,
  Check as CheckIcon,
  Add as AddIcon,
   Visibility as ViewIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
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

const UserTable = ({ users }) => (
//   <TableContainer component={Paper}>
//     <Table>
//       <TableHead>
//         <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
//           <TableCell sx={{ fontWeight: "bold" }}>No</TableCell>
//           <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
//           <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
//           <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
//           <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {users.map((user) => (
//           <TableRow key={user.id} hover>
//             <TableCell>{user.id}</TableCell>
//             <TableCell>{user.name}</TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>{user.phone}</TableCell>
//             <TableCell>
//               <IconButton>
//                 <CheckIcon color="success" />
//               </IconButton>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
    <TableContainer component={Paper} sx={{ maxHeight: 600, overflow: "auto" }}>
        <Table>
          <TableHead sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "#f5f5f5", // header background (important for sticky effect)
      }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>No</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Password</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: 300, overflowY: "auto", pr: 1 }}>
        {users.map((user) => (
          <TableRow key={user.id} hover>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>
              <IconButton
                color="primary"
                aria-label="view"
                sx={{
                  color: "#14a4cc",
                  "&:hover": {
                    backgroundColor: "rgba(20, 164, 204, 0.1)",
                  },
                }}
              >
                <ViewIcon />
              </IconButton>
              <IconButton
                color="error"
                aria-label="delete"
                sx={{
                  color: "#f44336",
                  "&:hover": {
                    backgroundColor: "rgba(244, 67, 54, 0.1)",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
        </Table>
      </TableContainer>
);

export default function UserAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const usersData = [
    { id: 1, name: "Su Su", email: "susu@gmail.com", password: "0942527729i" },
    { id: 2, name: "Aung Aung", email: "aung@gmail.com", password: "09899977899" },
    { id: 3, name: "Thiri", email: "Thiri@gmail.com", password: "09777894729" },
    { id: 4, name: "Min Min", email: "min@gmail.com", password: "09888967442" },
    { id: 5, name: "Su Myat", email: "myat@gmail.com", password: "09425247298" },
    { id: 6, name: "Zaw Zaw", email: "zaw@gmail.com", password: "09425277298" },
    { id: 8, name: "Hsu Het", email: "hsu@gmail.com", password: "0942527729i" },
    { id: 9, name: "Su Su", email: "susu@gmail.com", password: "0942527729i" },
    { id: 10, name: "Aung Aung", email: "aung@gmail.com", password: "09899977899" },
    { id: 11, name: "Thiri", email: "Thiri@gmail.com", password: "09777894729" },
    { id: 12, name: "Min Min", email: "min@gmail.com", password: "09888967442" },
    { id: 13, name: "Su Myat", email: "myat@gmail.com", password: "09425247298" },
    { id: 14, name: "Zaw Zaw", email: "zaw@gmail.com", password: "09425277298" },
    { id: 15, name: "Hsu Het", email: "hsu@gmail.com", password: "0942527729i" },
  ];
  
  const [editingUser, setEditingUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // handleSearch function ကို သတ်မှတ်ပါ
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

  const filteredUsers = useMemo(() => {
    return usersData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.password.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm, usersData]);

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
              { text: "User", icon: <PeopleIcon />, path: "/admin/user" },
              { text: "Recipes", icon: <MenuBookIcon />, path: "/admin/recipe" },
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
          Users
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            placeholder="Search Username or Email"
            variant="outlined"
            size="small"
            onChange={handleSearch}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                height: 40,
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
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
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "#FF7B00",
              "&:hover": { backgroundColor: "#E56D00" },
            }}
          >
            Add new user
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 2 }}>
          <UserTable users={filteredUsers} />
        </Paper>
      </Box>
    </Box>
  );
}