SELECT * FROM sakila.actor;
SELECT * FROM film_actor;
SELECT * FROM film;
#Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;

DELIMITER $$

CREATE PROCEDURE ShowBestActors()
BEGIN
	SELECT actor_id, COUNT(*) AS `quantidade de filmes` FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
    
END $$

DELIMITER ;

CALL ShowBestActors();

-- -----------------------------------------------------------------------------------------------------------

#Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
SELECT * FROM film;
SELECT * FROM film_category;
SELECT * FROM category;
USE sakila;

DELIMITER $$

CREATE PROCEDURE getCategory(IN categoryParam VARCHAR(50))

BEGIN
	SELECT F.film_id, F.title, FI.category_id, C.`name` 
    FROM film AS F 
    INNER JOIN film_category AS FI 
    ON F.film_id = FI.film_id
    INNER JOIN category AS C 
    ON FI.category_id = C.category_id 
    WHERE C.name = categoryParam;
END $$

DELIMITER ;

CALL getCategory('Action');


#Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
SELECT * FROM customer;
DELIMITER $$

CREATE PROCEDURE RetornarClienteAtivo(IN emailCliente VARCHAR(100), OUT statusCliente CHAR(1))
BEGIN
	SELECT `active` AS EstadoCliente FROM customer WHERE email = emailCliente;
END $$

DELIMITER ;

CALL RetornarClienteAtivo('SANDRA.MARTIN@sakilacustomer.org', @statusCliente);

SELECT IF(@statusCliente = 1, 'Active', 'Inactive');





