============A=============
CREATE TABLE stock (
id SERIAL primary key,
fruit VARCHAR(255) not null,
description VARCHAR(255),
quantity integer,
price decimal);


============B=============
DROP TABLE stock;



============C=============
Create the Table 

CREATE TABLE ExC (
EMPLOYEE_ID SERIAL primary key,
first_name VARCHAR(255),
last_name VARCHAR(255),
salary integer,
contract_length integer);

populate the Table

INSERT INTO exc (first_name, last_name, salary, contract_length) VALUES ('Steven', 'King', 10000, 3);
INSERT INTO exc (first_name, last_name, salary, contract_length) VALUES ('Neena', 'Kochhar', 8000, 2);
INSERT INTO exc (first_name, last_name, salary, contract_length) VALUES ('David', 'Austin', 12000, 2);
INSERT INTO exc (first_name, last_name, salary, contract_length) VALUES ('Nancy', 'Greenberg', 3000, 1);

1) SELECT first_name, last_name FROM exc WHERE salary > 5000 AND salary < 11000;
2) SELECT first_name, last_name FROM exc WHERE contract_length < 2;

3)
INSERT INTO exc (first_name, last_name, salary, contract_length) VALUES ('James', 'Bond', 70000, 6);
INSERT INTO exc (first_name, last_name, salary, contract_length) VALUES ('Wilson', 'Football', 4, 1);

4)
UPDATE exc SET salary = 8000, contract_length = 2 WHERE first_name = 'Nancy';

5)
SELECT * FROM exc ORDER BY salary DESC; 