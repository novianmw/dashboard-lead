import { NextRequest, NextResponse } from "next/server"
import prisma from "../db"

// get Report
export const getReport = async (req: NextRequest) => {
    const dataReport = await prisma.report.findMany({})
    return NextResponse.json({ dataReport })
}

// create Report
export const createReport = async (req: NextRequest) => {
    try {
        const { detail, status, label, amount } = await req.json()
        if (!detail || !status || !label || !amount) {
            return NextResponse.json({
                message: "field data required",
            })
        }
        const dataReport = await prisma.report.create({
            data: {
                detail,
                status,
                label,
                amount,
            },
        })
        return NextResponse.json({ dataReport })
    } catch (error) {
        return NextResponse.json({ message: "Error create Report", error })
    }
}
