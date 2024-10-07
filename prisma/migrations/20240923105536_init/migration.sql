-- CreateTable
CREATE TABLE "IgdbAuthentication" (
    "id" SERIAL NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expiresInSecond" INTEGER NOT NULL,

    CONSTRAINT "IgdbAuthentication_pkey" PRIMARY KEY ("id")
);
