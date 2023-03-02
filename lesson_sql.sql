-- SELECT first_name FROM employees WHERE emp_no = (SELECT emp_no FROM salaries WHERE salary = (SELECT MAX(salary) FROM salaries));
-- SELECT gender, count(*) FROM employees GROUP BY gender;
-- SELECT count(*) FROM employees;
-- SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

-- UPDATE Customers
-- SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
-- WHERE CustomerID = 1;

-- DELETE 
-- FROM Customers 
-- WHERE CustomerName = 'Alfreds Futterkiste';

-- CREATE TABLE Spec (
-- id int NOT NULL AUTO_INCREMENT,
-- productId int NOT NULL,
-- property varchar(255),
-- value varchar(255),
-- PRIMARY KEY (id),
-- FOREIGN KEY (productId) REFERENCES Products(id)
-- );



-- CREATE TABLE Users (id int NOT NULL AUTO_INCREMENT, userName varchar(50) NOT NULL, userRole ENUM ('Admin','Moderator', 'User')  NOT NULL, userPassword varchar(255) NOT NULL, userEmail varchar(255) NOT NULL UNIQUE, userPhone INT NOT NULL, userAddress_1 varchar(255), userAddress_2 varchar(255), userImage varchar(255), regDate DATE NOT NULL, PRIMARY KEY (id));
-- CREATE TABLE Products (id int NOT NULL AUTO_INCREMENT,ProductName varchar(255) NOT NULL,categoryId int NOT NULL,brandId int NOT NULL,productPrice int NOT NULL,productStock int NOT NULL,productDesc varchar(1000), productDiscount int,productImage varchar(255),createdBy int NOT NULL,createdDate DATE NOT NULL, PRIMARY KEY (id), FOREIGN KEY (createdBy) REFERENCES Users(id) );
-- CREATE TABLE Wishlist ( id int NOT NULL AUTO_INCREMENT, userId int NOT NULL, productId int NOT NULL, PRIMARY KEY (id), FOREIGN KEY (userId) REFERENCES Users(id), FOREIGN KEY (productId) REFERENCES Products(id) );
-- CREATE TABLE Brand ( id int NOT NULL AUTO_INCREMENT, brandName varchar(50) NOT NULL, PRIMARY KEY (id));
-- CREATE TABLE Spec (id int NOT NULL AUTO_INCREMENT, productId int NOT NULL, property varchar(255), value varchar(255), PRIMARY KEY (id), FOREIGN KEY (productId) REFERENCES Products(id));