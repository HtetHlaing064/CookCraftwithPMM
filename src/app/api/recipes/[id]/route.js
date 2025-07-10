
import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";


//Validation  schema 
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

// Update Recipe API
export async function PUT(req, { params }) {
    try {
        const recipeId = parseInt(params.id); // parseInt
        const body = await req.json();
        const validatedData = await schema.validate(body, {
            abortEarly: false,
            stripUnknown: true
        });
        //update prisma recipe id
        await prisma.recipe.update({
            where: { id: recipeId },
            data: validatedData,
        });

        return NextResponse.json({
            message: "User is successfully updated.",
            recipeId,
            bodyData: body
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return NextResponse.json(
                {
                    message: "Validation Failed",
                    errors: error.inner.map((e) => ({       //we used map for the output that we want 
                        path: e.path,
                        message: e.message,
                    })),
                }, { status: 400 }
            );
        }
        return NextResponse.json({
            message: "Unexpected error",
            error: error.message || error,
        }, {
            status: 500
        });
    }

}

// delete Recipe
export async function DELETE(req, { params }) {
    const recipeId = parseInt(params.id);

    try {
        await prisma.recipe.delete({
            where: { id: recipeId },
        });
        return NextResponse.json(
            { message: "User is successful deleted." },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "User not found or delete failed" },
            { status: 404 }
        );
    }
}

//Detail Recipe API
export async function GET(req, { params }) {
  const recipeId = parseInt(params.id);
  //Find student in database
  const recipes = await prisma.recipe.findUnique({
    where: {
      id: recipeId,
    },
  });
  
  return NextResponse.json(recipes);
}