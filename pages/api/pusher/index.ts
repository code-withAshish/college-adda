import Pusher from "pusher";
import type { NextApiRequest, NextApiResponse } from "next";
export const pusher = new Pusher({
    appId: process.env.PUSHER_appId!,
    key: process.env.PUSHER_key!,
    secret: process.env.PUSHER_secret!,
    cluster: process.env.PUSHER_cluster!,
    useTLS: true,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { message, sender } = req.body;
    const reponse = await pusher.trigger("chat", "chat-event", {
        message, sender
    })

    res.json({ message: "completed" })
}