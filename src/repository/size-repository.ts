import { Size } from "model/size";
import { PrismaService } from "service/prisma/prisma-service";

export class SizeRepository {
  
  public save(sizeObject: Size) {
    return PrismaService.client?.size.create({
      data: {
        name: sizeObject.name,
      },
    });
  }
}
