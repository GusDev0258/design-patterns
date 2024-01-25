-- CreateEnum
CREATE TYPE "Type" AS ENUM ('TSHIRT', 'PANT', 'SHOES', 'SOCKS', 'UNDERWEAR');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('FEMININE', 'MASCULINE');

-- CreateTable
CREATE TABLE "Dimension" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "sizeId" INTEGER NOT NULL,

    CONSTRAINT "Dimension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "clothId" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cloth" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "genre" "Genre" NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Cloth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dimension" ADD CONSTRAINT "Dimension_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_clothId_fkey" FOREIGN KEY ("clothId") REFERENCES "Cloth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
