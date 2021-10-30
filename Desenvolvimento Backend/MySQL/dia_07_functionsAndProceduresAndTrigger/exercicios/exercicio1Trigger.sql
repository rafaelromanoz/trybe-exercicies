#Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como a data atual.
SELECT * FROM BeeMovies.movies;

USE BeeMovies;

DELIMITER $$
CREATE TRIGGER definirRelease
	BEFORE INSERT ON movies
	FOR EACH ROW
    BEGIN
    SET NEW.release_year = HOUR(now());
    END $$
DELIMITER ;

INSERT INTO BeeMovies.movies(ticket_price, ticket_price_estimation) VALUES(50, 80);

-- -------------------------------------------------------------------------------------------------------------
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER registroLog
AFTER INSERT ON movies 
FOR EACH ROW
BEGIN
INSERT INTO movies_logs(movie_id, executed_action, log_date)
VALUES(NEW.movie_id, 'Insert', NOW());
END $$

DELIMITER ;

INSERT INTO movies(ticket_price) VALUES(40);





    