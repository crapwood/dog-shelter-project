-- CreateTable
CREATE TABLE `actualcare` (
    `careID` INTEGER NOT NULL,
    `uniqNum` INTEGER NULL,
    `careDate` DATE NULL,
    `workerID` INTEGER NULL,

    INDEX `uniqNum2_idx`(`uniqNum`),
    PRIMARY KEY (`careID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `actualvacc` (
    `actualvaccId` INTEGER NOT NULL,
    `uniqNum` INTEGER NULL,
    `vaccName` VARCHAR(45) NULL,
    `vaccDate` DATE NULL,
    `workerID` INTEGER NULL,

    INDEX `uniqNum1_idx`(`uniqNum`),
    PRIMARY KEY (`actualvaccId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adopters` (
    `adopterID` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `familyname` VARCHAR(45) NULL,
    `address` VARCHAR(45) NULL,
    `cityCode` INTEGER NULL,
    `phone` INTEGER NULL,

    PRIMARY KEY (`adopterID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adoption` (
    `adopterID` INTEGER NOT NULL,
    `uniqNum` INTEGER NOT NULL,
    `adoptionDate` DATE NULL,
    `workerID` INTEGER NULL,

    INDEX `adopterID_idx`(`adopterID`),
    INDEX `uniqNum_idx`(`uniqNum`),
    PRIMARY KEY (`adopterID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cityinstate` (
    `cityinstateId` INTEGER NOT NULL,
    `statename` VARCHAR(45) NOT NULL,
    `cityname` VARCHAR(45) NULL,
    `cityCode` INTEGER NULL,

    INDEX `statename_idx`(`statename`),
    PRIMARY KEY (`cityinstateId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `delivers` (
    `deliverID` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `familyname` VARCHAR(45) NULL,
    `address` VARCHAR(45) NULL,
    `cityCode` INTEGER NULL,
    `phone` INTEGER NULL,

    PRIMARY KEY (`deliverID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `delivery` (
    `deliverID` INTEGER NOT NULL,
    `uniqNum` INTEGER NOT NULL,
    `deliveryDate` DATE NULL,
    `workerID` INTEGER NULL,

    INDEX `deliverID_idx`(`deliverID`),
    INDEX `uniqNum_idx`(`uniqNum`),
    PRIMARY KEY (`deliverID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dogs` (
    `uniqNum` INTEGER NOT NULL,
    `chipNum` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `status` VARCHAR(45) NULL,
    `cabin` VARCHAR(45) NULL,
    `breed` VARCHAR(45) NULL,
    `size` VARCHAR(45) NULL,
    `sex` VARCHAR(1) NULL,
    `birthDate` DATE NULL,
    `arriveCause` VARCHAR(45) NULL,
    `leaveCause` VARCHAR(45) NULL,

    PRIMARY KEY (`uniqNum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payCode` INTEGER NOT NULL,
    `adopterID` INTEGER NULL,
    `payDate` DATE NULL,
    `amount` INTEGER NULL,
    `reason` VARCHAR(45) NULL,

    INDEX `adopterID1_idx`(`adopterID`),
    PRIMARY KEY (`payCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `states` (
    `statename` VARCHAR(45) NOT NULL,
    `vetName` VARCHAR(45) NULL,
    `phone` INTEGER NULL,

    PRIMARY KEY (`statename`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vacclist` (
    `vaccName` VARCHAR(45) NOT NULL,
    `freq` VARCHAR(45) NULL,

    PRIMARY KEY (`vaccName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workers` (
    `workerID` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `familyname` VARCHAR(45) NULL,
    `job` VARCHAR(45) NULL,
    `phone` INTEGER NULL,

    PRIMARY KEY (`workerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
