import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/next-auth/utils";
import DocumentDao from "@/dao/DocumentDao";

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Initialize DocumentDao
    const documentDao = new DocumentDao();

    // Fetch documents using DAO
    const documents = await documentDao.getDocumentsByUserId(user.user.id);

    return NextResponse.json({
      success: true,
      documents: documents.map((doc) => ({
        id: doc.id,
        name: doc.fileName,
        url: doc.documentUrl,
        size: doc.size,
        dateUploaded: doc.createdAt.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        uploadedBy: {
          name: doc.user.name || "Unknown User",
          email: doc.user.email || "",
          avatar: doc.user.image || "",
        },
        shared: "Private", // For now, all files are private
        fileType: doc.fileName?.split('.').pop()?.toLowerCase() || "unknown",
      })),
    });
  } catch (error) {
    console.error("Fetch documents error:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}