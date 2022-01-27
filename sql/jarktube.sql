-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2021 at 05:50 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jarktube`
--

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `rating_type` text NOT NULL,
  `vid` varchar(50) NOT NULL,
  `rateid` varchar(11) NOT NULL,
  `uid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subscriber`
--

CREATE TABLE `subscriber` (
  `vuid` varchar(10) NOT NULL COMMENT 'viewer user id',
  `cuid` varchar(10) NOT NULL COMMENT 'creator user id',
  `subid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` text NOT NULL,
  `userid` varchar(8) NOT NULL,
  `flag` int(11) NOT NULL,
  `email_addr` longtext NOT NULL,
  `lastlogin` varchar(29) DEFAULT NULL,
  `usernum` int(11) NOT NULL,
  `passhash` longtext NOT NULL,
  `channel_desc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='User Info';

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `rid` varchar(9) NOT NULL COMMENT 'rid (ex: Kh9nGakrf)',
  `vtitle` text NOT NULL COMMENT 'title',
  `vdesc` text NOT NULL COMMENT 'description',
  `published` varchar(7) NOT NULL COMMENT 'publish date (ex: 010505 jan 1 2005)',
  `uid` varchar(14) NOT NULL COMMENT 'user id (ex: HCPvDBPPFfuaM)',
  `keywords` text NOT NULL,
  `vtime` varchar(5) NOT NULL,
  `category` varchar(3) NOT NULL COMMENT 'category (ex: am auto and moters)',
  `video_type` text NOT NULL,
  `annotations` varchar(1) NOT NULL COMMENT 'Todo: make annotations',
  `featured` int(11) NOT NULL COMMENT 'featured video'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `viewid` varchar(11) NOT NULL COMMENT 'lmmao viewids',
  `uid` varchar(50) DEFAULT NULL,
  `vid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD UNIQUE KEY `rateid` (`rateid`);

--
-- Indexes for table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`subid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`usernum`,`userid`) USING BTREE;

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD UNIQUE KEY `rid` (`rid`);

--
-- Indexes for table `views`
--
ALTER TABLE `views`
  ADD PRIMARY KEY (`viewid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `subid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `usernum` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
