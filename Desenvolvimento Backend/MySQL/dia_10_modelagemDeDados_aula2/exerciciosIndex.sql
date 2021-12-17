USE sakila;
#DESAFIOS SOBRE INDEX

#1 Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE FULLTEXT INDEX teste_category ON category(`name`);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX teste_category ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

#2-Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX teste_addres ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX teste_addres ON sakila.address;


