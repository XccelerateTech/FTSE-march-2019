table creation

CREATE TABLE stock (
id SERIAL primary key,
quantity integer,
price decimal,
citrus_id integer);

populate the table

INSERT INTO stock (quantity, price, citrus_id) VALUES (33,25,1);
INSERT INTO stock (quantity, price, citrus_id) VALUES (50,15,2);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10,35,3);
INSERT INTO stock (quantity, price, citrus_id) VALUES (0,20,4);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10,20,5);


SELECT citrus.color AS citrus_color, stock.quantity AS stock_quantity
FROM citrus
JOIN stock
on citrus.id = stock.citrus_id;

====================A=========================

SELECT quantity, name FROM citrus FULL OUTER JOIN stock ON citrus.id = stock.citrus_id WHERE color ='orange';
 

==================B===========================
SELECT * FROM citrus FULL OUTER JOIN stock ON citrus.id = stock.citrus_id;

