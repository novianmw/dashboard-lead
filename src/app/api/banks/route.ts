import { NextRequest, NextResponse } from "next/server"
import prisma from "../db"

export const GET = async (req: NextRequest) => {
    const bank = await prisma.bank.findMany()
    return NextResponse.json({bank})
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name, codeBank, companyName } = await req.json()
    const bank = await prisma.bank.create({
        data: {
            name,
            codeBank,
            companyName,
        },
    })
    return NextResponse.json({ bank })
}
