-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "size" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" REAL NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "dewormed" BOOLEAN NOT NULL,
    "cert" BOOLEAN NOT NULL,
    "microchip" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "publishedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "additionalInformation" TEXT
);
