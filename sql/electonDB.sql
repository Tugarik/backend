--
-- Database: `electonDB`
--

DROP DATABASE IF EXISTS electonDB;
CREATE DATABASE IF NOT EXISTS electonDB;
USE electonDB;

SELECT 'CREATING DATABASE STRUCTURE' as 'INFO';


-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `categoryName` varchar(50) NOT NULL
) AUTO_INCREMENT=1000;

-- --------------------------------------------------------

--
-- Table structure for table `Brand`
--

CREATE TABLE `brand` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `brandName` varchar(50) NOT NULL
) AUTO_INCREMENT=2000;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userRole` enum('Admin','Moderator','User') NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL UNIQUE,
  `userPhone` int(11) NOT NULL,
  `userAddress_1` varchar(255),
  `userAddress_2` varchar(255),
  `userImage` varchar(255),
  `regDate` date NOT NULL
)AUTO_INCREMENT=10000;

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(1000),
  `image_url` varchar(500),
  `price` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `brand` int(11) NOT NULL,
  `rating` double(3,1),
  `reviews` int(11),
  `stock` int(11) NOT NULL,
  `sale` int(11) NOT NULL,
  `createdBy` int(11) NOT NULL,
  `createdDate` date NOT NULL,
  FOREIGN KEY (`createdBy`) REFERENCES `user` (`id`),
  FOREIGN KEY (`brand`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`category`) REFERENCES `category` (`id`) ON DELETE CASCADE
) AUTO_INCREMENT=4000;

-- --------------------------------------------------------

--
-- Table structure for table `Spec`
--

CREATE TABLE `spec` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `property` varchar(255),
  `value` varchar(255),
  FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE
) AUTO_INCREMENT=3000;

-- --------------------------------------------------------

--
-- Table structure for table `Wishlist`
--

CREATE TABLE `wishlist` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE
) AUTO_INCREMENT=5000;

--
-- Loading Data for all entities
--
SELECT 'LOADING brands' as 'INFO';
source load_brands.dump ;
SELECT 'LOADING categories' as 'INFO';
source load_categories.dump ;
SELECT 'LOADING users' as 'INFO';
source load_users.dump ;
SELECT 'LOADING products' as 'INFO';
source load_products.dump ;
-- SELECT 'LOADING specs' as 'INFO';
-- source load_specs.dump ;
-- SELECT 'LOADING wishlist' as 'INFO';
-- source load_wishlist.dump ;

COMMIT;


