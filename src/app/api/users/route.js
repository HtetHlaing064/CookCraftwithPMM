import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma"; //pisma ချိတ်


const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),

});

const UserData = [
    {
        id: 1,
        name: 'Su Su',
        email: 'susu@gmail.com',
        password: '123456',
    }, {
         id: 2,
        name: 'Aung Aung',
        email: 'aung@gmail.com',
        password: '123456',
    }, {
        id: 3,
        name: 'Zaw Zaw',
        email: 'Zaw@gmail.com',
        password: '123456',
    },
]

// get user list api
export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

// export async function GET() {
//     return NextResponse.json({ StudentData }
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
        const validatedData = await schema.validate(body, { abortEarly: false });  //we used await cause the schema is the async function //use abortEarly for testing validate that is true or false

        const users = await prisma.user.create({
            data: validatedData,
        });

        return NextResponse.json({
            message: "User is successfully created.",
            user: users,
        })
    } catch (error) {
        // return NextResponse.json({ message: "Internal Server Error" }, { status: 500 }); //we need to mark that error message have the (status) attrubute
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
            error: error.message,
        }, {
            status: 500
        });
    }
}