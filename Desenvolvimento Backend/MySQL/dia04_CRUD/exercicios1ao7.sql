SELECT * FROM Pixar.Movies;
SET SQL_SAFE_UPDATES = 0;

# Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
INSERT INTO Pixar.Movies (title, director,`year`, length_minutes)
VALUES('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os incríveis', 'Brad Bird', 2004, 116),
('Wall-e', 'Pete Docter', 2008, 104);

#Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .

SELECT * FROM Pixar.BoxOffice;

#Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .

INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES(8, 6.8, 450000000, 370000000);

 #O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .

UPDATE Pixar.Movies SET director = 'Andrew Staton' WHERE title = 'Procurando Nemo';

UPDATE Pixar.Movies SET title = 'Ratatoile', year = 2007 WHERE title = 'Ratatouille';

#Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :

INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES(9,9.5,30000000,25000000),
(10,7.4,4600000,5100000),
(11,9.9,2900000, 28000000);

#Exercício 6 : Exclua da tabela Movies o filme "WALL-E".
SELECT * FROM Pixar.Movies WHERE title= 'Wall-e';

DELETE FROM Pixar.BoxOffice WHERE movie_id IN(11,15);

DELETE FROM Pixar.Movies WHERE title = 'Wall-e';
# Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton"
SELECT * FROM Pixar.Movies WHERE director = 'Andrew Staton';

DELETE FROM Pixar.BoxOffice WHERE movie_id IN(2,9,13);

DELETE FROM Pixar.Movies WHERE director = 'Andrew Staton';








