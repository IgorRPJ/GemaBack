-- CreateEnum
CREATE TYPE "Template" AS ENUM ('SIMPLES', 'IMAGEM_DESTAQUE', 'VIDEO');

-- CreateTable
CREATE TABLE "Noticia" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "imagem_url" TEXT,
    "template" "Template" NOT NULL,
    "data_publicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "autor" TEXT NOT NULL,

    CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FotoGremista" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "foto_url" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "FotoGremista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BiografiaGremista" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "biografia" TEXT NOT NULL,
    "foto_url" TEXT,

    CONSTRAINT "BiografiaGremista_pkey" PRIMARY KEY ("id")
);
