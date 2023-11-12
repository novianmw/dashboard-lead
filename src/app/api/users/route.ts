import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"
import prisma from "../db"

// list User
export const getUser = async (req: NextRequest) => {
    const user = await prisma.user.findMany({})
    return NextResponse.json({ user })
}

// Register USER
export const createUser = async (req: NextRequest) => {
    try {
        const { firstName, lastName, email, password, image } = await req.json()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const userExist = await prisma.user.findUnique({ where: { email } })
        if (userExist) return NextResponse.json(userExist)
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                image,
            },
        })
        NextResponse.json({ user })
    } catch (error) {
        NextResponse.json({ message: "Error create user", error })
    }
}

// Login USER
export const loginUser = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json()
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })
        const isMatch = user ? await bcrypt.compare(password, user.password) : false
        return NextResponse.json({ user })
    } catch (error) {
        throw new Error("Login Failed")
    }
}

// Detail Id
export const infoId = async (req: NextRequest, context: { params: { id: string } }) => {
    try {
        const id = context.params.id
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        })
        return NextResponse.json({ user })
    } catch (error) {
        throw new Error("get user Error")
    }
}

// Edit User
export const editUser = async (req: NextRequest) => {
    const { firstName, lastName, id, image } = await req.json()
    const user = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            firstName,
            lastName,
            image,
        },
    })
    return NextResponse.json({ user })
}

// Delete User
export const deleteUser = async (req: NextRequest, context: { params: { id: string } }) => {
    try {
        const id = context.params.id
        const user = await prisma.user.delete({
            where: {
                id,
            },
        })
        if (!user) {
            return NextResponse.json({ message: "Error" }, { status: 500 })
        }
        return NextResponse.json({})
    } catch (error) {
        throw new Error("Delete user failed")
    }
}
