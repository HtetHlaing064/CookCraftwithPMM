// "use client";
// import { Box } from "@mui/material";

// export default function Home(){
//     return <Box>Recipe Page</Box>
// }

// "use client";
// import {
//   Box,
//   Button,
//   FormControl,
//   Stack,
//   TextField,
//   Typography,
//   InputLabel,
//   FormHelperText,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Gender } from "@prisma/client";
// import axios from "axios";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   father_name: yup.string().required("fatherName is required"),
//   gender: yup
//     .string()
//     .required("Gender is required")
//     .oneOf(["male", "female"], "invalid gender"),
//   age: yup.number().required("Age is required"),
//   dob: yup.date().required("DOB is required"),
//   phone: yup.string().required("Phone is required"),
//   address: yup.string().required("Address is required"),
//   major: yup.string().required("Major is required"),
// });

// const GENDER = [
//   { value: "male", label: "Male" },
//   { value: "female", label: "Female" },
// ];

// export default function CreateStudent() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {},
//   });

//   const onSubmit =async (formData) => {
//     try {
//       console.log("formData", formData);
//       const bodyData = {
//         name: formData.name,
//         father_name: formData.father_name,
//         gender: formData.gender,
//         age: formData.age,
//         dob: dayjs(formData.dob).format("YYYY-MM-DD"),
//         phone: formData.phone,
//         address: formData.address,
//         major: formData.major,
//       };
//       const response = await axios.post("/api/students", bodyData);
//       reset();
//       console.log("Successfully Saved.");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <Box
//       padding={2}
//       component="form"
//       width="60%"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <Stack spacing={2}>
//         <Typography variant="h4">Add a student</Typography>
//         <TextField
//           label="Name"
//           fullWidth
//           {...register("name")}
//           error={!!errors.name}
//           helperText={errors.name?.message}
//         />
//         <TextField
//           label="Age"
//           fullWidth
//           {...register("age")}
//           error={!!errors.age}
//           helperText={errors.age?.message}
//         />
//         <TextField
//           label="Phone"
//           fullWidth
//           {...register("phone")}
//           error={!!errors.phone}
//           helperText={errors.age?.message}
//         />
//         <TextField
//           label="Address"
//           fullWidth
//           {...register("address")}
//           error={!!errors.address}
//           helperText={errors.address?.message}
//         />
//         <TextField
//           label="Father Name"
//           fullWidth
//           {...register("father_name")}
//           error={!!errors.father_name}
//           helperText={errors.father_name?.message}
//         />
//         <TextField
//           label="Major"
//           fullWidth
//           {...register("major")}
//           error={!!errors.major}
//           helperText={errors.major?.message}
//         />
//         <FormControl
//           fullWidth
//           sx={{ mb: 2 }}
//           margin="normal"
//           error={!!errors.gender}
//         >
//           <InputLabel id="gender-label">Gender</InputLabel>
//           <Controller
//             name="gender"
//             control={control}
//             error={!!errors.gender}
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 labelId="gender-label"
//                 label="Gender"
//                 value={field.value || ""}
//               >
//                 {GENDER.map((gender, index) => (
//                   <MenuItem key="index" value={gender.value}>
//                     {gender.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             )}
//           />

//           <FormHelperText>{errors.gender?.message}</FormHelperText>
//         </FormControl>

        
//         <FormControl fullWidth>
//           <Controller
//             name="dob"
//             control={control}
//             error={!!errors.dob}
//             render={({ field, fieldState: { error } }) => (
//               <DatePicker
//                 value={field.value ? dayjs(field.value, "YYYY/MM/DD") : null}
//                 onChange={(e) => field.onChange(e?.format("YYYY/MM/DD"))}
//                 format="DD/MM/YYYY"
//                 label="DOB"
//                 slotProps={{
//                   textField: {
//                     error: !!error,
//                     helperText: error?.message,
//                   },
//                 }}
//               />
//             )}
//           />
//           <FormHelperText>{errors.role?.message}</FormHelperText>
//         </FormControl>
//         <Button type="submit" variant="contained">
//           Save Data
//         </Button>
//       </Stack>
//     </Box>
//   );
// }