// // app/page.js


// "use client";

// import Link from 'next/link'; // Next.js ရဲ့ Link component

// import React from 'react';
// import Head from 'next/head';

// // MUI Components
// import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, Grid, Card } from '@mui/material';




// // TasteOfFood
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
// import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
// import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
// import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
// import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';


// // React Slick Carousel
// import Slider from 'react-slick';



// // Navbar Component

// const Navbar = () => {
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: 'white',
//         color: 'black',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
//         <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
//           COOKCRAFT
//         </Typography>
//         <Box sx={{ display: { md: 'flex' }, gap: 2 }}>
//           <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none' }} >Home</Button>
//           <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none' }} >Recipes</Button>
//           <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none' }} >About</Button>
//           <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none', color: '#ff7b00' }} >Contact us</Button>
//         </Box>


//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

//           <Link href="/users/sign-up" passHref>
//             <Button variant="contained" sx={{
//               textTransform: 'none',
//               backgroundColor: '#ff6f00',
//               color: 'white',
//               borderRadius: '20px',
//               '&:hover': {
//                 backgroundColor: '#e65100'
//               }
//             }}>
//               Sign up
//             </Button>
//           </Link>

//           <Link href="/users/sign-in" passHref>
//             <Button variant="outlined" sx={{
//               textTransform: 'none',
//               borderColor: '#ff7b00',
//               color: '#ff6f00',
//               borderRadius: '20px',
//               '&:hover': {
//                 color: 'white',
//                 backgroundColor: '#ff6f00'
//               }
//             }}>
//               Log in
//             </Button>
//           </Link>

//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };



// // Trending Slider Component

// const trendingItems = [
//   { title: "Kevin's Famous Spicy Salsa with Mangos", author: "By Kevin Josh", image: "/images/food1.jpg" },
//   { title: "Classic Italian Seafood Pasta", author: "By Maria Rossi", image: "/images/food2.jpg" },
//   { title: "Grilled Summer Vegetable Skewers", author: "By David Chen", image: "/images/food3.jpg" }
// ];

// // const NextArrow = ({ onClick }) => (
// //   <IconButton onClick={onClick} variant="outlined" sx={{ position: 'absolute', top: '85%', right: 70, transform: 'translateY(-50%)', zIndex: 2,   borderColor: '#ff7b00', color:'#ff7b00', '&:hover': { backgroundColor: '#f0f0f0' } }}>
// //     <ArrowForwardIosIcon />
// //   </IconButton>
// // );

// // NextArrow.js
// const NextArrow = ({ onClick }) => (
//   <Button
//     onClick={onClick}
//     variant="outlined"
//     sx={{
//       position: 'absolute',
//       top: '85%',
//       right: 70,
//       transform: 'translateY(-50%)',
//       zIndex: 2,
//       textTransform: 'none',
//       borderColor: '#ff7b00',
//       color: 'white',
//       borderRadius: '50px',
//       px: 3,
//       '&:hover': {
//         backgroundColor: '#e65100',
//       },
//     }}
//   >
//     <ArrowForwardIosIcon />
//   </Button>
// );


// // const PrevArrow = ({ onClick }) => (
// //   <IconButton onClick={onClick}  sx={{ position: 'absolute', top: '85%', right: 150, transform: 'translateY(-50%)', zIndex: 2, color:'#ff7b00', borderColor: '#ff7b00', borderRadius: '20px', '&:hover': { backgroundColor: '#ff7b00', color: 'white' } }}>
// //     <ArrowBackIosNewIcon />
// //   </IconButton>
// // );

// const PrevArrow = ({ onClick }) => (
//   <Button
//     onClick={onClick}
//     variant="outlined"
//     sx={{
//       position: 'absolute',
//       top: '85%',
//       right: 150,
//       transform: 'translateY(-50%)',
//       zIndex: 2,
//       textTransform: 'none',
//       borderColor: '#ff7b00',
//       color: 'white',
//       borderRadius: '50px',
//       px: 3,
//       '&:hover': {
//         backgroundColor: '#e65100',
//       },
//     }}
//   >
//     <ArrowBackIosNewIcon />
//   </Button>
// );

// const TrendingSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   return (
//     <Box sx={{ padding: { xs: 2, md: 4 }, position: 'relative' }}>
//       <Slider {...settings}>
//         {trendingItems.map((item, index) => (
//           <Box key={index} sx={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
//             <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: { xs: '200px', md: '250px', overflow: 'hidden', borderRadius: '20px', }, objectFit: 'cover', display: 'block' }} />

//             {/* Left Orange Gradient Overlay */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 left: 0,
//                 top: 0,
//                 bottom: 0,
//                 width: { xs: '30%', md: '25%' },
//                 background: 'linear-gradient(to right, rgba(255,111,0,0.7), transparent)',
//                 zIndex: 1,
//               }}
//             />

//             {/* Right Orange Gradient Overlay */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 right: 0,
//                 top: 0,
//                 bottom: 0,
//                 width: { xs: '30%', md: '25%' },
//                 background: 'linear-gradient(to left, rgba(255,111,0,0.7), transparent)',
//                 zIndex: 1,
//               }}
//             />
//             {/* text content */}
//             <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: { xs: 2, md: 6 }, zIndex: 2, borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>

//               <Typography variant="button" sx={{ color: 'White' }}>Trending now</Typography>
//               <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'white', marginY: 2, fontSize: { xs: '2rem', md: '3rem' } }}>{item.title}</Typography>
//               <Typography variant="subtitle1" sx={{ color: 'white' }} >{item.author}</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// // Taste of Food Section (ဒီအပိုင်းအသစ်ထည့်သွင်းထားပါသည်)
// //================================================================

// // အဆင့် ၁: Card တစ်ခုချင်းကို ပြန်သုံးလို့ရအောင် Reusable Component ဆောက်ခြင်း
// const FoodCategoryCard = ({ icon, title, description }) => {
//   return (
//     <Card sx={{ height: '100%', p: 2, borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//         <Box sx={{ mr: 2, display: 'flex' }}>{icon}</Box>
//         <Box>
//           <Typography variant="h6" sx={{ fontWeight: '600' }}>{title}</Typography>
//           <Typography variant="body2" color="text.secondary">{description}</Typography>
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// // အဆင့် ၂: Section တစ်ခုလုံးအတွက် Data နဲ့ Layout ကိုတည်ဆောက်ခြင်း
// const TasteOfFood = () => {
//   const foodItems = [
//     { icon: <RestaurantMenuOutlinedIcon sx={{ fontSize: 40, color: 'text.secondary' }} />, title: 'Breakfast', description: 'You can choose from a variety of healthy breakfast menus that provide the energy you need for the day.' },
//     { icon: <LunchDiningOutlinedIcon sx={{ fontSize: 40, color: 'text.secondary' }} />, title: 'Lunch', description: 'You can easily prepare quick and delicious lunch dishes for when you\'re busy.' },
//     { icon: <DinnerDiningOutlinedIcon sx={{ fontSize: 40, color: 'text.secondary' }} />, title: 'Dinner', description: 'We have prepared a wide variety of dinner dishes for you to leisurely enjoy with your family or loved ones.' },
//     { icon: <GrassOutlinedIcon sx={{ fontSize: 40, color: 'text.secondary' }} />, title: 'Salad', description: 'You can choose from a variety of healthy and delicious salads, combining fresh vegetables, meats, proteins.' },
//     { icon: <CakeOutlinedIcon sx={{ fontSize: 40, color: 'text.secondary' }} />, title: 'Dessert', description: 'You have created a variety of delicious and enticing desserts for you to enjoy after a meal or as a sweet.' }
//   ];

//   return (
//     <Box sx={{ py: 8, backgroundColor: 'red' }}>
//       <Container>
//         <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
//           Taste of Food
//         </Typography>
//         <Grid container spacing={3} justifyContent="center">
//           {foodItems.map((item, index) => (
//             <Grid item key={index} xs={12} sm={4} md={4} lg={4}>
//               <FoodCategoryCard icon={item.icon} title={item.title} description={item.description} />
//             </Grid>
//           ))}
//         </Grid>

//       </Container>
//     </Box>
//   );
// };



// //================================================================
// // Main Page Component
// //================================================================

// export default function HomePage() {
//   return (
//     <>
//       <Head>
//         <title>CookCraft - Your Recipe Companion</title>
//         <meta name="description" content="A recipe website built with Next.js and MUI" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />




//       <main>
//         <Container >
//           <TrendingSlider />
//         </Container>

//         {/* Taste of Food Section  */}
//         <Container maxWidth="lg">
//         <TasteOfFood />
//         </Container>


//         {/* Scroll */}
//         <Container>
//           <Box sx={{ my: 4 }}>
//             <Typography variant="h4" gutterBottom>More Recipes</Typography>
//             <Typography>
//               Scroll down to see the sticky navigation bar in action. This section is just a placeholder to make the page scrollable.
//             </Typography>
//           </Box>
//           <Box sx={{ height: '150vh' }} />
//         </Container>
//       </main>
//     </>
//   );
// }



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
  Card
} from '@mui/material';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';

// React Slick Carousel
import Slider from 'react-slick';

// Navbar
const Navbar = () => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
        COOKCRAFT
      </Typography>
      <Box sx={{ display: { md: 'flex' }, gap: 2 }}>
        <Button color="inherit" component={Link} href="#">Home</Button>
        <Button color="inherit" component={Link} href="#">Recipes</Button>
        <Button color="inherit" component={Link} href="#">About</Button>
        <Button color="inherit" component={Link} href="#" sx={{ color: '#ff7b00' }}>Contact us</Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Link href="/users/sign-up" passHref>
          <Button variant="contained" sx={{
            backgroundColor: '#ff6f00',
            color: 'white',
            borderRadius: '20px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#e65100' }
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
            '&:hover': { backgroundColor: '#ff6f00', color: 'white' }
          }}>
            Log in
          </Button>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }}>
      <Slider {...settings}>
        {trendingItems.map((item, index) => (
          <Box key={index} sx={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{ width: '100%', height: { xs: '200px', md: '250px' }, objectFit: 'cover' }}
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
  <Card sx={{ height: '100%', p: 2, borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Box sx={{ mr: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: '600' }}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
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
    <Box sx={{ py: 8, backgroundColor: '#f7f9fc' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
          Taste of Food
        </Typography>
        <Grid container spacing={3}>
          {foodItems.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <FoodCategoryCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Main Page
export default function HomePage() {
  return (
    <>
      <Head>
        <title>CookCraft - Your Recipe Companion</title>
        <meta name="description" content="A recipe website built with Next.js and MUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Container>
          <TrendingSlider />
        </Container>
        <TasteOfFood />
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>More Recipes</Typography>
            <Typography>Scroll down to see the sticky navigation bar in action.</Typography>
          </Box>
          <Box sx={{ height: '150vh' }} />
        </Container>
      </main>
    </>
  );
}
