#1-Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
SELECT * FROM category;
SELECT * FROM film_category;
SELECT * FROM film;

USE sakila;
CREATE VIEW filme_with_categories AS 
	SELECT f.title, fc.category_id, c.`name` FROM film AS f INNER JOIN film_category AS fc ON f.film_id = fc.film_id INNER JOIN category AS c ON c.category_id = fc.category_id ORDER BY f.title;
    
SELECT * FROM filme_with_categories;

#2-Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

USE sakila;
CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name,a.last_name) AS `actor`, title FROM actor AS a INNER JOIN film_actor AS fc ON a.actor_id = fc.actor_id INNER JOIN film AS f ON fc.film_id = f.film_id ORDER BY `actor`;
SELECT * FROM film_info;

#3-Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
SELECT * FROM city;
SELECT * FROM address;
USE sakila;
CREATE VIEW addres_info AS
SELECT address_id,address,district, a.city_id,city FROM city AS c INNER JOIN address AS a ON c.city_id = a.city_id ORDER BY c.city;
SELECT * FROM addres_info;

#4-Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.
SELECT * FROM film;
SELECT * FROM language;
CREATE VIEW movies_languages AS 
SELECT title, f.language_id, l.name FROM film AS f INNER JOIN language AS l ON f.language_id = l.language_id;

SELECT * FROM movies_languages;



