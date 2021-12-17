SELECT * FROM actor;
SELECT * FROM film_actor;
#Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT act.actor_id, CONCAT(act.first_name,' ', act.last_name), filmAct.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS filmAct ON act.actor_id = filmAct.actor_id;
#Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
#Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT first_name, last_name, address FROM sakila.staff 
AS sta INNER JOIN sakila.address AS addr ON sta.address_id = addr.address_id;
#Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
#Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT customer_id, first_name, last_name FROM sakila.customer AS cust INNER JOIN sakila.address AS adr 
ON cust.address_id = adr.address_id ORDER BY first_name DESC LIMIT 100;

SELECT cust.first_name, cust.email, cust.address_id, adr.address, adr.district 
FROM sakila.customer AS cust INNER JOIN sakila.address AS adr
ON cust.address_id = adr.address_id WHERE adr.district = 'California' AND cust.first_name LIKE '%rene%';


SELECT cust.first_name, COUNT(adr.address) FROM sakila.customer AS cust
INNER JOIN sakila.address AS adr ON cust.address_id = adr.address_id 
WHERE cust.active = 1 GROUP BY cust.first_name ORDER BY cust.first_name DESC;

SELECT * FROM payment;
SELECT * FROM staff;

SELECT sta.first_name, sta.last_name, AVG(pay.amount) AS media_pagamento FROM sakila.staff AS sta INNER JOIN sakila.payment AS pay ON sta.staff_id = pay.staff_id WHERE YEAR(pay.payment_date) = '2006' GROUP BY sta.first_name, sta.last_name;

SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT act.actor_id, act.first_name, fAct.film_id, film.title FROM sakila.actor AS act INNER JOIN sakila.film_actor 
AS fAct ON act.actor_id = fAct.actor_id INNER JOIN sakila.film AS film ON fAct.film_id = film.film_id;


