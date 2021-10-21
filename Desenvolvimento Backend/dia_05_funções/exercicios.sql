#Escreva uma query que exiba o maior salário da tabela.

SELECT MAX(SALARY) FROM hr.employees;

#Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

#Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

SELECT AVG(SALARY) AS media_salario FROM hr.employees GROUP BY JOB_ID ORDER BY media_salario DESC; 

#Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(SALARY) FROM hr.employees;

#Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2) FROM hr.employees;

#Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG'; 

#Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;

#Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, SUM(SALARY) AS soma_salario FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

#Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, AVG(SALARY) AS media_salario FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG' ORDER BY media_salario DESC;

#Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT DEPARTMENT_ID, AVG(SALARY) AS `average_salary`, COUNT(*) AS `number_of_employees` FROM hr.employees GROUP BY DEPARTMENT_ID HAVING number_of_employees > 10;

#Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

SELECT REPLACE(PHONE_NUMBER, '515', '777') FROM hr.employees;

#Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

SELECT * FROM hr.employees WHERE char_length(FIRST_NAME) >= 8;

#Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, LEFT(HIRE_DATE, 4) FROM hr.employees;

#Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, MID(HIRE_DATE, 6,2) FROM hr.employees;

#Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT UCASE(FIRST_NAME) FROM hr.employees;

#Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987 ;

#Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(HIRE_DATE, CURRENT_DATE()) AS 'days_worked' FROM hr.employees;

 







