import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

//Validation  schema
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

// Update Recipe API
export async function PUT(req, { params }) {
  try {
    const commentId = parseInt(params.id); // parseInt
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    //update prisma recipe id
    await prisma.comment.update({
      where: { id: commentId },
      data: validatedData,
    });

    return NextResponse.json({
      message: "Comment is successfully updated.",
      commentId,
      bodyData: body,
    });
  } catch (error) {
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
        error: error.message || error,
      },
      {
        status: 500,
      }
    );
  }
}

// delete Recipe
export async function DELETE(req, { params }) {
  const commentId = parseInt(params.id);

  try {
    await prisma.comment.delete({
      where: { id: commentId },
    });
    return NextResponse.json(
      { message: "Comment is successful deleted." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Coment not found or delete failed" },
      { status: 404 }
    );
  }
}

//Detail Recipe API
export async function GET(req, { params }) {
  const commentId = parseInt(params.id);
  //Find student in database
  const comments = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });

  return NextResponse.json(comments);
}
