SET SQL_SAFE_UPDATES = 0;
#Exercício 8 : Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

SELECT * FROM Pixar.BoxOffice;

UPDATE Pixar.BoxOffice SET rating = 9.0 WHERE domestic_sales > 45000000;


#Exercício 9 : Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

UPDATE Pixar.BoxOffice SET rating = (
	CASE
    WHEN international_sales < 3000000 THEN 6.0
    WHEN domestic_sales > 2000000 THEN 6.0
    END
);

#Exercício 10 : Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT id FROM Pixar.Movies WHERE length_minutes < 10000000;
DELETE FROM Pixar.BoxOffice WHERE movie_id IN(1,3,4,5,6,7,8,10,12,14);
SELECT * FROM Pixar.Movies;
DELETE FROM Pixar.Movies WHERE length_minutes < 1000000;


