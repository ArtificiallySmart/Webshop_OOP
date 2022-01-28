-- phpMyAdmin SQL Dump
-- version 5.0.4deb2ubuntu5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 28, 2022 at 01:11 PM
-- Server version: 8.0.27-0ubuntu0.21.10.1
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vintastic`
--

-- --------------------------------------------------------

--
-- Table structure for table `billing_addresses`
--

CREATE TABLE `billing_addresses` (
  `id` int NOT NULL,
  `street` varchar(255) NOT NULL,
  `house_number` int NOT NULL,
  `addition` varchar(255) DEFAULT NULL,
  `postal_code` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `city` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `edited_at` timestamp NULL DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `billing_addresses`
--

INSERT INTO `billing_addresses` (`id`, `street`, `house_number`, `addition`, `postal_code`, `city`, `created_at`, `edited_at`, `user_id`) VALUES
(1, 'glamdringlaan', 1, 'a', '1234AA', 'Rivendell', '2022-01-26 15:05:30', NULL, 31),
(4, 'Bag-end', 1, 'a', '1234ME', 'Shire', '2022-01-28 11:47:31', NULL, 38),
(5, 'Orthanc', 6, 'c', '4567ME', 'Isengard', '2022-01-28 12:11:00', NULL, 32);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Lighting'),
(2, 'Decor'),
(3, 'Furniture'),
(4, 'Textiles');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int NOT NULL,
  `url` varchar(200) NOT NULL,
  `p_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `p_id`) VALUES
(1, 'https://cdn20.pamono.com/p/z/9/5/958245_maz92kvs2r/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-1.jpg', 1),
(2, 'https://cdn20.pamono.com/p/z/9/5/958245_maz92kvs2r/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-1.jpg', 1),
(3, 'https://cdn20.pamono.com/p/z/9/5/958245_fvonwnlx59/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-2.jpg', 1),
(4, 'https://cdn20.pamono.com/p/z/9/5/958245_ecnex8bp8z/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-3.jpg', 1),
(5, 'https://cdn20.pamono.com/p/z/9/5/958245_y92xaaizbi/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-4.jpg', 1),
(6, 'https://cdn20.pamono.com/p/z/9/5/958245_sjxbyi5fbg/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-5.jpg', 1),
(7, 'https://cdn20.pamono.com/p/z/2/6/260622_n2ts98drlh/space-age-lounge-chair-1970s-1.jpg', 2),
(8, 'https://cdn20.pamono.com/p/z/2/6/260622_41634wfzja/space-age-lounge-chair-1970s-2.jpg', 2),
(9, 'https://cdn20.pamono.com/p/z/2/6/260622_cd03akydc5/space-age-lounge-chair-1970s-3.jpg', 2),
(10, 'https://cdn20.pamono.com/p/z/2/6/260622_l99c166dkz/space-age-lounge-chair-1970s-4.jpg', 2),
(11, 'https://cdn20.pamono.com/p/z/4/3/431810_w3h3bbuluv/space-age-table-lamp-1970s-1.jpg', 3),
(12, 'https://cdn20.pamono.com/p/z/4/3/431810_0x59jdbri8/space-age-table-lamp-1970s-2.jpg', 3),
(13, 'https://cdn20.pamono.com/p/z/4/3/431810_nuqxc7x8b6/space-age-table-lamp-1970s-4.jpg', 3),
(14, 'https://cdn20.pamono.com/p/z/7/4/742882_xtf49ab3di/space-age-ceramic-wall-lamp-1.jpg', 4),
(15, 'https://cdn20.pamono.com/p/z/7/4/742882_ixi8v7zroa/space-age-ceramic-wall-lamp-2.jpg', 4),
(16, 'https://cdn20.pamono.com/p/z/7/4/742882_o8toe2b099/space-age-ceramic-wall-lamp-3.jpg', 4),
(17, 'https://cdn20.pamono.com/p/z/7/4/742882_4flr08spzj/space-age-ceramic-wall-lamp-6.jpg', 4),
(18, 'https://cdn20.pamono.com/p/z/1/3/135752_opz07xdaip/space-age-pottery-jar-by-j-verdoorn-1968-1.jpg', 5),
(19, 'https://cdn20.pamono.com/p/z/1/3/135752_niolbwkyvx/space-age-pottery-jar-by-j-verdoorn-1968-2.jpg', 5),
(20, 'https://cdn20.pamono.com/p/z/1/3/135752_ltt4shbxs7/space-age-pottery-jar-by-j-verdoorn-1968-3.jpg', 5),
(21, 'https://cdn20.pamono.com/p/z/1/3/135752_w6vlhxzslj/space-age-pottery-jar-by-j-verdoorn-1968-4.jpg', 5),
(22, 'https://cdn20.pamono.com/p/z/7/1/717237_kh2vfem3op/space-age-pendant-lamp-1960s-1.jpg', 6),
(23, 'https://cdn20.pamono.com/p/z/7/1/717237_iaa6kvm6xe/space-age-pendant-lamp-1960s-2.jpg', 6),
(24, 'https://cdn20.pamono.com/p/z/7/1/717237_d8a2jujer1/space-age-pendant-lamp-1960s-3.jpg', 6),
(25, 'https://cdn20.pamono.com/p/z/7/1/717237_dy40plmay2/space-age-pendant-lamp-1960s-6.jpg', 6),
(26, 'https://cdn20.pamono.com/p/z/2/7/279842_kh3rghf5hy/space-age-fiberglass-lounge-chair-with-pouf-1970s-1.jpg', 7),
(27, 'https://cdn20.pamono.com/p/z/2/7/279842_86pfjb8iju/space-age-fiberglass-lounge-chair-with-pouf-1970s-2.jpg', 7),
(28, 'https://cdn20.pamono.com/p/z/2/7/279842_baf9cjvym9/space-age-fiberglass-lounge-chair-with-pouf-1970s-3.jpg', 7),
(29, 'https://cdn20.pamono.com/p/z/2/7/279842_bmqqtwu4cn/space-age-fiberglass-lounge-chair-with-pouf-1970s-4.jpg', 7),
(30, 'https://cdn20.pamono.com/p/z/1/0/1095722_z1kkngspe0/space-age-red-splash-carpet-1.jpg', 8),
(31, 'https://cdn20.pamono.com/p/z/1/0/1095722_m3hgd5jhbs/space-age-red-splash-carpet-2.jpg', 8),
(32, 'https://cdn20.pamono.com/p/z/1/0/1095722_8tokd00taz/space-age-red-splash-carpet-3.jpg', 8),
(33, 'https://cdn20.pamono.com/p/z/1/0/1095722_8yows8trgc/space-age-red-splash-carpet-5.jpg', 8),
(34, 'https://cdn20.pamono.com/p/z/3/7/377737_blhp6v189u/space-age-glass-table-lamp-1960s-1.jpg', 9),
(35, 'https://cdn20.pamono.com/p/z/3/7/377737_j738xvmzcx/space-age-glass-table-lamp-1960s-2.jpg', 9),
(36, 'https://cdn20.pamono.com/p/z/3/7/377737_ltxdihnkjr/space-age-glass-table-lamp-1960s-3.jpg', 9),
(37, 'https://cdn20.pamono.com/p/z/3/7/377737_yd13m85fvx/space-age-glass-table-lamp-1960s-4.jpg', 9),
(38, 'https://cdn20.pamono.com/p/z/6/6/664283_pn3xtwutvi/space-age-clock-from-junghans-1960s-1.jpg', 10),
(39, 'https://cdn20.pamono.com/p/z/6/6/664283_iejfsunyjp/space-age-clock-from-junghans-1960s-2.jpg', 10),
(40, 'https://cdn20.pamono.com/p/z/6/6/664283_n37noiniho/space-age-clock-from-junghans-1960s-3.jpg', 10),
(41, 'https://cdn20.pamono.com/p/z/6/6/664283_skmpy7yl5c/space-age-clock-from-junghans-1960s-7.jpg', 10),
(42, 'https://cdn20.pamono.com/p/z/5/7/579691_p0ke6ssep7/vintage-space-age-rosewood-coat-rack-1960s-1.jpg', 11),
(43, 'https://cdn20.pamono.com/p/z/5/7/579691_vzcat7abce/vintage-space-age-rosewood-coat-rack-1960s-6.jpg', 11),
(44, 'https://cdn20.pamono.com/p/z/5/7/579691_x3fxeoho26/vintage-space-age-rosewood-coat-rack-1960s-7.jpg', 11),
(45, 'https://cdn20.pamono.com/p/z/5/7/579691_x77522mq3d/vintage-space-age-rosewood-coat-rack-1960s-14.jpg', 11),
(46, 'https://cdn20.pamono.com/p/z/1/0/1086847_xrjxxfca0p/space-age-scandinavian-handmade-wool-carpet-1970s-1.jpg', 12),
(47, 'https://cdn20.pamono.com/p/z/1/0/1086847_cujmn3ljcn/space-age-scandinavian-handmade-wool-carpet-1970s-3.jpg', 12),
(48, 'https://cdn20.pamono.com/p/z/1/0/1086847_j4tow0ip1k/space-age-scandinavian-handmade-wool-carpet-1970s-4.jpg', 12),
(49, 'https://cdn20.pamono.com/p/z/1/0/1086847_61jff26x53/space-age-scandinavian-handmade-wool-carpet-1970s-5.jpg', 12),
(50, 'https://cdn20.pamono.com/p/z/1/0/1086847_htfnhjmzav/space-age-scandinavian-handmade-wool-carpet-1970s-6.jpg', 12),
(51, 'https://cdn20.pamono.com/p/z/9/9/993806_mtva9h49kk/vintage-space-age-wenge-wood-coffee-table-1.jpg', 13),
(52, 'https://cdn20.pamono.com/p/z/9/9/993806_n0gkymb5h7/vintage-space-age-wenge-wood-coffee-table-2.jpg', 13),
(53, 'https://cdn20.pamono.com/p/z/9/9/993806_92seh9k33v/vintage-space-age-wenge-wood-coffee-table-3.jpg', 13),
(54, 'https://cdn20.pamono.com/p/z/9/9/993806_63av176bai/vintage-space-age-wenge-wood-coffee-table-4.jpg', 13),
(55, 'https://cdn20.pamono.com/p/z/9/6/963151_yhd2ccmlde/space-age-sconces-1970s-set-of-2-1.jpg', 14),
(56, 'https://cdn20.pamono.com/p/z/9/6/963151_pjlc4agrgr/space-age-sconces-1970s-set-of-2-2.jpg', 14),
(57, 'https://cdn20.pamono.com/p/z/9/6/963151_s708o7y36g/space-age-sconces-1970s-set-of-2-3.jpg', 14),
(58, 'https://cdn20.pamono.com/p/z/8/4/847036_16ltygqhus/space-age-susy-bench-from-neolt-1980s-1.jpg', 15),
(59, 'https://cdn20.pamono.com/p/z/8/4/847036_aj7k0fnrm4/space-age-susy-bench-from-neolt-1980s-2.jpg', 15),
(60, 'https://cdn20.pamono.com/p/z/8/4/847036_vjl908dyv1/space-age-susy-bench-from-neolt-1980s-3.jpg', 15),
(61, 'https://cdn20.pamono.com/p/z/8/4/847036_53wmsooz5w/space-age-susy-bench-from-neolt-1980s-4.jpg', 15),
(62, 'https://cdn20.pamono.com/p/z/8/2/824174_mybg7n4oj7/space-age-lounge-chairs-1970s-set-of-2-1.jpg', 16),
(63, 'https://cdn20.pamono.com/p/z/8/2/824174_5cbgakpvxw/space-age-lounge-chairs-1970s-set-of-2-2.jpg', 16),
(64, 'https://cdn20.pamono.com/p/z/8/2/824174_shjy79m2ym/space-age-lounge-chairs-1970s-set-of-2-3.jpg', 16),
(65, 'https://cdn20.pamono.com/p/z/8/2/824174_7za8v6rrre/space-age-lounge-chairs-1970s-set-of-2-4.jpg', 16),
(66, 'https://cdn20.pamono.com/p/z/8/2/824174_h3rhz9augp/space-age-lounge-chairs-1970s-set-of-2-6.jpg', 16),
(67, 'https://cdn20.pamono.com/p/z/9/2/929161_4w652xnlem/space-age-bar-pendant-lamp-in-aluminum-1970s-1.jpg', 17),
(68, 'https://cdn20.pamono.com/p/z/9/2/929161_nczbvbwwou/space-age-bar-pendant-lamp-in-aluminum-1970s-2.jpg', 17),
(69, 'https://cdn20.pamono.com/p/z/9/2/929161_vg1oyb89u8/space-age-bar-pendant-lamp-in-aluminum-1970s-4.jpg', 17),
(70, 'https://cdn20.pamono.com/p/z/9/2/929161_iqa8ccesxb/space-age-bar-pendant-lamp-in-aluminum-1970s-8.jpg', 17),
(71, 'https://cdn20.pamono.com/p/z/1/0/1016413_aflaqq8mq9/space-age-brown-vase-in-ceramic-italy-1970s-1.jpg', 18),
(72, 'https://cdn20.pamono.com/p/z/1/0/1016413_s0ub516i9q/space-age-brown-vase-in-ceramic-italy-1970s-2.jpg', 18),
(73, 'https://cdn20.pamono.com/p/z/1/0/1016413_14srzvw2t5/space-age-brown-vase-in-ceramic-italy-1970s-3.jpg', 18),
(74, 'https://cdn20.pamono.com/p/z/1/0/1016413_3vxmzw9mhy/space-age-brown-vase-in-ceramic-italy-1970s-5.jpg', 18),
(75, 'https://cdn20.pamono.com/p/z/9/3/936134_77mi19xb1f/space-age-geometric-wool-rug-italy-1970s-1.jpg', 19),
(76, 'https://cdn20.pamono.com/p/z/9/3/936134_ztvyacqjt3/space-age-geometric-wool-rug-italy-1970s-2.jpg', 19),
(77, 'https://cdn20.pamono.com/p/z/9/3/936134_5f6h56ulnm/space-age-geometric-wool-rug-italy-1970s-3.jpg', 19),
(78, 'https://cdn20.pamono.com/p/z/9/3/936134_24ohty7kzs/space-age-geometric-wool-rug-italy-1970s-4.jpg', 19),
(79, 'https://cdn20.pamono.com/p/z/9/3/936134_hza8hu5xd5/space-age-geometric-wool-rug-italy-1970s-6.jpg', 19),
(80, 'https://cdn20.pamono.com/p/z/9/2/926026_9ninc37nxr/space-age-garden-egg-by-peter-ghyczy-1960s-1.jpg', 20),
(81, 'https://cdn20.pamono.com/p/z/9/2/926026_bp1i3vzu7m/space-age-garden-egg-by-peter-ghyczy-1960s-3.jpg', 20),
(82, 'https://cdn20.pamono.com/p/z/9/2/926026_rrk10pi4ag/space-age-garden-egg-by-peter-ghyczy-1960s-5.jpg', 20),
(83, 'https://cdn20.pamono.com/p/z/9/2/926026_fzr46aoyv5/space-age-garden-egg-by-peter-ghyczy-1960s-6.jpg', 20);

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` int NOT NULL,
  `material` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `material`) VALUES
(22, 'acrylic glass'),
(16, 'aluminium'),
(9, 'canvas'),
(11, 'cardboard'),
(6, 'ceramic'),
(8, 'chrome'),
(12, 'clay'),
(4, 'copper'),
(15, 'fiberglass'),
(21, 'glass'),
(19, 'iron'),
(7, 'marble'),
(1, 'metal'),
(2, 'plastic'),
(13, 'polyurethane'),
(17, 'rosewood'),
(14, 'textile'),
(5, 'wood'),
(3, 'wool');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `created at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL DEFAULT 'open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `amount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `short` text NOT NULL,
  `category` int NOT NULL,
  `subcategory` int NOT NULL,
  `thumbnail` varchar(5000) NOT NULL,
  `designer` varchar(250) NOT NULL,
  `brand` varchar(250) NOT NULL,
  `style` varchar(250) NOT NULL,
  `period` varchar(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `sellerId` varchar(250) NOT NULL,
  `stock` int NOT NULL,
  `price` int NOT NULL,
  `spotlight` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `edited_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_id`, `name`, `description`, `short`, `category`, `subcategory`, `thumbnail`, `designer`, `brand`, `style`, `period`, `state`, `sellerId`, `stock`, `price`, `spotlight`, `created_at`, `edited_at`, `deleted_at`) VALUES
(1, '61effaae9c274', 'Duetto Table Lamp', 'Imposing space age table lamp by Guzzini, designed by Luigi Massoni. The plastic screen shows the classic form of Guzzini lights.It is designed translucent orange and has a gradient from darker to the bottom.The shield is at the upper part on the foot, is produced whereby a ring of light as a partition between the foot and screen.The screen is fixed to the tip in a trough- like depression with a chrome ball.This table lamp not only provides functional lighting, but staged at the same time as a luminous object in space.The lamp has a cord switch.', 'Imposing space age table lamp by Guzzini, designed by Luigi Massoni.', 1, 1, 'https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_1118,w_1118/v1639484566/vintastic/mid-century-italian-space-age-duetto-table-lamp-by-luigi-massoni-for-guzzini-1_ovwliy.jpg', 'Luigi Massoni', 'Guzzini', 'Space age', '1960s', 'Very good', '1', 3, 2249, 1, '2022-01-07 09:56:54', NULL, NULL),
(2, '61effb54a5e81', 'Lounge Chair', '\'This lounge chair is attributed to Gerard van den Berg.<div><br></div><div>&nbsp;It was made in the 1970s.&nbsp;</div><div>The chair is totally covered in grey leather, in good condition with some patina on the seat.</div>\'', 'Lounge chair by Gerard van den Berg', 3, 8, 'https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_800,w_800/v1639484920/vintastic/space-age-lounge-chair-1970s-1_bohlgq.jpg', 'Gerard van den Berg', '-', 'Space age', '1970s', 'Good', '1', 1, 995, 0, '2022-01-07 09:56:54', NULL, NULL),
(3, '61effb54af4e6', 'Space Age Table Lamp', 'This original Space Age table lamp with sequins works perfectly.', 'Original Space Age table lamp with sequins', 1, 1, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485018/vintastic/space-age-table-lamp-1970s-1_nbdtvg.jpg', '-', '-', 'Space Age', '1970s', 'Very Good', '1', 4, 490, 1, '2022-01-07 09:56:54', NULL, NULL),
(4, '61effb54b1725', 'Space Age Ceramic Wall Lamp', 'Vintage Design With on/off cord, can be disabled for direct connection to power.', 'Vintage Design With on/off cord', 1, 2, 'https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_795,w_795/v1639485158/vintastic/space-age-ceramic-wall-lamp-1_vaghul.jpg', '-', '-', 'Mid-Century', '1970s', 'Very Good', '1', 1, 350, 1, '2022-01-07 09:56:54', NULL, NULL),
(5, '61effb54b3b53', 'Space Age Pottery Jar', 'This Dutch pottery jar was made by J. Verdoorn in 1968. This vase like object resembles some kind of U.F.O. It remains in a very good vintage condition.', 'Dutch pottery jar by J. Verdoorn', 2, 5, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485239/vintastic/space-age-pottery-jar-by-j-verdoorn-1968-1_jrxeuw.jpg', 'J. Verdoorn', '-', 'Space age', '1960s', 'Very good', '1', 2, 200, 0, '2022-01-07 09:56:54', NULL, NULL),
(6, '61effb54b63a3', 'Space Age Pendant Lamp', 'Beautiful 1950s / 60s hanging lamp made of aluminum and with beautiful details. The design of this lamp strongly reminds us of a Swedish granhaga lamp, or a lamp of Dutch or Scandinavian origin from, for example, the Granhaga or Vitrika brand. Unfortunately, the mark is missing. The lamp has two funnel-shaped metal bowls that are connected to each other and between which the lamp burns. The open part of the bowl that faces upwards is painted orange. The part that faces down is painted white which gives a clear reflection. Both bowls have a brass-colored brushed coating on the outside.', 'Beautiful space age hanging lamp', 1, 3, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485273/vintastic/space-age-pendant-lamp-1960s-1_gpqtt9.jpg', '-', '-', 'Space Age', '1960s', 'Good', '1', 1, 240, 1, '2022-01-07 09:56:54', NULL, NULL),
(7, '61effb54b98db', 'Space Age Fiberglass Lounge Chair with Pouf', 'Italian handmade easy chair with pouf from the 1970s - Features a structure in painted fiberglass - Seat and pouf are padded in plastic material - Designed like the seat of a sports car', 'Italian handmade easy chair with pouf', 3, 8, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485340/vintastic/space-age-fiberglass-lounge-chair-with-pouf-1970s-1_jamifz.jpg', '-', '-', 'Space Age', '1970s', 'Very good', '1', 1, 1000, 0, '2022-01-07 09:56:54', NULL, NULL),
(8, '61effb54bbdbc', 'Red Splash Carpet', '-', 'Beautiful handmade carpet', 4, 9, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485353/vintastic/space-age-red-splash-carpet-1_ubriw9.jpg', '-', '-', 'Space Age', '1970s', 'Very good', '1', 1, 250, 0, '2022-01-07 09:56:54', NULL, NULL),
(9, '61effb54bf415', 'Glass Table Lamp', 'This Space Age table lamp is made of white and coral opaline glass. It emits a beautiful diffused light and retains its original switch.', 'Table lamp of white and coral opaline glass', 1, 1, 'https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_960,w_960/v1639485363/vintastic/space-age-glass-table-lamp-1960s-1_dr3a92.jpg', '-', '-', 'Space Age', '1960s', 'Very good', '1', 2, 215, 1, '2022-01-07 09:56:54', NULL, NULL),
(10, '61effb54c2b93', 'Space Age Clock', 'Vintage Design', 'Beautiful Junghans starburst clock', 2, 4, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485486/vintastic/space-age-clock-from-junghans-1960s-1_c4ok7v.jpg', '-', 'Junghans', 'Mid Century Modern', '1960s', 'Good', '1', 4, 350, 0, '2022-01-07 09:56:54', NULL, NULL),
(11, '61effb54c61a9', 'Space Age Rosewood Coat Rack', 'Beautiful wall coat rack from the 60s in a beautiful condition. The coat rack has 9 square rosewood panels that are separated by two wider panels. The five original aluminum coat hooks are provided with the coat rack. An aluminum frame can be found at the rear of the coat rack to which the panels are attached. In the frame there are two screw holes at the rear from which the coat rack can be hung.', 'Beautiful wall coat rack from the 60s', 2, 6, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485496/vintastic/vintage-space-age-rosewood-coat-rack-1960s-1_qqjpte.jpg', '-', '-', 'Mid-Century, Vintage, Scandinavian Modern', '1960s', 'Very Good', '1', 8, 645, 0, '2022-01-07 09:56:54', NULL, NULL),
(12, '61effb54c8cf2', 'Handmade Wool Carpet', 'Has been professionally cleaned. The carpet has four light marks, see pictures. There was once a table on it. A stunning carpet from the 1970s in good condition.', 'Stunning carpet from the 1970s in good condition.', 4, 9, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485505/vintastic/space-age-scandinavian-handmade-wool-carpet-1970s-1_hahinv.jpg', '-', '-', 'Vintage, Space Age', '1970s', 'Good', '1', 2, 750, 0, '2022-01-07 09:56:54', NULL, NULL),
(13, '61effb54cc50f', 'Wenge Wood Coffee Table', 'Vintage Design', 'Beautiful dark wood with glass coffee table', 3, 7, 'https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_1200,w_1200/v1639485569/vintastic/vintage-space-age-wenge-wood-coffee-table-1_me1odu.jpg', '-', '-', 'Pop Art, Vintage, Space Age', '1960s', 'Good', '1', 1, 625, 0, '2022-01-07 09:56:54', NULL, NULL),
(14, '61effb54cfa8f', 'Space Age Sconces', 'Pair of Space Age 1970 square -plexis smoked and metal * The cable of this item may be original and might need replacement, if not specified otherwise.', 'Pair of Space Age 1970 square sconces', 1, 2, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485629/vintastic/space-age-sconces-1970s-set-of-2-1_gbwf33.jpg', '-', '-', 'Mid-Century', '1970s', 'Very Good', '1', 6, 60, 1, '2022-01-07 09:56:54', NULL, NULL),
(15, '61effb54d242d', 'Susy Bench', 'Beautiful bench for a waiting room with a base in black enameled iron, two fixed seats made of plastic material in a gray color and seats covered in red cloth. Mark Neolt on the back of the seats; Susy model.', 'Beautiful bench by Mark Neolt', 3, 8, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485696/vintastic/space-age-susy-bench-from-neolt-1980s-1_bqtxdg.jpg', '-', 'Neolt', 'Space Age', '1970s', 'Good', '1', 5, 335, 0, '2022-01-07 10:56:54', NULL, NULL),
(16, '61effb54d5759', 'Lounge Chairs, Set of 2', '-', '', 3, 8, 'https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_1067,w_1067,x_250/v1639485703/vintastic/space-age-lounge-chairs-1970s-set-of-2-1_vlvqnc.jpg', '-', '-', 'Space Age', '1970s', 'Good', '1', 2, 1200, 0, '2022-01-07 11:56:54', NULL, NULL),
(17, '61effb54d8a92', 'Pendant Lamp', 'Futuristic 1970s pendant lamp in beautiful original condition. Metal body with a brushed surface, aluminum tubes from the inside in matte (slightly red) orange coated.', 'Futuristic 1970s pendant lamp in beautiful condition', 1, 3, 'https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1639485713/vintastic/space-age-bar-pendant-lamp-in-aluminum-1970s-1_u56mwv.jpg', '-', '-', 'Space Age', '1970s', 'Very Good', '1', 3, 150, 0, '2022-01-07 12:56:54', NULL, NULL),
(18, '61effb54db218', 'Brown Vase in Ceramic', '1970s Stunning Space Age Brown Vase in Ceramic and in excellent condition. Made in Italy', 'Stunning Space Age Vase in Ceramic', 2, 5, 'https://res.cloudinary.com/dezwo7e6f/image/upload/v1639485720/vintastic/space-age-brown-vase-in-ceramic-italy-1970s-1_aa3ucu.jpg', '-', '-', 'Space Age, Mid-Century', '1970s', 'Excellent', '1', 3, 125, 0, '2022-01-07 13:56:54', NULL, NULL),
(19, '61effb54dddd3', 'Geometric Wool Rug', '1970s Stunning space age rug with a beautiful geometric design. Pure wool made in Italy. In excellent condition. This rug is rare.', 'Stunning space age rug with a beautiful geometric design', 4, 9, 'https://res.cloudinary.com/dezwo7e6f/image/upload/v1639485728/vintastic/space-age-geometric-wool-rug-italy-1970s-1_yj215y.jpg', '-', '-', 'Space Age, Mid-Century', '1970s', 'Excellent', '1', 1, 1905, 0, '2022-01-07 14:56:54', NULL, NULL),
(20, '61effb54e0d7a', 'Garden Egg', 'The both of chairs are marked with the manufacturer stamps / see photos / and originally dated 1.Oct.1974 and 27.Aug.1974. The original condition, including the original cloth upholstery Lacquered surface with normal traces of use - abrasions. The Garden Egg chair was designed by the Hungarian émigré Peter Ghyczy 1968, who started his working career as chief designer for the Polyurethane factory \'Elastogran GmbH\' in Lemförde (West Germany). The license to produce the chair was sold to the VEB Synthesewerk Schwarzheide close to the city of Senftenberg. The latter gives the chair its other name, the \'Senftenberg Egg\'. Officially, one third of their production was for the West German market, the rest for East Germany and for export. The production was halted in 1975 as the lacquering remained problematic, yet the chair became and iconic \'east\' German product, due to its popularity in trade shows and exhibitions / Jana Scholze - Garden egg chair by Peter Ghyczy, 1968 - Victoria and Albert Museum.', 'Beautiful garden chair by Peter Ghyczy', 3, 8, 'https://res.cloudinary.com/dezwo7e6f/image/upload/v1639485735/vintastic/space-age-garden-egg-by-peter-ghyczy-1960s-1_uunsv0.jpg', 'Peter Ghyczy', 'VEB Synthesewerk Schwarzheide', 'Space Age, Vintage', '1970s', 'Good', '1', 1, 1899, 0, '2022-01-07 15:56:54', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_material_junction`
--

CREATE TABLE `product_material_junction` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `material_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product_material_junction`
--

INSERT INTO `product_material_junction` (`id`, `product_id`, `material_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(5, 2, 1),
(6, 2, 2),
(7, 3, 2),
(8, 4, 6),
(9, 5, 6),
(10, 6, 16),
(11, 6, 1),
(12, 7, 15),
(13, 7, 2),
(14, 8, 3),
(15, 9, 21),
(16, 10, 19),
(17, 10, 1),
(18, 11, 17),
(19, 11, 16),
(20, 12, 3),
(21, 13, 5),
(22, 14, 22),
(23, 15, 2),
(24, 15, 19),
(25, 16, 1),
(26, 16, 8),
(27, 16, 14),
(28, 17, 1),
(29, 18, 6),
(30, 19, 3),
(31, 20, 13);

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `cat_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`, `cat_id`) VALUES
(1, 'Table lamps', 1),
(2, 'Wall lights', 1),
(3, 'Ceiling lights', 1),
(4, 'Clocks', 2),
(5, 'Vases', 2),
(6, 'Coat racks', 2),
(7, 'Tables', 3),
(8, 'Chairs', 3),
(9, 'Rugs and carpets', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `edited_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `mailing_list` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `first_name`, `last_name`, `password`, `created_at`, `edited_at`, `deleted_at`, `mailing_list`) VALUES
(21, 'root', 'root@root', 'root', 'root', '$2y$10$rmJ9ZZ1P056YqzcfJfXSKulF0mwOHqURdfcVP50iRdpJwwFbZpcky', '2022-01-19 11:37:07', NULL, NULL, 1),
(31, 'mithrandir', 'Gandalf@istar.me', 'Gandalf', 'Grey', '$2y$10$k47hoxcDDYTTPHfStGw8aO63fH0BabzOh7VTnYTXp00yWxppHXd4i', '2022-01-26 14:38:10', NULL, NULL, 1),
(32, 'curunir', 'Saruman@istar.me', 'Saruman', 'White', '$2y$10$kO3mloa.0BgzyYO../YVROYnmnf4S9Juv67DG7t9K86VfUKHIUJzu', '2022-01-26 14:38:10', NULL, NULL, 0),
(33, 'aiwendil', 'Radagast@istar.me', 'Radagast', 'Brown', '$2y$10$4pvUeqAWSBzxrA2q9684Xud0S9WRv.KqrMaQKhkDOtVRtx8OVS/j2', '2022-01-26 14:38:10', NULL, NULL, 1),
(34, 'orald', 'TomB@withywindle.me', 'Tom', 'Bombadil', '$2y$10$vPIYglxgLCDqVSPvV0qHH.1m3gWuen7cOhIh5EksIPsrdWTFEdfSK', '2022-01-26 14:38:10', NULL, NULL, 0),
(35, 'pippin', 'Ptook@shire.me', 'Peregrin', 'Took', '$2y$10$3QljDPK3ocYfIYMT7/3U3uocNOHD0QMxkfrmxwj4QM4VxV/caVIrG', '2022-01-26 14:38:10', NULL, NULL, 1),
(36, 'merry', 'Mbran@shire.me', 'Meriadoc', 'Brandybuck', '$2y$10$NENRyltIoMr7J9.P6skhnuE/RBzZwtvWD43jeGf4ixAuuFTCS7Bnu', '2022-01-26 14:38:10', NULL, NULL, 0),
(37, 'sam', 'Gardenlover@shire.me', 'Samwise', 'Gamgee', '$2y$10$OFTlSlsk7AbGd39hTwS2HODSou5ytu3JRcnxlps0nyLvJJ8.FqFVC', '2022-01-26 14:38:10', NULL, NULL, 1),
(38, 'underhill', 'MrUnderhill@shire.me', 'Frodo', 'Baggins', '$2y$10$GAeKVusFbJRc.IQHvDfxf.lexFco435p0XdOcgPs848aO6A6BwQ2q', '2022-01-26 14:38:10', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `p_id` (`p_id`);

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `material` (`material`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`,`subcategory`),
  ADD KEY `subcategory` (`subcategory`);
ALTER TABLE `products` ADD FULLTEXT KEY `name` (`name`,`description`,`short`);

--
-- Indexes for table `product_material_junction`
--
ALTER TABLE `product_material_junction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `material_id` (`material_id`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `product_material_junction`
--
ALTER TABLE `product_material_junction`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD CONSTRAINT `billing_addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `order_products`
--
ALTER TABLE `order_products`
  ADD CONSTRAINT `order_products_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`subcategory`) REFERENCES `subcategories` (`id`);

--
-- Constraints for table `product_material_junction`
--
ALTER TABLE `product_material_junction`
  ADD CONSTRAINT `product_material_junction_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_material_junction_ibfk_2` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`);

--
-- Constraints for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
