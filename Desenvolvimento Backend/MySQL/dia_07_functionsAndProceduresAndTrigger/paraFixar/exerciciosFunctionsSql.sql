/*USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;*/

#Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
SELECT * FROM sakila.customer;
USE sakila;

DELIMITER $$

CREATE FUNCTION QuantidadeTotalDePagamentos(idCustomer INT)
RETURNS INT READS SQL DATA
 BEGIN 
	DECLARE quantidadeTotal INT;
	SELECT SUM(amount) FROM sakila.payment WHERE customer_id = idCustomer
    INTO quantidadeTotal;
 RETURN quantidadeTotal;
 END $$
 
 DELIMITER ;
 
 SELECT QuantidadeTotalDePagamentos(1);
 
 #Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
 USE sakila;
 
 DELIMITER $$
 
CREATE FUNCTION NomeFilmeInventario(idDoInventario INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE tituloFilme VARCHAR(100);
	SELECT f.title FROM film AS f INNER JOIN inventory AS i ON f.film_id = i.film_id WHERE i.inventory_id = idDoInventario
    INTO tituloFilme;
    RETURN tituloFilme;
END $$

DELIMITER ;

SELECT NomeFilmeInventario(1);

#Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
SELECT * FROM category;
SELECT * FROM film_category;

USE sakila;

DELIMITER $$

CREATE FUNCTION QuantidadeTotalDeFilmes(categoriaFilme VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidadeFilmes INT;
	SELECT COUNT(f.film_id) FROM film_category AS f INNER JOIN category AS c ON f.category_id = c.category_id WHERE categoriaFilme = c.`name` INTO quantidadeFilmes;
    RETURN quantidadeFilmes;
END $$

DELIMITER ;

SELECT QuantidadeTotalDeFilmes('Horror');


 