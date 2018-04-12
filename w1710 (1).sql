-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Apr 12, 2018 at 01:50 PM
-- Server version: 5.5.34
-- PHP Version: 5.5.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `w1710`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`, `fid`) VALUES
(1, 'w1710', 1),
(2, 'mui1710', 2),
(3, 'vui1710', 7);

-- --------------------------------------------------------

--
-- Table structure for table `fangxiang`
--

CREATE TABLE `fangxiang` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) COLLATE utf8_estonian_ci NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `fangxiang`
--

INSERT INTO `fangxiang` (`fid`, `fname`) VALUES
(1, '全栈'),
(2, 'ui'),
(3, '大数据'),
(5, '人工智能'),
(6, '室内设计'),
(7, 'ar'),
(8, '会计'),
(9, 'abc');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `selectSuccess` varchar(2000) NOT NULL,
  `selectErr` varchar(2000) NOT NULL,
  `jianda` varchar(2000) NOT NULL,
  `jiandaScore` varchar(1000) NOT NULL,
  `status` tinyint(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `zid`, `sid`, `cid`, `selectSuccess`, `selectErr`, `jianda`, `jiandaScore`, `status`) VALUES
(1, 1, 1, 1, '3:2|8:2', '4', '5:啊啊啊啊', '5:5', 1),
(2, 1, 5, 1, '3:2|8:2', '4', '5:张三1', '5:2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `stu`
--

CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `cid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `stu`
--

INSERT INTO `stu` (`id`, `name`, `pass`, `cid`) VALUES
(1, '张三', 'e10adc3949ba59abbe56e057f20f883e', 1),
(5, '张三1', 'e10adc3949ba59abbe56e057f20f883e', 1),
(6, '张三2', 'e10adc3949ba59abbe56e057f20f883e', 1),
(7, '张三3', 'e10adc3949ba59abbe56e057f20f883e', 1),
(8, '张三4', 'e10adc3949ba59abbe56e057f20f883e', 1),
(9, '张三5', 'e10adc3949ba59abbe56e057f20f883e', 1),
(10, '张三6', 'e10adc3949ba59abbe56e057f20f883e', 1),
(11, '张三7', 'e10adc3949ba59abbe56e057f20f883e', 1),
(12, '张三8', 'e10adc3949ba59abbe56e057f20f883e', 1),
(13, '张三9', 'e10adc3949ba59abbe56e057f20f883e', 1),
(14, '张三10', 'e10adc3949ba59abbe56e057f20f883e', 1),
(15, '张三11', 'e10adc3949ba59abbe56e057f20f883e', 1),
(16, '张三12', 'e10adc3949ba59abbe56e057f20f883e', 1),
(17, '张三13', 'e10adc3949ba59abbe56e057f20f883e', 1),
(18, '张三14', 'e10adc3949ba59abbe56e057f20f883e', 1),
(19, '张三15', 'e10adc3949ba59abbe56e057f20f883e', 1),
(20, '张三16', 'e10adc3949ba59abbe56e057f20f883e', 1),
(21, '张三17', 'e10adc3949ba59abbe56e057f20f883e', 1),
(22, '张三18', 'e10adc3949ba59abbe56e057f20f883e', 1),
(23, '张三19', 'e10adc3949ba59abbe56e057f20f883e', 1),
(24, '张三20', 'e10adc3949ba59abbe56e057f20f883e', 1),
(25, '张三21', 'e10adc3949ba59abbe56e057f20f883e', 1),
(26, '张三22', 'e10adc3949ba59abbe56e057f20f883e', 1),
(27, '张三23', 'e10adc3949ba59abbe56e057f20f883e', 1),
(28, '张三24', 'e10adc3949ba59abbe56e057f20f883e', 1),
(29, '张三25', 'e10adc3949ba59abbe56e057f20f883e', 1),
(30, '张三26', 'e10adc3949ba59abbe56e057f20f883e', 1),
(31, '张三27', 'e10adc3949ba59abbe56e057f20f883e', 1);

-- --------------------------------------------------------

--
-- Table structure for table `teach`
--

CREATE TABLE `teach` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pass` varchar(32) NOT NULL,
  `cid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `teach`
--

INSERT INTO `teach` (`id`, `name`, `pass`, `cid`, `fid`) VALUES
(1, '张老师', '827ccb0eea8a706c4c34a16891f84e7b', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `options` varchar(500) NOT NULL,
  `fid` int(11) NOT NULL,
  `typeid` int(11) NOT NULL,
  `daan` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `title`, `options`, `fid`, `typeid`, `daan`) VALUES
(3, 'abc', 'a|b|c|d', 1, 1, '0'),
(4, '多选题', 'a|b|c|d', 1, 2, '0|1|2'),
(5, '什么是全栈?', '''''', 1, 3, '全栈就是完成某一个项目所需要的所有的技术，并且能够掌握着一系列的技术'),
(6, 'ui是什么？', 'ui是一种编程语言|ui是一种食物|ui是对于用户界面的简称|ui是一个人的名字', 2, 1, '2'),
(7, '多选', 'a|b|c|d', 1, 2, '0|1|2'),
(8, '单选题1', 'aaa|bbb|ccc|ddd', 1, 1, '0'),
(9, '单选题2', 'aaa|bbb|ccc|ddd', 1, 1, '0'),
(10, '单选题3', 'aaa|bbb|ccc|ddd', 1, 1, '0');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `typeid` int(11) NOT NULL AUTO_INCREMENT,
  `typename` varchar(100) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`typeid`, `typename`) VALUES
(1, '单选'),
(2, '多选'),
(3, '简答');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(100) NOT NULL,
  `upass` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uname`, `upass`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- Table structure for table `zuti`
--

CREATE TABLE `zuti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `con` varchar(2000) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `teachid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `zuti`
--

INSERT INTO `zuti` (`id`, `fid`, `cid`, `con`, `start`, `end`, `teachid`) VALUES
(1, 1, 1, '3:2|8:2|4:3|5:5', '2018-04-12 08:00:00', '2018-04-12 17:00:00', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
