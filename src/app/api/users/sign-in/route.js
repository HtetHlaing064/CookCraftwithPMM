import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cookcraft",
});

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // အရင် email ရှိ/မရှိစစ်မယ်
    const [emailRows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (emailRows.length === 0) {
      return NextResponse.json({ success: false, error: "Email not found" });
    }

    // အဲ့ email ရှိသွားပြီဆို password တစ်ခါထပ်စစ်မယ်
    const [passwordRows] = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (passwordRows.length === 0) {
      return NextResponse.json({ success: false, error: "Incorrect password" });
    }

    // Login success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" });
  }
}
