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


--------------------------------------------------------


-- SQL challenge March 6, 2023:

--1--  select * from employees where officeCode = (select officeCode from offices where city = 'San Francisco');
--2--  select count(officeCode) from employees a where a.officeCode = SOME (select b.officeCode from offices b where b.country = 'USA');
--3--  select b.city, count(*) from employees a inner join offices b on a.officeCode = b.officeCode group by b.city;
--4--  select customerName, creditLimit from Customers ORDER By creditLimit desc limit 1;
--5--  select customerName, creditLimit from Customers where city = 'NYC' ORDER By creditLimit desc limit 1;

--6--  select customerNumber, count(*) from payments group by customerNumber order by count(*) desc limit 1;
--6--  select customerNumber, sum(amount) from payments group by customerNumber order by sum(amount) desc limit 1;

--7--  select a.customerNumber, b.amount, a.creditLimit from customers a inner join payments b on a.customerNumber = b.customerNumber where a.creditLimit < b.amount;
--8--  select sum(amount) from payments where paymentDate > '2003-05-06';
--9--  select * from customers where customerNumber = ANY (select distinct customerNumber from payments where paymentDate > '2003-05-06');
--10-- select * from customers a inner join orders b on a.customerNumber = b.customerNumber where b.status <> 'Shipped';
--11-- select * from customers a inner join orders b on a.customerNumber = b.customerNumber where b.shippedDate > b.requiredDate;
--12-- select * from customers where customerNumber = (select customerNumber from orders group by customerNumber order by count(*) desc limit 1);
--13-- select * from products where productCode = (select productCode from orderDetails order by quantityOrdered desc limit 1);
--14-- select sum(a.quantityOrdered) from orderDetails a inner join products b on a.productCode = b.productCode where b.productLine = 'Planes' ;
--15-- select b.productLine, sum(a.quantityOrdered * a.priceEach) amount from orderDetails a inner join products b on a.productCode = b.productCode where b.productLine = 'Classic Cars' ;
--16-- select a.productCode, sum(a.quantityOrdered) as 'Sold in 2003' from orderdetails a inner join orders b on a.orderNumber= b.orderNumber where YEAR(b.orderDate) = 2003 group by a.productCode;
--17-- select a.productCode, count(orderNumber) from orderdetails a inner join products b on a.productCode = b.productCode where b.quantityInStock < 100  group by a.productCode;
--18-- select * from products where buyPrice > (select avg(buyPrice) from products);
--19-- select * from products where quantityInStock = (select max(quantityInStock) from products);

--20 order and oayment details of customer103 
-- select * from orders o left join orderdetails d ON o.orderNumber = d.orderNumber  where o.customerNumber=103\G;
-- select * from payments where customerNumber = 103;


--for KhangaiBagsh-- select * from orders o left join orderdetails d ON o.orderNumber = d.orderNumber  left join payments p ON o.customerNumber = p.customerNumber where o.customerNumber=103 limit 1\G;
