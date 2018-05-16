-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 07, 2018 at 09:55 AM
-- Server version: 5.6.38-log
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mist`
--

-- --------------------------------------------------------

--
-- Table structure for table `affaire`
--

DROP TABLE IF EXISTS `affaire`;
CREATE TABLE IF NOT EXISTS `affaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_agent` int(11) NOT NULL,
  `titre` varchar(45) DEFAULT NULL,
  `date` varchar(25) DEFAULT NULL,
  `description` text,
  `id_arme` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_arme` (`id_arme`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `affaire`
--

INSERT INTO `affaire` (`id`, `id_agent`, `titre`, `date`, `description`, `id_arme`) VALUES
(1, 1, 'Plus dure sera la chute', '23 septembre 2002', 'Un jet privé appartenant à une compagnie d\'assurance s\'est écrasé dans les Everglades, non loin de Miami. L\'équipe d\'Horatio Caine, qui vient de réintégrer Megan Donner, cherche à réunir les corps et d\'éventuels survivants. L\'équipe fait alors d\'étranges découvertes : le pilote a été tué par balle, et le corps d\'une des victimes, une femme, est retrouvée à plus de 8 km de l\'emplacement du crash. Scott Eric Summer, un survivant retrouvé sans connaissance, le PDG de la compagnie d\'assurances, explique à son réveil que la femme, Christina Maria Colucci aurait ouvert la porte pour se jeter dans le vide. Mais Caine a des doutes, car les preuves ne coïncident pas avec la version des faits relatée par le survivant. Lui et son équipe se lancent alors dans une étude minutieuse des preuves, afin de tenter de reconstituer les évènements à l\'origine du crash.', 0),
(2, 2, 'Apparences trompeuses', '30 septembre 2002', 'On retrouve un collier d\'explosif autour du cou de Aurelio Moreno, un riche importateur de marchandises colombiennes. Alan Freese, l\'ami et mentor d\'Horatio Caine est tué, de même que la victime, au cours d\'une tentative ratée de désamorçage. Horatio Caine, qui est placé avec son équipe sur l\'affaire, est déterminé à découvrir le coupable. Cela inquiète Megan Donner, qui considère que Caine est trop personnellement impliqué dans cette histoire. La communauté colombienne serait visée, de même que l\'équipe de déminage : en effet, le tueur à la bombe s\'attaque à une nouvelle victime, Maura Purgos, une antiquaire colombienne. Mais il s\'avère que la bombe qu\'elle porte autour du cou est un leurre, destiné à attirer l\'équipe de déminage à proximité d\'une vraie bombe, placée dans la panière d\'un vélo conduit par un jeune garçon...', 0),
(3, 3, 'Le Prix de la liberté', '7 octobre 2002', 'Un requin contenant des restes humains (un avant-bras et une partie du torse d\'un homme) est pêché près des côtes de Miami. L\'équipe découvre que le torse porte une blessure par balle, et le tatouage situé sur le bras indique que la victime était d\'origine cubaine. Peu après, le sang de la victime ainsi que celui d\'une femme sont retrouvés sur un bateau abandonné ayant transporté de la cocaïne ; et le corps d\'une jeune femme d\'origine cubaine blessée par balle est découvert à la dérive. Horatio Caine et son équipe partent sur la trace d\'un contrebandier introduisant des clandestins cubains et des stupéfiants aux États-Unis...', 0),
(4, 4, 'Les Dessous de Miami', '14 octobre 2002', 'Deux victimes sont retrouvées sur une plage de Miami : Jane Renshaw, une touriste originaire d\'Iowa, battue, violée et jetée inconsciente dans l\'océan, et Estevan Ordonez, un barman d\'origine guatémaltèque, mort la gorge tranchée et le visage partiellement brûlé. Ces deux personnes avaient participé la veille à une fête organisée non loin de là par de riches notables de la ville : Drake Hamilton et son neveu Tyler. Drake Hamilton est connu d\'Horatio Caine, car il était déjà impliqué dans une affaire non résolue ayant conduit à la mort d\'une jeune femme...', 0);

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

DROP TABLE IF EXISTS `agent`;
CREATE TABLE IF NOT EXISTS `agent` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `motdepasse` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `id_profil` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3wa50if079jnq26tuftbfc853` (`id_profil`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`id`, `email`, `motdepasse`, `nom`, `prenom`, `id_profil`) VALUES
(1, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `arme`
--

DROP TABLE IF EXISTS `arme`;
CREATE TABLE IF NOT EXISTS `arme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_arme` varchar(255) NOT NULL,
  `type_munition` varchar(255) NOT NULL,
  `nom_arme` varchar(255) NOT NULL,
  `numero_serie_arme` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `arme`
--

INSERT INTO `arme` (`id`, `type_arme`, `type_munition`, `nom_arme`, `numero_serie_arme`) VALUES
(4, 'Semi-Automatique', '22', 'Beretta', 'EX15430984'),
(5, 'Fusil à pompe', '12', 'Winchester', 'LP43GP543'),
(8, 'Extraterrestre', 'Sonic', 'Cricket Infernal', 'MenInBlack'),
(9, 'fusil a pompe', '45', 'remington', 'FDSQDSV');

-- --------------------------------------------------------

--
-- Table structure for table `condamnation`
--

DROP TABLE IF EXISTS `condamnation`;
CREATE TABLE IF NOT EXISTS `condamnation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_condamnation` datetime DEFAULT NULL,
  `motif` varchar(255) DEFAULT NULL,
  `id_suspect_cond` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKl73xch4oouxem3kyb03r4iwd8` (`id_suspect_cond`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
CREATE TABLE IF NOT EXISTS `document` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_emission` datetime DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `id_suspect` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKondljdp8jrpg1jqghqy706v3w` (`id_suspect`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `personne`
--

DROP TABLE IF EXISTS `personne`;
CREATE TABLE IF NOT EXISTS `personne` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) DEFAULT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `profil`
--

DROP TABLE IF EXISTS `profil`;
CREATE TABLE IF NOT EXISTS `profil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profil`
--

INSERT INTO `profil` (`id`, `libelle`) VALUES
(1, 'ADMIN'),
(2, 'UTILISATEUR');

-- --------------------------------------------------------

--
-- Table structure for table `suspect`
--

DROP TABLE IF EXISTS `suspect`;
CREATE TABLE IF NOT EXISTS `suspect` (
  `id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `motdepasse` varchar(60) NOT NULL,
  `id_profil` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2rpdpv15clle66lxyvro27vuh` (`id_profil`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `email`, `motdepasse`, `id_profil`) VALUES
(4, 'Jordan', 'Suzanne', 'fdq@fdz.fr', 'cvdsq', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `FK3wa50if079jnq26tuftbfc853` FOREIGN KEY (`id_profil`) REFERENCES `profil` (`id`);

--
-- Constraints for table `condamnation`
--
ALTER TABLE `condamnation`
  ADD CONSTRAINT `FKl73xch4oouxem3kyb03r4iwd8` FOREIGN KEY (`id_suspect_cond`) REFERENCES `suspect` (`id`);

--
-- Constraints for table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FKondljdp8jrpg1jqghqy706v3w` FOREIGN KEY (`id_suspect`) REFERENCES `suspect` (`id`);

--
-- Constraints for table `suspect`
--
ALTER TABLE `suspect`
  ADD CONSTRAINT `FKo5ym7qqdr9v09a2a8r1hbmuex` FOREIGN KEY (`id`) REFERENCES `personne` (`id`);

--
-- Constraints for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `FK2rpdpv15clle66lxyvro27vuh` FOREIGN KEY (`id_profil`) REFERENCES `profil` (`id`),
  ADD CONSTRAINT `fk_id_profil` FOREIGN KEY (`id_profil`) REFERENCES `profil` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
