import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "dron@email.com",
            name: "dron"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}