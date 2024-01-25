import { Dimension } from "model/dimension";
import { PrismaService } from "service/prisma/prisma-service";

export class DimensionRepository {

  public async save(dimensionObject: Dimension, sizeId: number) {
    return await PrismaService.client?.dimension.create({
      data: {
        value: dimensionObject.value,
        name: dimensionObject.name,
        sizeId,
      },
    });
  }

  public async findById(id: number) {
    return await PrismaService.client?.dimension.findUnique({
      where: {
        id,
      },
    });
  }
}
