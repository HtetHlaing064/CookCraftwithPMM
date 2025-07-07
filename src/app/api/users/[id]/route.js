
import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";


//Validation  schema 
const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
       email: yup.string().required("Email is required"),
       password: yup.string().required("Password is required"),

});

//User Update API
export async function PUT(req, { params }) {
    try {
        const userId = parseInt(params.id); // parseInt
        const body = await req.json();
        const validatedData = await schema.validate(body, {
            abortEarly: false,
            stripUnknown: true
        });
        //update prisma user id
        await prisma.user.update({
            where: { id: userId },
            data: validatedData,
        });

        return NextResponse.json({
            message: "User is successfully updated.",
            userId,
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

// delete
export async function DELETE(req, { params }) {
    const userId = parseInt(params.id);

    try {
        await prisma.user.delete({
            where: { id: userId },
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

