import { PrismaClient } from "@prisma/client";

export class PrismaService {
  private static readonly prismaClient = new PrismaClient();

  private static readonly instance = new PrismaService(); 

  private constructor(){}

  public static get client() { 
    if(PrismaService.prismaClient != null) {
      return PrismaService.prismaClient;
    }
  } 
}