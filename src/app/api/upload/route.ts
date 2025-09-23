import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/next-auth/utils";
import { CloudflareR2 } from "@/lib/CloudflareR2";
import DocumentDao from "@/dao/DocumentDao";

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Initialize DocumentDao
    const documentDao = new DocumentDao();

    // Determine final filename by checking database first
    let finalFileName = file.name;

    // Handle unique constraint by checking if fileName already exists
    const fileNameExists = await documentDao.isFileNameExists(file.name);

    if (fileNameExists) {
      // Add timestamp to make it unique
      const fileExtension = file.name.split('.').pop();
      const fileNameWithoutExt = file.name.replace(`.${fileExtension}`, '');
      finalFileName = `${fileNameWithoutExt}-${Date.now()}.${fileExtension}`;
    }

    // Upload to Cloudflare R2 using the final filename
    const r2Client = new CloudflareR2();
    const fileUrl = await r2Client.uploadFile(buffer, finalFileName, file.type);

    // Save document using DAO
    const document = await documentDao.create(
      fileUrl,
      finalFileName,
      `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      user.user.id
    );

    return NextResponse.json({
      success: true,
      document: {
        id: document.id,
        name: document.fileName,
        url: fileUrl,
        size: document.size,
        uploadedAt: document.createdAt,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}