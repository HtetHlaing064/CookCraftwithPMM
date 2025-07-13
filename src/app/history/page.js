"use client";
import React, { useState } from "react";
import {
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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

export default function HistoryPage() {
  const [open, setOpen] = useState(false);

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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Top Navbar */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" color="primary">CookCraft</Typography>
        <Stack direction="row" spacing={4}>
          {["Home", "Recipes", "About", "Contact us"].map((item) => (
            <Typography key={item}>{item}</Typography>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ width: 40, height: 40, bgcolor: "#FFD6A5", borderRadius: "50%" }} />
          <Box sx={{ width: 40, height: 40, bgcolor: "#FFD6A5", borderRadius: "50%" }} />
        </Stack>
      </Box>

      <Stack direction="row" spacing={3}>
        {/* Sidebar */}
        <Stack spacing={2}>
          <Typography>🕒 History</Typography>
          <Typography>🧹 Clear history</Typography>
        </Stack>

        {/* Main Content */}
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <TextField
              placeholder="Search history"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ borderRadius: 4, flex: 1 }}
            />
            <Button variant="contained" color="warning" onClick={handleDeleteClick}>
              Delete
            </Button>
          </Box>

          {/* History Section */}
          {["Today - Friday, July 4, 2025", "Yesterday - Thursday, July 3, 2025"].map((day, idx) => (
            <Paper key={idx} sx={{ p: 2, mb: 3, borderRadius: 3, backgroundColor: "#eee" }}>
              <Typography variant="subtitle1" mb={1}>{day}</Typography>
              <List>
                {[
                  { time: "11:45 AM", icon: <FavoriteIcon color="error" />, text: "You like the recipe: Mango Smoothie" },
                  { time: "11:35 AM", icon: <CommentIcon color="primary" />, text: "You commented on: Spaghetti Bolognese" },
                  { time: "11:30 AM", icon: <AddCircleOutlineIcon color="success" />, text: "You create a new recipe: Pasta Carbonara" },
                ].map((item, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={item.time} sx={{ minWidth: 100 }} />
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={`“${item.text}”`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Box>
      </Stack>

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
    </Container>
  );
}
