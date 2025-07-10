import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma"; //pisma ချိတ်

const schema = yup.object().shape({
  user_id: yup
    .number()
    .typeError("User ID must be a number")
    .required("User ID is required"),

  recipe_id: yup
    .number()
    .typeError("Recipe ID must be a number")
    .required("Recipe ID is required"),
});


//get favourites list api
export async function GET() {
  const likes = await prisma.like.findMany();
  return NextResponse.json(likes);
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

//create
export async function POST(req) {
  try {
    const body = await req.json();
    const validatedData = await schema.validate(body, { abortEarly: false }); //we used await cause the schema is the async function //use abortEarly for testing validate that is true or false

    const likes = await prisma.like.create({
      data: validatedData,
    });

    return NextResponse.json({
      message: "Like is successfully created.",
      like: likes,
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
