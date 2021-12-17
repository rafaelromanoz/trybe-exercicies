#Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , executed_action e log_date ).

USE BeeMovies;
DELIMITER $$

CREATE TRIGGER alteraValorIncreasing
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(OLD.ticket_price > NEW.ticket_price_estimation, 'Increasing', 'Decremento');
    INSERT INTO movies_logs(movie_id, executed_action, log_date) VALUES(NEW.movie_id, 'UPDATE', NOW());
    END $$
    DELIMITER ;
    
SELECT * FROM movies;
DROP TRIGGER alteraValorIncreasing;
SET SQL_SAFE_UPDATES = 0;
UPDATE movies SET ticket_price_estimation = 10 WHERE movie_id = 1;



