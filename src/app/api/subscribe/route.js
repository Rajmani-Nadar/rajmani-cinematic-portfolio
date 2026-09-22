import { NextResponse } from "next/server";
import { createSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!isSupabaseConfigured() || process.env.NODE_ENV === "development") {
      return NextResponse.json({ success: true, message: "Local dev mode: subscription skipped." }, { status: 200 });
    }

    const supabase = createSupabaseClient();

    const { data, error } = await supabase
      .from("subscribers")
      .insert([{ email }])
      .select()
      .single();

    if (error && error.code === "23505") {
      return NextResponse.json({ success: true, message: "Already subscribed!" }, { status: 200 });
    }

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Subscribed successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
