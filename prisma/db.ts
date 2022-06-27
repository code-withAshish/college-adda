import { PrismaClient } from "@prisma/client";
import S3 from "aws-sdk/clients/s3"

declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ["query", "info", "warn", "error"] });

if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}
const S3bucket = new S3({
    accessKeyId: process.env.AMAZON_S3_ACCESS_ID,
    secretAccessKey: process.env.AMAZON_S3_ACCESS_KEY,
});

export async function S3FileUpload({ fileName, fileBody }: { fileName: string, fileBody: S3.Body }) {
    const { Location } = await S3bucket.upload({
        Bucket: "college-adda",
        Key: fileName,
        Body: fileBody
    }).promise()

    return Location;
}