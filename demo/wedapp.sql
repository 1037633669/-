/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.7.25-log : Database - wedapp
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wedapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;

USE `wedapp`;

/*Table structure for table `webapp` */

DROP TABLE IF EXISTS `webapp`;

CREATE TABLE `webapp` (
  `city` char(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `weather` char(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `tomorrow_weather` char(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `temperature_daytime` int(11) DEFAULT NULL,
  `temperature_now` int(11) DEFAULT NULL,
  `temperature_night` int(11) DEFAULT NULL,
  `tomorrow_daytime` int(11) DEFAULT NULL,
  `tomorrow_mow` int(11) DEFAULT NULL,
  `tomorrow_night` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

/*Data for the table `webapp` */

insert  into `webapp`(`city`,`weather`,`tomorrow_weather`,`temperature_daytime`,`temperature_now`,`temperature_night`,`tomorrow_daytime`,`tomorrow_mow`,`tomorrow_night`) values ('wuhan','sunny','cloudy',10,15,20,5,10,20),('shanghai','rain','thunderStorm',8,10,7,6,10,15),('beijing','snow','cloudy',0,5,-1,-5,0,10);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
