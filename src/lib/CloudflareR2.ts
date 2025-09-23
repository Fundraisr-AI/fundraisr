import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import config from "@/config";

export class CloudflareR2 {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: "auto",
      endpoint: `https://${config.cloudflareR2.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: config.cloudflareR2.accessKeyId,
        secretAccessKey: config.cloudflareR2.secretAccessKey,
      },
    });
  }

  async uploadFile(
    file: Buffer,
    fileName: string,
    contentType: string
  ): Promise<string> {
    // Use the filename as provided (conflict resolution handled at API level)
    const key = `deal-room/${fileName}`;

    const upload = new Upload({
      client: this.client,
      params: {
        Bucket: config.cloudflareR2.bucketName,
        Key: key,
        Body: file,
        ContentType: contentType,
      },
    });

    await upload.done();

    // Return the public URL
    return `${config.cloudflareR2.publicDomain}/${key}`;
  }
}