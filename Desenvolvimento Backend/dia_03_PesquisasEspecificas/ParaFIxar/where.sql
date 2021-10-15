SELECT * FROM sakila.film WHERE length <> 50 ORDER BY length;

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

#Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org . As informações podem ser encontradas na tabela customer
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

USE sakila;
SELECT first_name FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, release_year, replacement_cost FROM sakila.film 
WHERE  rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT * FROM sakila.customer;
SELECT COUNT(*) FROM sakila.customer WHERE active IS TRUE AND store_id = 1;

SELECT * FROM sakila.customer WHERE active IS FALSE AND store_id = 1; 

SELECT title FROM sakila.film WHERE rating = 'NC-17' ORDER BY title ASC LIMIT 50;