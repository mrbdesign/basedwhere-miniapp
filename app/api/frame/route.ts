import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // You can parse the request body here if needed
  // const body = await req.json();

  // Respond with a simple frame (replace this with your meme logic later)
  return NextResponse.json({
    frames: [
      {
        image: "https://basedwhere-miniapp.vercel.app/images/feed.png",
        text: "Your meme will appear here!",
        buttons: [
          { label: "Share", action: "share" }
        ]
      }
    ]
  });
}
