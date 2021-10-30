SELECT * FROM sakila.payment WHERE payment_id IN(269, 239, 126, 399, 142);

SELECT * FROM sakila.address WHERE district IN('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT first_name, email FROM sakila.customer 
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales','kennedy') ORDER BY first_name ASC;

SELECT email FROM sakila.customer WHERE address_id IN (172, 173, 174, 175 , 176) ORDER BY first_name;

USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year FROM sakila.film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration, title;

SELECT title, rating FROM sakila.film WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;

SELECT * FROM sakila.payment;
SELECT COUNT(*) Pagamentos FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) Pagamentos FROM sakila.payment WHERE payment_date BETWEEN '2005/07/01' AND '2005/08/22';

SELECT DATE(rental_date),
YEAR(rental_date), 
MONTH (rental_date), 
DAY(rental_date), 
HOUR(rental_date), 
MINUTE(rental_date), 
SECOND(rental_date)
FROM sakila.rental WHERE rental_id = 10330;

SELECT * FROM sakila.payment WHERE DATE(payment_date) AND HOUR(payment_date) >= 22;


