


// app/profile/page.js
"use client";
import React, { useState } from 'react';
import {
  Box, TextField, Button, Typography, Avatar, IconButton, Paper, MenuItem
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    username: 'Kaung Htet Lin',
    phoneNumber: '',
    email: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    address: '',
  });

  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewCover, setPreviewCover] = useState(null);
  const [previewProfile, setPreviewProfile] = useState(null);

  // Generate days (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // Generate months (1-12)
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  // Generate years (1900-current year)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPhoto(file);
      setPreviewCover(URL.createObjectURL(file));
    }
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setPreviewProfile(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...profile,
      coverPhoto,
      profilePhoto
    });
    alert('Profile updated successfully!');
    router.push('/profile');
  };

  const handleBackClick = () => {
    router.push('/profile');
  };

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/edit-background.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // This makes the background fixed during scroll
        zIndex: -1,
        // opacity: 0.5 // Adjust opacity as needed
      }
    }}>
      <Box sx={{
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '800px', 
        mx: 'auto',
        width: '100%',
        maxWidth: { xs: '100%', sm: '600px', md: '800px' },
        py: 4, 
        px: 2, 
        gap: 3,
        boxShadow: '0 4px 12px ',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
        backdropFilter: 'blur(5px)', // Optional: adds blur effect to background
        minHeight: '100vh',
        borderRadius: 5,
        mt: 3,
        
        
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={handleBackClick} sx={{ color: 'primary.main' }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Typography variant="h4" fontWeight={700}>
            Edit Profile
          </Typography>
        </Box>

        {/* Cover Photo */}
        <Box sx={{
          position: 'relative', height: '200px', bgcolor: '#f0f0f0', borderRadius: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
        }}>
          {previewCover ? (
            <img src={previewCover} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Typography color="text.secondary">Add a cover photo</Typography>
          )}
          <input
            accept="image/*" id="cover-photo-upload" type="file" hidden
            onChange={handleCoverPhotoChange}
          />
          <label htmlFor="cover-photo-upload">
            <IconButton component="span" sx={{
              position: 'absolute', bottom: 10, right: 10,
              bgcolor: 'white', transition: 'all 0.3s ease',
              '&:hover': { bgcolor: 'primary.light' }
            }}>
              <AddPhotoAlternateIcon />
            </IconButton>
          </label>
        </Box>

        {/* Profile Photo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: -6, zIndex: 1 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar src={previewProfile || '/default-profile.png'}
              sx={{ width: 100, height: 100, border: '3px solid white', bgcolor: '#f0f0f0' }}
            />
            <input
              accept="image/*" id="profile-photo-upload" type="file" hidden
              onChange={handleProfilePhotoChange}
            />
            <label htmlFor="profile-photo-upload">
              <IconButton component="span" sx={{
                position: 'absolute', bottom: 0, right: 0,
                bgcolor: 'white', transition: 'all 0.3s ease',
                '&:hover': { bgcolor: 'primary.light' }
              }}>
                <AddPhotoAlternateIcon fontSize="small" />
              </IconButton>
            </label>
          </Box>
          <Typography variant="h5" fontWeight={600}>
            {profile.username}
          </Typography>
        </Box>

        {/* Form */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 12px rgba(255, 111, 0, 0.3)', }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label="Username" name="username" value={profile.username} onChange={handleChange} fullWidth />
            <TextField label="Phone Number" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} fullWidth />
            <TextField label="Email" name="email" type="email" value={profile.email} onChange={handleChange} fullWidth />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                select
                label="Day"
                name="day"
                value={profile.day}
                onChange={handleChange}
                fullWidth
                sx={{ flex: 1 }}
              >
                <MenuItem value=""><em>Select day</em></MenuItem>
                {days.map((day) => (
                  <MenuItem key={day} value={day}>{day}</MenuItem>
                ))}
              </TextField>
              
              <TextField
                select
                label="Month"
                name="month"
                value={profile.month}
                onChange={handleChange}
                fullWidth
                sx={{ flex: 1 }}
              >
                <MenuItem value=""><em>Select month</em></MenuItem>
                {months.map((month) => (
                  <MenuItem key={month} value={month}>{month}</MenuItem>
                ))}
              </TextField>
              
              <TextField
                select
                label="Year"
                name="year"
                value={profile.year}
                onChange={handleChange}
                fullWidth
                sx={{ flex: 1 }} 
              >
                <MenuItem value=""><em>Select year</em></MenuItem>
                {years.map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </TextField>
            </Box>

            <TextField
              select label="Gender" name="gender" value={profile.gender}
              onChange={handleChange} fullWidth
            >
              <MenuItem value=""><em>Select gender</em></MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>

            <TextField
              label="Address" name="address" value={profile.address}
              onChange={handleChange} placeholder="Enter Your Address"
              multiline rows={3} fullWidth
            />

            <Button
              type="submit" variant="contained" size="large"
              startIcon={<CloudUploadIcon />} sx={{
                alignSelf: 'flex-end', px: 2, py: 1,
                color:'white',
                background:'#ff6f00',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)',
                  backgroundColor:'#e65100'
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}