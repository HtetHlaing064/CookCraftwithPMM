// "use client";

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Container,
//   TextField,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Checkbox,
//   FormControlLabel,
//   Paper,
// } from "@mui/material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MenuIcon from "@mui/icons-material/Menu";
// import AddIcon from "@mui/icons-material/Add";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";

// const schema = yup.object().shape({
//   user_id: yup
//     .number()
//     .typeError("User ID must be a number")
//     .required("User ID is required"),
//   name: yup.string().required("Recipe name is required"),

//   ingredient: yup
//     .string()
//     .min(10, "Ingredients should be at least 10 characters")
//     .required("Ingredients are required"),

//   instruction: yup
//     .string()
//     .min(10, "Instructions should be at least 10 characters")
//     .required("Instructions are required"),

//   category: yup
//     .string()
//     .oneOf(["breakfast", "lunch", "dinner", "dessert"], "Invalid category")
//     .required("Category is required"),

//   pre_cooking_time: yup.string().required("Pre-cooking time is required"),

//   cooking_time: yup.string().required("Cooking time is required"),

//   image: yup.mixed().required("Image is required"),

//   video_url: yup
//     .string()
//     .url("Must be a valid URL")
//     .required("Video URL is required"),

//   status: yup
//     .string()
//     .oneOf(["pending", "approve", "reject"], "Invalid status"),
// });

// const HomePage = () => {
//   const [formData, setFormData] = useState({
//     user_id: "",
//     name: "",
//     pre_cooking_time: "",
//     cooking_time: "",
//     category: "",
//     ingredient: "",
//     instruction: "",
//     imageFile: null,
//     videoLink: "",
//     agreeTerms: false,
//   });

//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       imageFile: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (
//       !formData.user_id ||
//       !formData.name ||
//       !formData.ingredient ||
//       !formData.instruction ||
//       !formData.agreeTerms
//     ) {
//       setMessage("Please fill in all required fields and agree to the terms.");
//       setMessageType("error");
//       return;
//     }

//     const dataToSend = new FormData();
//     for (const key in formData) {
//       if (key === "imageFile" && formData[key]) {
//         dataToSend.append(key, formData[key]);
//       } else {
//         dataToSend.append(key, formData[key]);
//       }
//     }

//     try {
//       const response = await fetch("http://localhost:3001/submit-recipe", {
//         method: "POST",
//         body: dataToSend,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setMessage(result.message || "Recipe submitted successfully!");
//         setMessageType("success");
//         setFormData({
//           user_id: "",
//           name: "",
//           pre_cooking_time: "",
//           cooking_time: "",
//           category: "",
//           ingredient: "",
//           instruction: "",
//           imageFile: null,
//           videoLink: "",
//           agreeTerms: false,
//         });
//         document.getElementById("imageFile").value = "";
//       } else {
//         const errorData = await response.json();
//         setMessage(errorData.message || "Failed to submit recipe.");
//         setMessageType("error");
//       }
//     } catch (error) {
//       setMessage("An error occurred while submitting the form.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <Box sx={{ fontFamily: "system-ui, sans-serif" }}>
//       {/* Header/Navbar */}
//       <AppBar position="static" color="default" sx={{ boxShadow: 2 }}>
//         <Toolbar
//           sx={{
//             justifyContent: "space-between",
//             maxWidth: "lg",
//             mx: "auto",
//             width: "100%",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{ fontWeight: "bold", color: "#fb923c" }}
//           >
//             CookCraft
//           </Typography>

//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             <Button
//               color="inherit"
//               sx={{
//                 "&:hover": {
//                   bgcolor: "#fb9230",
//                   color: "#fff",
//                   transform: "scale(1.02)",
//                 },
//               }}
//             >
//               Home
//             </Button>
//             <Button
//               color="inherit"
//               sx={{
//                 "&:hover": {
//                   bgcolor: "#fb9230",
//                   color: "#fff",
//                   transform: "scale(1.02)",
//                 },
//               }}
//             >
//               Recipes
//             </Button>
//             <Button
//               color="inherit"
//               sx={{
//                 "&:hover": {
//                   bgcolor: "#fb9230",
//                   color: "#fff",
//                   transform: "scale(1.02)",
//                 },
//               }}
//             >
//               About
//             </Button>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <AccountCircleIcon sx={{ color: "gray", fontSize: 28 }} />
//             <MenuIcon sx={{ color: "gray", fontSize: 28 }} />
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Banner Section */}
//       <Box
//         sx={{
//           backgroundImage: `url("/banner1.avif")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           color: "white",
//           py: { xs: 6, md: 3 },
//           px: 2,
//           position: "relative",
//           borderRadius: 3,
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 4,
//           }}
//         >
//           {/* Left Text Section */}
//           <Box sx={{ flex: 1 }}>
//             <Typography
//               variant="h5"
//               component="h3"
//               sx={{
//                 fontWeight: "600",
//                 fontSize: { xs: "2rem", md: "2rem" },
//                 lineHeight: 1.5,
//               }}
//             >
//               Share Your
//               <Box
//                 component="span"
//                 sx={{
//                   display: "block",
//                   pl: 0,
//                   pr: 0,
//                   py: 0.5,
//                   color: "#fb923c",
//                   borderRadius: 2,
//                   fontWeight: "800",
//                   fontSize: { xs: "3rem", md: "3.5rem" },
//                 }}
//               >
//                 Favorite Recipe
//               </Box>
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{ mt: 0, maxWidth: 500, opacity: 0.9, fontWeight: "blod" }}
//             >
//               Submit your delicious dish and inspire food lovers around the
//               world.
//             </Typography>

//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 mt: 4,
//                 backgroundColor: "white",
//                 color: "#fb923c",
//                 borderRadius: "50px",
//                 px: 4,
//                 py: 1.5,
//                 fontWeight: "bold",
//                 textTransform: "none",
//                 fontSize: "1rem",
//                 boxShadow: 3,
//                 "&:hover": {
//                   backgroundColor: "#fb9230",
//                   color: "#fff",
//                 },
//               }}
//             >
//               Get Started
//             </Button>
//           </Box>

//           {/* Right Image Section */}
//           <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
//             <Box
//               sx={{
//                 borderRadius: 4,
//                 boxShadow: 5,
//                 width: "100%",
//                 maxWidth: 420,
//                 objectFit: "cover",
//               }}
//             />
//           </Box>
//         </Container>
//       </Box>

//       {/* Main Form Section */}
//       <Container maxWidth="md" sx={{ py: 6 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Welcome to Our Recipe Submission Page! 🍳
//         </Typography>

//         <Paper
//           component="form"
//           onSubmit={handleSubmit}
//           elevation={4}
//           sx={{
//             p: 4,
//             borderRadius: 3,
//             boxShadow: 6,
//             bgcolor: "white",
//           }}
//         >
//           {message && (
//             <Box
//               sx={{
//                 mb: 3,
//                 p: 2,
//                 borderRadius: 2,
//                 textAlign: "center",
//                 bgcolor:
//                   messageType === "success" ? "success.light" : "error.light",
//                 color:
//                   messageType === "success"
//                     ? "success.contrastText"
//                     : "error.contrastText",
//               }}
//             >
//               {message}
//             </Box>
//           )}

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="Recipe By" // Changed label to "Recipe By
//               variant="outlined"
//               required
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="Recipe Title"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               variant="outlined"
//               required
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="Pre Cooking Time (minutes)"
//               name="pre_cooking_time"
//               value={formData.pre_cooking_time}
//               onChange={handleChange}
//               variant="outlined"
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="Cooking Time (minutes)"
//               name="cooking_time"
//               value={formData.cooking_time}
//               onChange={handleChange}
//               variant="outlined"
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <FormControl fullWidth variant="outlined">
//               <InputLabel>Category</InputLabel>
//               <Select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 label="Category"
//                 sx={{ borderRadius: 2 }}
//               >
//                 <MenuItem value="Appetizer">Appetizer</MenuItem>
//                 <MenuItem value="Main Course">Main Course</MenuItem>
//                 <MenuItem value="Dessert">Dessert</MenuItem>
//                 <MenuItem value="Breakfast">Breakfast</MenuItem>
//                 <MenuItem value="Beverage">Beverage</MenuItem>
//                 <MenuItem value="Snack">Snack</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="Ingredient"
//               name="ingredient"
//               value={formData.ingredient}
//               onChange={handleChange}
//               multiline
//               rows={6}
//               variant="outlined"
//               required
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="Instruction"
//               name="instruction"
//               value={formData.instruction}
//               onChange={handleChange}
//               multiline
//               rows={6}
//               variant="outlined"
//               required
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <Typography gutterBottom>Upload Image</Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <input
//                 type="file"
//                 id="imageFile"
//                 name="imageFile"
//                 onChange={handleFileChange}
//                 style={{ display: "none" }}
//               />
//               <label htmlFor="imageFile">
//                 <Button
//                   variant="outlined"
//                   component="span"
//                   sx={{ borderRadius: 2 }}
//                 >
//                   Choose File
//                 </Button>
//               </label>
//               <Typography variant="body2" sx={{ ml: 2 }}>
//                 {formData.imageFile?.name || "No file chosen"}
//               </Typography>
//             </Box>
//           </Box>

//           <Box mb={3}>
//             <TextField
//               fullWidth
//               label="YouTube Video Link"
//               name="videoLink"
//               type="url"
//               value={formData.videoLink}
//               onChange={handleChange}
//               variant="outlined"
//               sx={{ borderRadius: 2 }}
//             />
//           </Box>

//           <Box mb={3}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.agreeTerms}
//                   onChange={handleChange}
//                   name="agreeTerms"
//                   required
//                 />
//               }
//               label="I agree to the terms and conditions"
//             />
//           </Box>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               bgcolor: "#fb923c",
//               color: "white",
//               py: 1.5,
//               borderRadius: "0.5rem",
//               fontWeight: "bold",
//               fontSize: "1.1rem",
//               boxShadow: 4,
//               "&:hover": {
//                 bgcolor: "#fecdb0",
//                 transform: "scale(1.02)",
//               },
//               transition: "all 0.2s ease-in-out",
//             }}
//           >
//             Submit Recipe
//           </Button>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default HomePage;

"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  FormHelperText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const CATEGORY = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "dessert", label: "Dessert" },
];

const schema = yup.object().shape({
  user_id: yup
    .number()
    .typeError("User ID must be a number")
    .required("User ID is required"),
  name: yup.string().required("Recipe name is required"),

  ingredient: yup
    .string()
    .min(10, "Ingredients should be at least 10 characters")
    .required("Ingredients are required"),

  instruction: yup
    .string()
    .min(10, "Instructions should be at least 10 characters")
    .required("Instructions are required"),

  category: yup
    .string()
    .oneOf(["breakfast", "lunch", "dinner", "dessert"], "Invalid category")
    .required("Category is required"),

  pre_cooking_time: yup.string().required("Pre-cooking time is required"),

  cooking_time: yup.string().required("Cooking time is required"),

  image: yup.mixed().required("Image is required"),

  video_url: yup
    .string()
    .url("Must be a valid URL")
    .required("Video URL is required"),

  status: yup
    .string()
    .oneOf(["pending", "approve", "reject"], "Invalid status"),
});

export default function SubmitRecipePage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       const form = new FormData();
//       Object.keys(data).forEach((key) => {
//         form.append(key, data[key]);
//       });
//       if (imageFile) form.append("imageFile", imageFile);

//       await axios.post("/api/recipes", form);
//       setMessage("Recipe submitted successfully!");
//       setMessageType("success");
//       reset();
//       setImageFile(null);
//     } catch (error) {
//       setMessage("Failed to submit recipe.");
//       setMessageType("error");
//     }
//   };

//   const onSubmit =async (formData) => {
//     try {
//       console.log("formData", formData);
//       const bodyData = {
//         user_id: formData.name,
//         name: formData.father_name,
//         ingredient: formData.ingredient,
//         instruction: formData.instruction,
//         category:formData.category ,
//         pre_cooking_time: formData.pre_cooking_time,
//         cooking_time: formData.cooking_time,
//         image: formData.image,
//         video_url: formData.video_url,
//       };
//       console.log(bodyData);
//       const response = await axios.post("/api/recipes", bodyData);
//       reset();
//       console.log("Successfully Saved.");
//     } catch (error) {
//       console.error(error);
//     }
//   };

const onSubmit = async (formData) => {
  try {
    // Step 1: Get user_id from backend using username
    const userResponse = await axios.get(`/api/users/by-name?name=${formData.username}`);
    const user_id = userResponse.data.id;

    // Step 2: Prepare recipe data with user_id
    const recipeData = {
      user_id,
      name: formData.name,
      ingredient: formData.ingredient,
      instruction: formData.instruction,
      category: formData.category,
      pre_cooking_time: formData.pre_cooking_time,
      cooking_time: formData.cooking_time,
      image: formData.image,
      video_url: formData.video_url,
    };

    // Step 3: Submit recipe
    await axios.post("/api/recipes", recipeData);
    console.log("Recipe saved successfully!");
    reset();
  } catch (error) {
    console.error("Error saving recipe:", error);
  }
};


  return (
    <Box sx={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Navbar */}
      <AppBar position="static" color="default" sx={{ boxShadow: 2 }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "lg",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fb923c" }}
          >
            CookCraft
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {["Home", "Recipes", "About"].map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  "&:hover": {
                    bgcolor: "#fb923c",
                    color: "#fff",
                    transform: "scale(1.02)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AccountCircleIcon sx={{ color: "gray", fontSize: 28 }} />
            <MenuIcon sx={{ color: "gray", fontSize: 28 }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Banner */}
      <Box
        sx={{
          backgroundImage: `url("/banner1.avif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          py: { xs: 6, md: 8 },
          px: 2,
          position: "relative",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" fontWeight="bold">
              Share Your{" "}
              <Box component="span" sx={{ color: "#fde047" }}>
                Favorite Recipe
              </Box>
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
              Submit your delicious dish and inspire food lovers around the
              world.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: "white",
                color: "#fb923c",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Container>
      </Box>

      {/* Form */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          elevation={4}
          sx={{ p: 4, borderRadius: 3, boxShadow: 6, bgcolor: "white" }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Submit a Recipe 🍽️
          </Typography>

          {message && (
            <Box
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                bgcolor:
                  messageType === "success" ? "success.light" : "error.light",
                color:
                  messageType === "success"
                    ? "success.contrastText"
                    : "error.contrastText",
              }}
            >
              {message}
            </Box>
          )}

          <Stack spacing={3}>
            <TextField
              label="Recipe By"
              fullWidth
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="Recipe Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Pre Cooking Time (minutes)"
              fullWidth
              {...register("pre_cooking_time")}
              error={!!errors.pre_cooking_time}
              helperText={errors.pre_cooking_time?.message}
            />

            <TextField
              label="Cooking Time (minutes)"
              fullWidth
              {...register("cooking_time")}
              error={!!errors.cooking_time}
              helperText={errors.cooking_time?.message}
            />

            {/* <FormControl fullWidth error={!!errors.category}>
              <InputLabel>Category</InputLabel>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select {...field} label="Category">
                    {CATEGORY_OPTIONS.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.category?.message}</FormHelperText>
            </FormControl> */}

            <FormControl
              fullWidth
              sx={{ mb: 2 }}
              margin="normal"
              error={!!errors.category}
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Controller
                name="category"
                control={control}
                error={!!errors.category}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="category-label"
                    label="Category"
                    value={field.value || ""}
                  >
                    {CATEGORY.map((category, index) => (
                      <MenuItem key="index" value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              <FormHelperText>{errors.category?.message}</FormHelperText>
            </FormControl>

            <TextField
              label="Ingredients"
              multiline
              rows={5}
              fullWidth
              {...register("ingredient")}
              error={!!errors.ingredient}
              helperText={errors.ingredient?.message}
            />

            <TextField
              label="Instructions"
              multiline
              rows={5}
              fullWidth
              {...register("instruction")}
              error={!!errors.instruction}
              helperText={errors.instruction?.message}
            />

            <Button variant="outlined" component="label">
              Upload Image
              <input
                type="file"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setImageFile(file);
                }}
              />
            </Button>

            <TextField
          label="Video Link (optional)"
          fullWidth
          {...register("video_url")}
          error={!!errors.video_url}
          helperText={errors.video_url?.message}
        />

            {/* <FormControlLabel
              control={
                <Checkbox
                  {...register("agreeTerms")}
                  color="primary"
                  checked={control._formValues.agreeTerms || false}
                />
              }
              label="I agree to the terms and conditions"
            />
            {errors.agreeTerms && (
              <FormHelperText error>{errors.agreeTerms.message}</FormHelperText>
            )} */}

            <Button type="submit" variant="contained" size="large">
              Submit Recipe
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
