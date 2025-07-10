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

    comment_text: yup
        .string()
        .min(5, "Comments should be at least 5 characters")
        .required("Comments are required"),

});


//get comments list api
export async function GET() {
  const comments = await prisma.comment.findMany();
  return NextResponse.json(comments);
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

    const comments = await prisma.comment.create({
      data: validatedData,
    });

    return NextResponse.json({
      message: "Comment is successfully created.",
      comment: comments,
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
