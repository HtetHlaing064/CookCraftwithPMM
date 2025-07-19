// // app/api/upload/route.js

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const data = await req.formData(); // Assuming you're uploading FormData (e.g. file/image)
//   const file = data.get("file");

//   // Debug
//   console.log("File received:", file);

//   if (!file) {
//     return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//   }

//   // Here you could save to DB, cloud storage, etc.
//   return NextResponse.json({ message: "Upload successful", fileName: file.name });
// }


// app/api/upload/route.js

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const data = await req.formData();

//   const file = data.get("image"); // ✅ Change from "file" ➜ "image" to match frontend

//   console.log("File received:", file);

//   if (!file) {
//     return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
//   }

//   // Dummy hosted URL (You can replace with actual upload logic)
//   const fakeImageUrl = `https://dummyimage.com/600x400/000/fff&text=${file.name}`;

//   return NextResponse.json({
//     message: "Upload successful",
//     fileName: file.name,
//     imageUrl: fakeImageUrl, // ✅ so frontend can use this
//   });
// }



import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('image');

  if (!file) {
    return NextResponse.json(
      { error: 'No image file provided' },
      { status: 400 }
    );
  }

  try {
    // Create uploads directory if not exists
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const ext = file.name.split('.').pop();
    const newFilename = `${timestamp}.${ext}`;
    const filePath = path.join(uploadDir, newFilename);

    // Convert file to buffer and save
    const buffer = await file.arrayBuffer();
    await fs.promises.writeFile(filePath, Buffer.from(buffer));

    return NextResponse.json({
      imageUrl: `/uploads/${newFilename}`,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}