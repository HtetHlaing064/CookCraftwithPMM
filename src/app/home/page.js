// "use client";
// import { Box } from "@mui/material";

// export default function Home(){
//     return <Box>Home Page</Box>
// }


// app/page.js

// 'use client';

// import * as React from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   Container, 
//   Box, 
//   Grid, 
//   TextField, 
//   InputAdornment, 
//   Card, 
//   CardContent, 
//   CardMedia,
//   Avatar,
//   IconButton,
//   Stack,
// } from '@mui/material';
// import { Search as SearchIcon, NotificationsNone as NotificationsIcon, Star as StarIcon } from '@mui/icons-material';

// // Sample data for recipe cards
// const recipeData = [
//   {
//     title: 'Burmese Noodle Salad',
//     author: 'By Forecasting Caster',
//     image: 'https://img.freepik.com/premium-photo/detailed-illustration-cooking-wallpaper_1016086-9679.jpg?w=2000', // Placeholder image
//     rating: 4.5,
//     reviews: 234
//   },
//   {
//     title: 'Kalkan Lezzetleri (Seafood) Çorbası',
//     author: 'By Ahmet Selim',
//     image: 'https://tiffanybliss.com/wp-content/uploads/2023/12/A-Vibrant-Appetizer-Food-Spread-for-a-Potluck-750x429.png', // Placeholder image
//     rating: 4.8,
//     reviews: 412
//   },
//   {
//     title: 'Burmese Tea Leaf Salad',
//     author: 'By Ma Hla',
//     image: 'https://www.tastingtable.com/img/gallery/12-tricks-restaurants-use-to-make-you-spend-more/featuring-small-bites-that-add-up-to-large-profits-1708718710.jpg', // Placeholder image
//     rating: 4.9,
//     reviews: 580
//   },
// ];

// const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

// export default function CookCraftHomePage() {
//   const [activeCategory, setActiveCategory] = React.useState('Breakfast');
  
//   const orangeColor = '#FFA245';

//   return (
//     <Box sx={{ backgroundColor: '#F9F9F9', minHeight: '100vh' }}>
//       <Container maxWidth="lg">
//         {/* Header / Navigation */}
//         <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', pt: 2 }}>
//           <Toolbar>
//             <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
//               CookCraft
//             </Typography>
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
//               <Button sx={{ color: 'black', fontWeight: 'bold' }}>Home</Button>
//               <Button sx={{ color: 'black', fontWeight: 'bold' }}>Recipes</Button>
//               <Button sx={{ color: 'black', fontWeight: 'bold' }}>About</Button>
//               <Button variant="contained" sx={{ backgroundColor: orangeColor, '&:hover': { backgroundColor: '#e69138' }, borderRadius: '20px' }}>
//                 + Create
//               </Button>
//               <IconButton>
//                 <NotificationsIcon sx={{ color: 'black' }} />
//               </IconButton>
//               <Avatar sx={{ bgcolor: orangeColor }}>K</Avatar>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* Hero Section */}
//         <Box sx={{ my: 4, position: 'relative', borderRadius: 2, overflow: 'hidden', height: '300px' }}>
//             <CardMedia
//               component="img"
//               image="https://img.freepik.com/premium-photo/detailed-illustration-gourmet-organic-wallpaper_1016086-10501.jpg?w=2000" // Placeholder image for hero
//               alt="Spicy Salsa with Mangos"
//               sx={{
//                   position: 'absolute',
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   zIndex: 1
//               }}
//             />
//             <Box sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
//                 zIndex: 2
//             }}/>
//             <Box sx={{ position: 'relative', zIndex: 3, p: 4, color: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                 <Typography variant="body2" sx={{ color: '#E0E0E0' }}>Trending now</Typography>
//                 <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', my: 1, maxWidth: '50%' }}>
//                     Kevin's Famous Spicy Salsa with Mangos
//                 </Typography>
//                 <Typography variant="subtitle1">By Kevin Josh</Typography>
//             </Box>
//         </Box>

//         {/* Search Section */}
//         <Box sx={{ my: 5, textAlign: 'center' }}>
//           <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
//             What to Cook?
//           </Typography>
//           <TextField
//             variant="outlined"
//             placeholder="Search..."
//             sx={{
//               width: '50%',
//               '& .MuiOutlinedInput-root': {
//                 borderRadius: '30px',
//                 backgroundColor: 'white',
//                 borderColor: orangeColor,
//                 '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                     borderColor: orangeColor,
//                 },
//                 '& .MuiOutlinedInput-notchedOutline': {
//                     borderColor: orangeColor,
//                     borderWidth: '1.5px',
//                 }
//               },
//             }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>

//         {/* Categories and Recipes */}
//         <Grid container spacing={4}>
//           {/* Categories */}
//           <Grid item xs={12} md={2.5}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
//               Categories
//             </Typography>
//             <Stack spacing={1}>
//                 {categories.map((category) => (
//                     <Button 
//                         key={category} 
//                         onClick={() => setActiveCategory(category)}
//                         sx={{ 
//                             justifyContent: 'flex-start',
//                             backgroundColor: activeCategory === category ? orangeColor : 'transparent',
//                             color: activeCategory === category ? 'white' : 'black',
//                             '&:hover': {
//                                 backgroundColor: activeCategory === category ? '#e69138' : '#f0f0f0'
//                             }
//                         }}
//                     >
//                         {category}
//                     </Button>
//                 ))}
//             </Stack>
//           </Grid>

//           {/* Recipe Cards */}
//           <Grid item xs={12} md={9.5}>
//             <Grid container spacing={3}>
//               {recipeData.map((recipe, index) => (
//                 <Grid item key={index} xs={12} sm={6} md={4}>
//                   <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image={recipe.image}
//                       alt={recipe.title}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', minHeight: '64px' }}>
//                         {recipe.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {recipe.author}
//                       </Typography>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
//                         <StarIcon sx={{ color: '#FFB400', fontSize: 18, mr: 0.5 }} />
//                         <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 0.5 }}>{recipe.rating}</Typography>
//                         <Typography variant="body2" color="text.secondary">({recipe.reviews})</Typography>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

import * as React from 'react';

import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Grid, 
  TextField, 
  InputAdornment, 
  Card, 
  CardContent, 
  CardMedia,
  Avatar,
  IconButton,
  Stack,
} from '@mui/material';

import Link from 'next/link'; // Next.js ရဲ့ Link component

// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
        {/* Toolbar space-around  */}
        <Toolbar sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
          
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ color: '#E58A2F', fontWeight: 'bold' }}>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
              COOKCRAFT
            </Link>
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Link href="/" passHref>
              <Button sx={{ color: 'black', mx: 1, fontWeight: 'bold' }}>Home</Button>
            </Link>
            <Link href="/recipes" passHref>
              <Button sx={{ color: 'black',  mx: 1 }}>Recipes</Button>
            </Link>
            <Link href="/about" passHref>
              <Button sx={{ color: 'black',  mx: 1 }}>About</Button> 
              {/* textTransform: 'none' ဆိုစာလုံး အသေးရေးလို့ရ */}
            </Link>
          </Box>
          
          {/*  Action Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Link href="/create" passHref>
                <Button variant="contained" startIcon={<Typography>+</Typography>} sx={{ 
                    backgroundColor: '#ff6f61', 
                    borderRadius: '20px',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#e65a50',
                    }
                }}>
                Create
                </Button>
            </Link>
            
            <Link href="/notifications" passHref>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
            </Link>
            
            <Link href="/profile" passHref style={{ textDecoration: 'none' }}>
                <Avatar sx={{ bgcolor: '#ff8a65', cursor: 'pointer' }}>K</Avatar>
            </Link>

            <IconButton color="inherit">
              <MoreVertIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}