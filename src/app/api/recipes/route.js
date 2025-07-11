import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma"; 
import formidable from "formidable";
import fs from "fs";//pisma ချိတ်
import { PrismaClient } from "@prisma/client";

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
const recipeData = [
  {
    id:1,
    name: "Pancakes", 
    ingredient: "Flour, Milk, Eggs", 
    instruction: "Mix and cook", 
    category: "breakfast",
     preCookingTime: "10 min", 
     cookingTime: "15 min", 
     image: "uploads/pancakes.jpg",
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
     image: "uploads/pancakes.jpg",
     videoUrl: "https://youtube.com/example", 
     status: "pending" 
  }
];



//get recipes list api
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




const prisma =new PrismaClient();
//create
export async function POST(req) {
  
  try {
    const data = await req.json();
    //const validatedData = await schema.validate(body, { abortEarly: false }); //we used await cause the schema is the async function //use abortEarly for testing validate that is true or false

    const { username, title, description, ingredients, instructions } = data;

    // Find the user ID from username
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        description,
        ingredients,
        instructions,
        userId: user.id,
      },
    });


    return NextResponse.json({
      message: "User is successfully created.",
      recipe: recipes,
    });
  } catch (error) {
    // return NextResponse.json({ message: "Internal Server Error" }, { status: 500 }); //we need to mark that error message have the (status) attrubute
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation Failed",
          errors: error.inner.map((e) => ({
            //we used map for the output that we want
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }

  
}










