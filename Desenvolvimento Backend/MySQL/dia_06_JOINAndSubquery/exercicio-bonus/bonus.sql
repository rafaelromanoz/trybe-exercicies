#Bônus Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT * FROM Movies AS M INNER JOIN BoxOffice AS B 
ON M.id = B.movie_id INNER JOIN Theater AS T ON M.id = T.id WHERE B.rating > 8.0;

#Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT t1.title , t1.length_minutes,t2.length_minutes, t2.title FROM Movies AS t1, Movies AS t2 WHERE t1.director = t2.director AND t1.title <> t2.title;

#Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

# Usando subquery
SELECT M.title FROM Movies AS M WHERE M.id IN (
	SELECT B.movie_id FROM BoxOffice AS B
    WHERE international_sales > 500000000 AND M.length_minutes > 110
);

#Usando inner join

SELECT M.title FROM Movies AS M INNER JOIN BoxOffice AS B ON M.id = B.movie_id 
WHERE international_sales > 500000000 AND  M.length_minutes > 110;







