#Desafio 1
SELECT product_name FROM northwind.products;

#Desafio 2

SELECT * FROM northwind.products;

#Desafio 3

SELECT id FROM northwind.products;

#Desafio 4

SELECT COUNT(product_name) FROM northwind.products;

#Desafio 5

SELECT * FROM northwind.products LIMIT 10 OFFSET 3;

#Desafio 6

SELECT product_name, id FROM northwind.products ORDER BY product_name ASC;

#Desafio 7

SELECT * FROM northwind.products ORDER BY id LIMIT 5;

#Desafio 8

SELECT 5+6 AS A, 'de' AS Trybe, 2+8 AS eh;

#Desafio 9

SELECT notes FROM northwind.purchase_orders WHERE notes IS NOT NULL;

#Desafio 10

SELECT * FROM northwind.purchase_orders WHERE created_by >= 3 ORDER BY id, created_by DESC, id;

#Desafio 11

SELECT notes FROM northwind.purchase_orders  WHERE notes LIKE '%#3%';

#Desafio 12

SELECT submitted_date FROM northwind.purchase_orders WHERE DATE(submitted_date) = '2006-04-26';

#Desafio 13

SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id IN(1,3);

#Desafio 14

SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id >=1 AND supplier_id <= 3;

#Desafio 15

SELECT HOUR(submitted_date) AS submitted_hour FROM northwind.purchase_orders;

#Desafio 16

SELECT submitted_date FROM northwind.purchase_orders WHERE submitted_date 
BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';

#Desafio 17

SELECT id, supplier_id FROM northwind.purchase_orders WHERE supplier_id IN(1,3,5,7);

#Desafio 18

SELECT * FROM northwind.purchase_orders WHERE supplier_id = 3 AND status_id = 2;

#Desafio 19

SELECT COUNT(*) AS orders_count FROM northwind.orders WHERE employee_id IN(5,6) AND shipper_id = 2;

#Desafio 20

SET SQL_SAFE_UPDATES = 0;

INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id,date_allocated, purchase_order_id, inventory_id)
VALUES(69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);

#Desafio 21

INSERT IGNORE INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id,date_allocated, purchase_order_id, inventory_id)
VALUES(69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129),
(69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);

#Desafio 22

UPDATE northwind.order_details
SET discount = 15;

#desafio 23

UPDATE northwind.order_details SET discount = 30 WHERE unit_price < 10.0000;

#Desafio 24

UPDATE northwind.order_details SET discount = 45 WHERE unit_price > 10.0000 AND id BETWEEN 30 AND 40;

#Desafio 25

DELETE FROM northwind.order_details WHERE unit_price < 10.0000;

#Desafio 26

DELETE FROM northwind.order_details WHERE unit_price > 10.0000;

#Desafio 27
SELECT * FROM northwind.order_details;
TRUNCATE northwind.order_details;











