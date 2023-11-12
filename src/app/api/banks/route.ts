import { NextRequest, NextResponse } from "next/server"
import prisma from "../db"

export const getBank = async () => {
    const bank = await prisma.bank.findMany()
    return bank
}

export const createBank = async (req: NextRequest, res: NextResponse) => {
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
