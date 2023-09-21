import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const userData = req.body;
    console.log("userData: ", userData);

    return NextResponse.json({ message: "Success" }, { status: 200 });
}