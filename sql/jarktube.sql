-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2021 at 03:22 AM
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` text NOT NULL,
  `userid` varchar(8) NOT NULL,
  `userinfo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `flag` int(11) NOT NULL,
  `email_addr` longtext NOT NULL,
  `lastlogin` varchar(29) DEFAULT NULL,
  `usernum` int(11) NOT NULL,
  `passhash` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='User Info';

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `userid`, `userinfo`, `flag`, `email_addr`, `lastlogin`, `usernum`, `passhash`) VALUES
('test1', '4838aa73', NULL, 0, 'testemail@test.com', '10/16/2021 02:36.29', 1, '$2y$10$ynzFEqx36nBHS6CYqJ87CuqR4mg2k7X/Sxvj.px6fGN4zBRw5F18e'),
('bantest2', 'f654796f', NULL, 1, 'tobebanned@test.com', '10/15/2021 06:38.13', 2, '$2y$10$5dpbM38BdSFMGoaroORdp..KRG95Mg.aYsR1TySzXmEWGAUEq6Te2');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `title` varchar(70) NOT NULL,
  `video_desc` varchar(250) NOT NULL,
  `video_id` varchar(12) NOT NULL,
  `user_id` varchar(8) NOT NULL,
  `date_time` date NOT NULL,
  `video_no` int(11) NOT NULL,
  `featured` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`title`, `video_desc`, `video_id`, `user_id`, `date_time`, `video_no`, `featured`) VALUES
('Test lol', 'fff', '_eoppP5jBoM', 'G78HND', '2009-08-08', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`usernum`,`userid`) USING BTREE;

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`video_no`,`video_id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `usernum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `video_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
