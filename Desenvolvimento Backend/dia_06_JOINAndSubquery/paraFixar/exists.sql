SELECT * FROM Books;
SELECT * FROM Books_Lent;

SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT Id, Title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = book_id
);

SELECT Id, Title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent 
    WHERE B.Id = book_id AND B.Title LIKE '%lost%');

SELECT `Name` FROM hotel.Customers as C
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE C.CustomerID = CustomerID
);

SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);


SELECT Id, Title FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;