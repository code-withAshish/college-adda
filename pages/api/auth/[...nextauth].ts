import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../../../prisma/db"


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn(params) {
            const res = await prisma.session.findFirst({
                select: {
                    user: true,
                },
                where: {
                    user: {
                        email: params.user.email
                    }
                },
            })
            if (res) {
                return false
            } else {
                return true
            }
        }

    },
    pages: {
        error: "/AuthError"
    },
    secret: process.env.NEXT_AUTH_SECRET,
})