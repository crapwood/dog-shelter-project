-- CreateTable
CREATE TABLE `Treatment` (
    `id` VARCHAR(191) NOT NULL,
    `datePerformed` DATE NULL,
    `workerId` VARCHAR(191) NULL,
    `dogId` VARCHAR(191) NULL,
    `name` VARCHAR(45) NULL,

    INDEX `Treatment_workerId_idx`(`workerId`),
    INDEX `Treatment_dogId_idx`(`dogId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vaccine` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `dateAdministered` DATE NULL,
    `workerId` VARCHAR(191) NULL,
    `dogId` VARCHAR(191) NULL,

    INDEX `Vaccine_workerId_idx`(`workerId`),
    INDEX `Vaccine_dogId_idx`(`dogId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adopters` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(45) NULL,
    `familyName` VARCHAR(45) NULL,
    `address` VARCHAR(45) NULL,
    `cityCode` INTEGER NULL,
    `phone` INTEGER NULL,

    INDEX `Adopters_cityCode_idx`(`cityCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adoption` (
    `id` VARCHAR(191) NOT NULL,
    `dogsId` VARCHAR(191) NULL,
    `adoptionDate` DATE NULL,
    `workerId` VARCHAR(191) NULL,
    `adoptersId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Adoption_dogsId_key`(`dogsId`),
    INDEX `Adoption_workerId_idx`(`workerId`),
    INDEX `Adoption_dogsId_idx`(`dogsId`),
    INDEX `Adoption_adoptersId_idx`(`adoptersId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `name` VARCHAR(45) NOT NULL,
    `stateName` VARCHAR(45) NULL,
    `code` INTEGER NOT NULL,

    INDEX `City_stateName_idx`(`stateName`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Delivers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(45) NULL,
    `familyName` VARCHAR(45) NULL,
    `address` VARCHAR(45) NULL,
    `phone` INTEGER NULL,
    `cityCode` INTEGER NULL,

    INDEX `Delivers_cityCode_idx`(`cityCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Delivery` (
    `id` VARCHAR(191) NOT NULL,
    `dogsId` VARCHAR(191) NULL,
    `deliveryDate` DATE NULL,
    `workerId` VARCHAR(191) NULL,
    `deliversId` VARCHAR(191) NULL,

    UNIQUE INDEX `Delivery_dogsId_key`(`dogsId`),
    INDEX `Delivery_workerId_idx`(`workerId`),
    INDEX `Delivery_dogsId_idx`(`dogsId`),
    INDEX `Delivery_deliversId_idx`(`deliversId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dogs` (
    `id` VARCHAR(191) NOT NULL,
    `chipNum` VARCHAR(191) NULL,
    `diskit` INTEGER NULL,
    `name` VARCHAR(45) NULL,
    `status` VARCHAR(45) NULL,
    `cabin` VARCHAR(45) NULL,
    `breed` VARCHAR(45) NULL,
    `size` VARCHAR(45) NULL,
    `gender` VARCHAR(45) NULL,
    `birthDate` DATE NULL,
    `arriveDate` DATE NULL,
    `leaveDate` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `State` (
    `name` VARCHAR(45) NOT NULL,
    `vetName` VARCHAR(45) NULL,
    `phone` INTEGER NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Worker` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(45) NULL,
    `familyName` VARCHAR(45) NULL,
    `job` VARCHAR(45) NULL,
    `phone` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

