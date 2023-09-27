-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);
