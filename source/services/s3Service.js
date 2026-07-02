import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadToS3 = async (file) => {
  const extension = path.extname(file.originalname);
  const fileKey = `events/${uuidv4()}${extension}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  await s3.send(command);

  return {
    key: fileKey,
    url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
  };
};

export const deleteFromS3 = async (fileKey) => {
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
  });

  await s3.send(command);
};