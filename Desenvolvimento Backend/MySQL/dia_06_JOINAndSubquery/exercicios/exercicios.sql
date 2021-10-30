#Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT M.title, B.international_sales, B.domestic_sales FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id;

# Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT M.title, B.international_sales, B.domestic_sales FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id WHERE B.international_sales > B.domestic_sales;

#Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT title, rating FROM Pixar.Movies AS M 
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id ORDER BY B.rating DESC;

#Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM Pixar.Theater AS T LEFT JOIN Pixar.Movies AS M ON M.id = T.id ORDER BY title ASC;

#Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM Pixar.Movies AS M RIGHT JOIN Pixar.Theater AS T ON M.theater_id = T.id ORDER BY T.name ASC;

#Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

SELECT title FROM Pixar.Movies WHERE id IN(
	SELECT movie_id FROM Pixar.BoxOffice
    WHERE rating > 7.5
);

SELECT P.title FROM Pixar.Movies AS P JOIN Pixar.BoxOffice AS B ON P.id = B.movie_id AND B.rating > 7.5;

#Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

# Usando subquery
SELECT rating FROM Pixar.BoxOffice WHERE movie_id IN(
	SELECT id FROM Pixar.Movies
    WHERE year > 2009
);

# Usando inner join

SELECT rating FROM Pixar.BoxOffice AS B JOIN Pixar.Movies AS M ON B.movie_id = M.id AND M.year > 2009;

#Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT * FROM Movies;
SELECT `name`, location FROM Pixar.Theater AS T WHERE EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = T.id
);

#Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT `name`, location FROM Pixar.Theater AS T WHERE NOT EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = T.id
);





