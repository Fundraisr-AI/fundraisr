import errorHandler from "@/helpers/errorHandler";
import prisma from "@/lib/prisma";

export default class DocumentDao {
  async create(documentUrl: string, fileName: string, size: string, userId: string) {
    try {
      const documentJson: any = {
        documentUrl: documentUrl,
        fileName: fileName,
        size: size,
        userId: userId,
      };

      const result = await prisma.documents.create({
        data: documentJson,
      });

      return result;
    } catch (e) {
      return e;
    }
  }

  async getDocumentsByUserId(userId: string) {
    try {
      const whereJson = {
        userId: userId,
      };

      const finalQuery = {
        where: whereJson,
        include: {
          user: {
            select: {
              name: true,
              email: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc" as const,
        },
      };

      const result = await prisma.documents.findMany(finalQuery);
      return result;
    } catch (e: any) {
      const error = new errorHandler();
      error.internalServerError("Failed to fetch documents");
      return error.generateError();
    }
  }

  async getDocumentById(id: string) {
    try {
      const whereJson = {
        id: id,
      };

      const finalQuery = {
        where: whereJson,
        include: {
          user: {
            select: {
              name: true,
              email: true,
              image: true,
            },
          },
        },
      };

      const result = await prisma.documents.findUnique(finalQuery);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async getDocumentByFileName(fileName: string) {
    try {
      const whereJson = {
        fileName: fileName,
      };

      const finalQuery = {
        where: whereJson,
      };

      const result = await prisma.documents.findUnique(finalQuery);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async updateDocument(id: string, documentUrl?: string, fileName?: string, size?: string) {
    try {
      const dataJson: any = {};

      if (documentUrl) dataJson.documentUrl = documentUrl;
      if (fileName) dataJson.fileName = fileName;
      if (size) dataJson.size = size;

      const whereJson = {
        id: id,
      };

      const finalQuery = {
        data: dataJson,
        where: whereJson,
      };

      const result = await prisma.documents.update(finalQuery);
      return result;
    } catch (e) {
      return e;
    }
  }

  async deleteDocument(id: string) {
    try {
      const whereJson = {
        id: id,
      };

      const finalQuery = {
        where: whereJson,
      };

      const result = await prisma.documents.delete(finalQuery);
      return result;
    } catch (e) {
      return e;
    }
  }

  async isFileNameExists(fileName: string) {
    const result = await this.getDocumentByFileName(fileName);
    return result !== null;
  }
}