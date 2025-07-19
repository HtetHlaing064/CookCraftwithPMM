import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma"; 
import mysql from 'mysql2/promise';//pisma ချိတ်

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

  image_url: yup.mixed().required("Image is required"),

  video_url: yup
    .string()
    .url("Must be a valid URL")
    .required("Video URL is required"),

  status: yup
    .string()
    .oneOf(["pending", "approve", "reject"], "Invalid status"),
});

const recipeData = [
  {
    id:1,
    name: "Pancakes", 
    ingredient: "Flour, Milk, Eggs", 
    instruction: "Mix and cook", 
    category: "breakfast",
     preCookingTime: "10 min", 
     cookingTime: "15 min", 
     imageUrl: "uploads/pancakes.jpg",
     videoUrl: "https://youtube.com/example", 
     status: "pending" 
  },
  
  {
    id:2,
    name: "Chicken", 
    ingredient: "chicken , Potato,", 
    instruction: "Mix and cook", 
    category: "lunch",
     preCookingTime: "20 min", 
     cookingTime: "45 min", 
     imageUrl: "uploads/pancakes.jpg",
     videoUrl: "https://youtube.com/example", 
     status: "pending" 
  }
];

 //Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306, // Default MySQL port
};

//get favourites list api
export async function GET() {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes);
}

// export async function GET() {
//     return NextResponse.json({ recipeData }
//     );
// }

// export async function POST(req) {
//     const body = await req.json();
//     // console.log(body)
//     return NextResponse.json({ message: "Student List is successfully created. ", bodyData: body }
//     );
// }

//reate Recipe
// export async function POST(request) {
//   let data; // Declare data outside try-catch to ensure its scope
//   try {
//     data = await request.json(); // Attempt to parse the request body
//     console.log('Parsed request data:', data); // Log the parsed data

//     // Destructure only if data is successfully parsed
//     const { name, category, pre_cooking_time, cooking_time, ingredient, instruction, image_url } = data;

//     // Basic validation (keep this)
//     if (!name || !ingredient || !instruction) {
//       console.error('Validation Error: Missing required fields');
//       return NextResponse.json({ message: 'Missing required fields: name, ingredient, and instruction are required.' }, { status: 400 });
//     }
  

//       let connection;
//     try {
//       connection = await mysql.createConnection(dbConfig);
//       console.log('MySQL connection established.');

//       const [result] = await connection.execute(
//         `INSERT INTO recipes (name, category, pre_cooking_time, cooking_time, ingredient, instruction, image_url)
//          VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
//         [name, category, pre_cooking_time, cooking_time, ingredient, instruction, imageUrl]
//       );

//       console.log('Recipe saved successfully, ID:', result.insertId);
//       return NextResponse.json({ message: 'Recipe saved successfully!', recipeId: result.insertId }, { status: 201 });

//     } catch (dbError) {
//       console.error('Error saving recipe to MySQL:', dbError);
//       return NextResponse.json({ message: 'Failed to save recipe.', error: dbError.message }, { status: 500 });
//     } finally {
//       if (connection) {
//         await connection.end();
//         console.log('MySQL connection closed.');
//       }
//     }
//   } catch (jsonError) {
//     console.error('Error parsing request JSON:', jsonError);
//     // If request.json() fails, 'data' would indeed not be defined later on.
//     // Return an error response here.
//     return NextResponse.json({ message: 'Invalid JSON body provided.', error: jsonError.message }, { status: 400 });
//   }
// }

export async function POST(request) {
    let rawData;
    try {
        rawData = await request.json();
        console.log('Received raw data:', rawData);

        const validatedData = await schema.validate(rawData, { abortEarly: false });
        console.log('Validated data:', validatedData);

        const {
            user_id,
            name,
            category,
            pre_cooking_time,
            cooking_time,
            ingredient,
            instruction,
            image_url,
            video_url,
            status,
        } = validatedData;

        let connection;
        try {
            connection = await mysql.createConnection(dbConfig);
            console.log('MySQL connection established.');

            const [result] = await connection.execute(
                `INSERT INTO recipes (
                    user_id, name, category, pre_cooking_time, cooking_time,
                    ingredient, instruction, image_url, video_url, status, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, // <--- ဒီမှာ မေးခွန်းအမှတ်အသား (11) ခု ဖြစ်အောင် '?' တစ်ခု ထပ်ထည့်လိုက်ပါ
                [
                    user_id, name, category, pre_cooking_time, cooking_time,
                    ingredient, instruction, image_url, video_url, status,
                    new Date() // <--- ဒီမှာ JavaScript ရဲ့ `new Date()` ကို ထည့်ပေးလိုက်ပါ။ ဒါဆို တန်ဖိုး (11) ခု ဖြစ်သွားပါပြီ။
                ]
            );

            console.log('Recipe saved successfully, ID:', result.insertId);
            return NextResponse.json({ message: 'Recipe saved successfully!', recipeId: result.insertId }, { status: 201 });

        } catch (dbError) {
            console.error('Error saving recipe to MySQL:', dbError);
            if (dbError.code === 'ER_DUP_ENTRY') {
                return NextResponse.json({ message: 'A recipe with this name already exists or a unique field is duplicated.', error: dbError.message }, { status: 409 });
            }
            return NextResponse.json({ message: 'Failed to save recipe to database.', error: dbError.message }, { status: 500 });
        } finally {
            if (connection) {
                await connection.end();
                console.log('MySQL connection closed.');
            }
        }
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            console.error('Yup Validation Error:', error.errors);
            return NextResponse.json(
                { message: 'Validation failed', errors: error.errors },
                { status: 400 }
            );
        } else {
            console.error('Error in POST /api/recipes:', error);
            if (error.message.includes('JSON')) {
                 return NextResponse.json({ message: 'Invalid JSON body provided.', error: error.message }, { status: 400 });
            }
            return NextResponse.json({ message: 'Failed to save recipe.', error: error.message }, { status: 500 });
        }
    }
}
   

