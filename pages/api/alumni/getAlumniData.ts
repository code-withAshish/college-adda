import { NextApiRequest, NextApiResponse } from "next";
import { S3FileUpload } from "../../../prisma/db";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const fileUrl = await S3FileUpload({ fileName: "exampleFile", fileBody: "this is a text file" })

    res.status(200).json({ message: fileUrl });
}