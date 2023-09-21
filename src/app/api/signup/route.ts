import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const userData = await req.json()

    const token = await new SignJWT({
        username: userData.username,
        email: userData.email
    }).setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("300s")
        .sign(getJwtSecretKey());

    const response = NextResponse.json(
        { success: true },
        { status: 200, headers: { "content-type": "application/json" } }
    );

    response.cookies.set({
        name: "token",
        value: token,
        path: "/",
    });

    return response;
}