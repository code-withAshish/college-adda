import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../../../prisma/db"
import { getSession } from "next-auth/react"
import { log } from "console"


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn(params) {
            const res = await prisma.session.findFirst({
                select: {
                    userId: true,
                },
                where: {
                    userId: params.user.id,
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
    }
})