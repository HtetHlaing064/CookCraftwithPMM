


"use client";

import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

// MUI Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Link as MuiLink, Divider,
  IconButton 
} from '@mui/material';

import { Facebook } from '@mui/icons-material';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';

import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

// React Slick Carousel
import Slider from 'react-slick';

// Navbar
const Navbar = ({ scrollToRecipes, scrollToAbout }) => {

 // Scroll to top function for Home link
//   const scrollToTop = () => {
//     if (typeof window !== 'undefined') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }
// };

 const scrollToTop = () => {
    // All three methods to ensure it works
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  // Scroll to footer function for Contact Us link
  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      // Try multiple methods to ensure scroll works
      const footer = document.querySelector('footer');
      if (footer) {
        // Method 1: Standard scrollIntoView
        footer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

        // Fallback method if above doesn't work
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }, 300);
      }
    }
  };

  return (
    <AppBar
    position="sticky"
    sx={{
      backgroundColor: 'white',
      color: 'black',
      // boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      boxShadow: '0 4px 12px rgba(255, 111, 0, 0.2)',
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
        COOKCRAFT
      </Typography>
      <Box sx={{ display: { md: 'flex' }, gap: 2 }}>

       {/* Home link - scrolls to top */}
          <Button 
            color="inherit" 
            onClick={scrollToTop}
            sx={{ cursor: 'pointer' }}
          >
            Home
          </Button>
          {/* <Button color="inherit" component={Link} href="#">Home</Button> */}
        
        {/* <Button color="inherit" component={Link} href="#popular-recipes">Recipes</Button> */}
        <Button 
          color="inherit" 
          onClick={scrollToRecipes}
          sx={{ cursor: 'pointer' }}
        >
          Recipes
        </Button>

        {/* <Button color="inherit" component={Link} href="#why-choose-us">About</Button> */}
      <Button 
          color="inherit" 
          onClick={scrollToAbout}
          sx={{ cursor: 'pointer' }}
        >
          About
        </Button>

        
          {/* Contact Us link - scrolls to footer */}
          <Button 
            color="inherit" 
            onClick={scrollToContact}
            sx={{ 
              cursor: 'pointer',
              color: '#ff7b00'
            }}
          >
            Contact us
          </Button>
        
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Link href="/users/sign-up" passHref>
          <Button variant="contained" sx={{
            backgroundColor: '#ff6f00',
            color: 'white',
            borderRadius: '20px',
            textTransform: 'none',
            transition: 'transform 0.3s',
            
            '&:hover': {
              backgroundColor: '#e65100',
              transform: 'translateY(-3px)',
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.3)',
            }
          }}>
            Sign up
          </Button>
        </Link>
        <Link href="/users/sign-in" passHref>
          <Button variant="outlined" sx={{
            borderColor: '#ff7b00',
            color: '#ff6f00',
            borderRadius: '20px',
            textTransform: 'none',
            transition: 'transform 0.3s',
            // transition: 'border-color 0.5s ease',
            '&:hover': {
              backgroundColor: '#ff6f00',
              color: 'white',
              transform: 'translateY(-3px)',
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.3)',
            }
          }}>
            Log in
          </Button>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
  );

  
};

// Carousel Arrows
const NextArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant="outlined"
    sx={{
      position: 'absolute',
      top: '85%',
      right: 70,
      transform: 'translateY(-50%)',
      zIndex: 2,
      textTransform: 'none',
      borderColor: '#ff7b00',
      color: 'white',
      borderRadius: '50px',
      px: 3,
      '&:hover': { backgroundColor: '#e65100' }
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
      position: 'absolute',
      top: '85%',
      right: 150,
      transform: 'translateY(-50%)',
      zIndex: 2,
      textTransform: 'none',
      borderColor: '#ff7b00',
      color: 'white',
      borderRadius: '50px',
      px: 3,
      '&:hover': { backgroundColor: '#e65100' }
    }}
  >
    <ArrowBackIosNewIcon />
  </Button>
);

// Carousel Component
const trendingItems = [
  { title: "Kevin's Famous Spicy Salsa with Mangos", author: "By Kevin Josh", image: "/images/food1.jpg" },
  { title: "Classic Italian Seafood Pasta", author: "By Maria Rossi", image: "/images/food2.jpg" },
  { title: "Grilled Summer Vegetable Skewers", author: "By David Chen", image: "/images/food3.jpg" }
];


const TrendingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 800,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Smooth easing function
    useCSS: true, // Hardware accelerated animations
    useTransform: true, // CSS transforms သုံးမယ်
    fade: true, // Fade effect ထည့်ချင်ရင် (optional)
    pauseOnHover: true, // Hover လုပ်ရင် autoplay ခဏရပ်မယ်
  };


  return (
    <Box sx={{
      p: { xs: 2, md: 4 }, position: 'relative', mt: 3,
      '.slick-slide': {
        transition: 'all 1000ms ease', // Additional transition
      },
      '.slick-active': {
        opacity: 1,
      }
    }}>
      <Slider {...settings}>
        {trendingItems.map((item, index) => (
          <Box key={index} sx={{
            position: 'relative', borderRadius: '20px', overflow: 'hidden',
            transition: 'opacity 1000ms ease' // Slide transition
          }}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{ width: '100%', height: { xs: '200px', md: '250px' }, objectFit: 'cover' }}
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

            <Box sx={{
              position: 'absolute', top: 0, left: 0, bottom: 0,
              width: { xs: '100%', md: '50%' },
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center',
              p: { xs: 2, md: 6 },
              zIndex: 2
            }}>
              <Typography variant="button" sx={{ color: 'white' }}>Trending now</Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', my: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }}>{item.author}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

// Taste of Food Section
const FoodCategoryCard = ({ icon, title, description }) => (
  <Card sx={{
    height: '100%', p: 2, borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)',

    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid transparent',
    transition: 'border-color 0.3s ease',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-3px)',
      borderColor: '#ff6f00', // Your highlight color
      boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)', // Optional: more shadow on hover
    },


  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <Box sx={{ mr: 2, color: '#e65100' }}>{icon}</Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: '600', color: '#ff6f00' }}>{title}</Typography>
        <Typography variant="body2" color="black">{description}</Typography>
      </Box>
    </Box>
  </Card>
);

const TasteOfFood = () => {
  const foodItems = [
    { icon: <RestaurantMenuOutlinedIcon sx={{ fontSize: 40 }} />, title: 'Breakfast', description: 'You can choose from a variety of healthy breakfast menus.' },
    { icon: <LunchDiningOutlinedIcon sx={{ fontSize: 40 }} />, title: 'Lunch', description: 'You can easily prepare quick and delicious lunch dishes.' },
    { icon: <DinnerDiningOutlinedIcon sx={{ fontSize: 40 }} />, title: 'Dinner', description: 'We have prepared a wide variety of dinner dishes.' },
    { icon: <GrassOutlinedIcon sx={{ fontSize: 40 }} />, title: 'Salad', description: 'Healthy and delicious salads with fresh vegetables.' },
    { icon: <CakeOutlinedIcon sx={{ fontSize: 40 }} />, title: 'Dessert', description: 'Delicious desserts for you to enjoy.' }
  ];

  return (
    <Box sx={{ 
      py: 7 //---------------------------------------------------

     }}> 
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', 
          mb: 6, //------------------------------------------------
           color: '#ff6f00' }}>
          Taste of Food
        </Typography>
        <Grid container spacing={3} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
          {foodItems.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', width: "350px", height: "100px", my: 2 }} >
              <FoodCategoryCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

//  Recipes component
const PopularRecipes = () => {
  // Hard-coded recipe data with different titles, authors and images
  const recipes = [
    {
      title: "Steamed Sticky Rice",
      author: "By Paste de Italia",
      image: "/images/sticky-rice.jpg" // placeholder path
    },
    {
      title: "Spicy Thai Basil Chicken",
      author: "By Chef Somchai",
      image: "/images/thai-chicken.jpg"
    },
    {
      title: "Classic Beef Burger",
      author: "By Burger Master",
      image: "/images/beef-burger.jpg"
    },
    {
      title: "Vegetable Spring Rolls",
      author: "By Green Eats",
      image: "/images/spring-rolls.jpg"
    },
    {
      title: "Chocolate Lava Cake",
      author: "By Sweet Tooth",
      image: "/images/lova-cake.jpg"
    },
    {
      title: "Miso Ramen",
      author: "By Ramen King",
      image: "/images/miso-ramen.jpg"
    }
  ];

  return (
    <Box sx={{
      py: 13, //------------------------------------------------
    }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{
          fontWeight: 'bold',
          mb: 6, //---------------------------------------------------------
          color: '#ff6f00',
          textAlign: 'center'
        }}>
          Popular Recipes
        </Typography>

        <Grid container spacing={3} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
        >
          {recipes.map((recipe, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{
              maxWidth: '350px', // ဒါမှမဟုတ် width: '100%'
              flexBasis: 'calc(33.333% - 24px)' // 3 columns ဖြစ်အောင်
            }}
            >
              <Card sx={{
                height: '100%',
                borderRadius: '16px',
                border: '3px solid transparent',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.5s',
                // transition: 'border-color 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: '#ff6f00',
                  boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)',
                }
              }}>
                {/* Placeholder for image - replace with your actual images */}
                {/* <Box sx={{ 
                  height: '160px',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999'
                }}>
                  [Image: {recipe.image}]
                </Box> */}

                {/* Image part */}
                <Box
                  component="img"
                  src={recipe.image}
                  alt={recipe.title}
                  sx={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                />

                <CardContent sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    color: 'black'
                  }}>
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: '#ff6f00',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}>
                    {recipe.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Why Choose Us Section Component
const WhyChooseUs = () => {
  const features = [
    {
      title: "Passion for Taste",
      description: "We are dedicated to creating dishes with incredible flavor profiles, making every meal a journey for your taste buds.",
      icon: <RestaurantMenuOutlinedIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Super Quality",
      description: "We prioritize the highest quality ingredients ensuring freshness, authenticity, and superior taste in all our prepared foods.",
      icon: <GradeOutlinedIcon sx={{ fontSize: 40 }} />,
      isHighlighted: true // Add this flag for highlighted card
    },
    {
      title: "Healthy and Wholesome",
      description: "Delicious food that's also good for you, prepared with care and nutritional balance in mind.",
      icon: <HealthAndSafetyOutlinedIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Box sx={{
      py: 13,  //------------------------------------------------------

    }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{
          fontWeight: 'bold',
          mb: 6,  //---------------------------------------------------------
          color: '#ff6f00'
        }}>
          Why Choose Us?
        </Typography>

        <Grid container spacing={3} sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
        >
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                '& .feature-card': {
                  backgroundColor: '#ff6f00',
                  '& .feature-icon': { color: 'white' },
                  '& .feature-title': { color: 'white' },
                  '& .feature-desc': { color: 'white' }
                }
              }
            }}
            >
              <Card sx={{

                p: 3,
                borderRadius: '16px',
                border: '3px solid transparent',
                //  border: feature.isHighlighted ? '3px solid #ff6f00' : '3px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                // boxShadow: feature.isHighlighted ? '0 4px 12px rgba(255, 111, 0, 0.2)' : '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                maxWidth: '300px',
                transition: 'transform 0.5s',
                transition: 'all 0.5s ease',
                // transition: 'border-color 0.3s ease',

                backgroundColor: feature.isHighlighted ? '#ff6f00' : 'white',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: '#ff6f00',
                  // boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                  boxShadow: '0 4px 12px rgba(255, 111, 0, 0.9)',
                  // backgroundColor: '#ff6f00'
                }
              }}>
                <Box className="feature-icon" sx={{
                  mb: 2,
                  color: feature.isHighlighted ? 'white' : '#ff6f00'
                }}>
                  {/* {feature.icon} */}

                  {React.cloneElement(feature.icon, {
                    sx: {
                      fontSize: 40
                      // color: feature.isHighlighted ? 'white' : '#ff6f00'
                    }

                  })}
                </Box>
                <Typography className="feature-title" variant="h5" sx={{
                  fontWeight: 600,
                  mb: 2,
                  // color: '#ff6f00'
                  color: feature.isHighlighted ? 'white' : '#ff6f00'
                }}>
                  {feature.title}
                </Typography>
                <Typography className="feature-desc" variant="body1" sx={{
                  //  color: 'black' 
                  color: feature.isHighlighted ? 'white' : 'black'
                }}>
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Fixed Background Section Component
const CallToActionSection = () => {
  return (
    <Box sx={{
      position: 'relative',
      height: '400px',
      backgroundImage: 'url(/images/food-background.jpg)', // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // This creates the parallax effect
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1
      }
    }}>
      <Box sx={{ 
        position: 'relative',
        zIndex: 2,
        maxWidth: '600px',
        px: 3
      }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 'bold',
          mb: 3,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          Learn new recipes, share your own creations, join CookCraft
        </Typography>
        <Link href="/users/sign-up" passHref>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              backgroundColor: '#ff6f00',
              color: 'white',
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              '&:hover': {
                backgroundColor: '#e65100',
                transform: 'translateY(-2px)',
                 boxShadow: '0 4px 12px rgba(255, 111, 0, 0.3)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

// Footer
// Footer
// const Footer = () => {
//   return (
//     <Box 
//       component="footer"
//       sx={{
//         backgroundColor: '#f5f5f5',
//         color: '#333',
//         py: 4,
//         px: 2,
//         textAlign: 'center',
//         fontFamily: 'Arial, sans-serif'
//       }}
//     >
//       <Container maxWidth="md">
//         {/* Contact Us Section */}
//         <Box sx={{ mb: 4 }}>
//           <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
//             Contact Us
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 2 }}>
//             Enter your email to receive relevant messaging tips.
//           </Typography>
//           <Box 
//             component="form"
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: 1,
//               maxWidth: '400px',
//               margin: '0 auto'
//             }}
//           >
//             <TextField
//               variant="outlined"
//               placeholder="Email"
//               size="small"
//               fullWidth
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: '4px',
//                   backgroundColor: 'white'
//                 }
//               }}
//             />
//             <Button 
//               variant="contained"
//               sx={{
//                 backgroundColor: '#ff6f00',
//                 color: 'white',
//                 borderRadius: '4px',
//                 '&:hover': {
//                   backgroundColor: '#e65100'
//                 }
//               }}
//             >
//               Send
//             </Button>
//           </Box>
//         </Box>

//         {/* Main Footer Content */}
//         <Grid container spacing={3} sx={{ mb: 3 }}>
//           {/* Brand Column */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
//               CookCraft
//             </Typography>
//             <Typography variant="body2">
//               Blast with passion for good food
//             </Typography>
//           </Grid>

//           {/* Menu Column */}
//           <Grid item xs={6} sm={3} md={2}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//               Menu
//             </Typography>
//             <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
//               <li><Link href="#" style={{ textDecoration: 'none', color: '#333' }}>Kitchen</Link></li>
//               <li><Link href="#" style={{ textDecoration: 'none', color: '#333' }}>Taste</Link></li>
//               <li><Link href="#" style={{ textDecoration: 'none', color: '#333' }}>Recipes</Link></li>
//             </Box>
//           </Grid>

//           {/* Chefs Column */}
//           <Grid item xs={6} sm={3} md={2}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//               Meet Chefs
//             </Typography>
//             <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
//               <li><Link href="#" style={{ textDecoration: 'none', color: '#333' }}>Alice</Link></li>
//               <li><Link href="#" style={{ textDecoration: 'none', color: '#333' }}>Sweet</Link></li>
//               <li><Link href="#" style={{ textDecoration: 'none', color: '#333' }}>Anna</Link></li>
//             </Box>
//           </Grid>

//           {/* Social Media Column */}
//           <Grid item xs={6} sm={3} md={2}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//               Social Media
//             </Typography>
//             <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
//               <li>
//                 <Link 
//                   href="#" 
//                   style={{ 
//                     textDecoration: 'none', 
//                     color: '#333',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '4px'
//                   }}
//                 >
//                   <Facebook fontSize="small" /> Facebook
//                 </Link>
//               </li>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Copyright */}
//         <Typography variant="body2" sx={{ color: '#666' }}>
//           Copyright&copy;cookcraft2018
//         </Typography>
//       </Container>
//     </Box>
//   );
// };
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ff6f00',
        color: 'white',
        py: 6,
        mt: 12,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h5" component="h3"  sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="white" >
            Enter your email to receive relevant messaging tips.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 3,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email"
              size="small"
              sx={{ 
                width: { xs: '100%', sm: 300 },
                border:'2px solid white',
                backgroundColor: 'white',
                color:'black',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                }
              }}
            />
            <Button 
              variant="outlined" 
              color="white" 
              type="submit"
              sx={{
                borderRadius: '20px',
                px: 3,
                 border:'2px solid white',
                backgroundColor: '#65615C',
                '&:hover': {
                  backgroundColor: '#e65100',
                }
              }}
            >
              Send
            </Button>
          </Box>
        </Box>

        {/* Links Section */}
        <Grid container spacing={4} justifyContent="space-between" sx={{ mb: 4 }}>
          {/* Brand Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
              CookCraft
            </Typography>
            <Typography variant="body2" color="white">
              Blast with passion for good food
            </Typography>
          </Grid>

          {/* Menu Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Menu
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <li>
                <MuiLink 
                variant="body1"
                  href="#" 
                  color="white" 
                  underline="hover" 
                  component={Link}
                  sx={{
                    '&:hover': { color: '#65615C' }
                  }}
                >
                  Kitchen
                </MuiLink>
              </li>
              <li>
                <MuiLink 
                  href="#" 
                  variant="body1"
                  color="white" 
                  underline="hover" 
                  component={Link}
                  sx={{
                    '&:hover': { color: '#65615C' }
                  }}
                >
                  Taste
                </MuiLink>
              </li>
              <li>
                <MuiLink 
                  href="#" 
                  variant="body1"
                  color="white" 
                  underline="hover" 
                  component={Link}
                  sx={{
                    '&:hover': { color: '#65615C' }
                  }}
                >
                  Recipes
                </MuiLink>
              </li>
            </Box>
          </Grid>

          {/* Chefs Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Meet Chefs
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <li>
                <MuiLink 
                  href="#" 
                  variant="body1"
                  color="white" 
                  underline="hover" 
                  component={Link}
                  sx={{
                    '&:hover': { color: '#65615C' }
                  }}
                >
                  Alice
                </MuiLink>
              </li>
              <li>
                <MuiLink 
                  href="#" 
                  variant="body1"
                  color="white" 
                  underline="hover" 
                  component={Link}
                  sx={{
                    '&:hover': { color: '#65615C' }
                  }}
                >
                  Sweet
                </MuiLink>
              </li>
              <li>
                <MuiLink 
                  href="#" 
                  variant="body1"
                  color="white" 
                  underline="hover" 
                  component={Link}
                  sx={{
                    '&:hover': { color: '#65615C' }
                  }}
                >
                  Anna
                </MuiLink>
              </li>
            </Box>
          </Grid>

          {/* Social Media Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                href="#" 
                
                
                component={Link}
                sx={{
                  
                  color: 'white',
                  '&:hover': { 
                    color: '#65615C',
                    
                  }
                }}
              >
                 <Facebook />
                <Typography variant="body1"  sx={{ fontWeight: 'bold' }}>
                Facebook
            </Typography>
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Divider sx={{ my: 2, background:'white' }} />
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="body2" color="white">
            Copyright &copy; cookcraft2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};


// Main Page
export default function HomePage() {

   const recipesRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const scrollToRecipes = () => {
    recipesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Head>
        <title>CookCraft - Your Recipe Companion</title>
        <meta name="description" content="A recipe website built with Next.js and MUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}
      <Navbar scrollToRecipes={scrollToRecipes} scrollToAbout={scrollToAbout} />

      <main>
        <Container>
          <TrendingSlider />
        </Container>

        <TasteOfFood />

        {/* <PopularRecipes /> */}
        <div ref={recipesRef}>
          <PopularRecipes />
        </div>

        
        

        {/* <WhyChooseUs /> */}
        <div ref={aboutRef}>
          <WhyChooseUs />
        </div>

       
        
        <CallToActionSection />

         <Footer />

      </main>
    </>
  );
}
