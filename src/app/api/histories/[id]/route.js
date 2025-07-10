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

    action_type: yup
    .string()
    .oneOf(["created", "liked", "commented"], "Invalid action")
    .required("Action is required"),

});


// Update Recipe API
export async function PUT(req, { params }) {
  try {
    const historiesId = parseInt(params.id); // parseInt
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    //update prisma recipe id
    await prisma.history.update({
      where: { id: historiesId },
      data: validatedData,
    });

    return NextResponse.json({
      message: "User is successfully updated.",
      historiesId,
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
  const historiesId = parseInt(params.id);

  try {
    await prisma.history.delete({
      where: { id: historiesId },
    });
    return NextResponse.json(
      { message: "History is successful deleted." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "History not found or delete failed" },
      { status: 404 }
    );
  }
}

//Detail History API
export async function GET(req, { params }) {
  const historiesId = parseInt(params.id);
  //Find History in database
  const histories = await prisma.history.findUnique({
    where: {
      id: historiesId,
    },
  });

  return NextResponse.json(histories);
}
