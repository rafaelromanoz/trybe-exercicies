SELECT language_id, MAX(replacement_cost) FROM sakila.film GROUP BY language_id HAVING MAX(replacement_cost)  < 20.00;

SELECT * FROM sakila.customer;
SELECT `active` AS 'aTIVO E DESATIVO',COUNT(*) AS 'Usuários ativos e inativos' FROM sakila.customer 
GROUP BY `active`;

SELECT store_id, `active`, COUNT(*) FROM sakila.customer GROUP BY store_id, `active`;

SELECT AVG(rental_duration) AS avg_rental_duration FROM sakila.film GROUP BY rating ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*) 
AS order_district 
FROM sakila.address 
GROUP BY district 
ORDER BY order_district DESC;

SELECT rating, AVG(length) AS media
FROM sakila.film
GROUP BY rating 
HAVING media
BETWEEN 115.0 AND 121.50  
ORDER BY media DESC;

SELECT rating, SUM(replacement_cost) AS soma_replacement
FROM sakila.film
GROUP by rating HAVING soma_replacement > 3950.50 ORDER BY soma_replacement;

