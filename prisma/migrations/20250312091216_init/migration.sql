-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TINYTEXT NULL,
    `email` TINYTEXT NULL,
    `subject` TINYTEXT NULL,
    `message` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
