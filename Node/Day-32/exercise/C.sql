Transaction

=======prepare the tables==================

INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'sweet'), ('lemon', 'yellow', 'sour'), ('lime', 'green', 'sour'), ('grapefruit', 'orange', 'bitter');

INSERT INTO stock (quantity, price, citrus_id) VALUES (200, 10,(SELECT id from citrus where name = 'orange')), (200, 10,(SELECT id from citrus where name = 'lemon')), (200, 10,(SELECT id from citrus where name = 'lime')), (200, 10,(SELECT id from citrus where name = 'grapefruit')),


--add 20 lemons 
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity + 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lemon';
COMMIT;

--add 40 oranges
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='orange';
COMMIT;

-- add 25 limes
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 25
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lime';
COMMIT;

--add 15 grapefruits
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 15
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='grapefruit';
COMMIT;

--sell 30 lemons
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'lemon';
UPDATE stock
SET quantity = quantity - 30
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lemon';
COMMIT;

--sell 20 oranges
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'orange';
UPDATE stock
SET quantity = quantity -20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='orange';
COMMIT;

--sell 20 limes
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'lime';
UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lime';
COMMIT;

--sell 10 grapefruits
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
SELECT quantity 
    FROM stock INNER JOIN citrus
        on stock.citrus_id = citrus.id
        WHERE name = 'grapefruit';
UPDATE stock
SET quantity = quantity - 10
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='grapefruit';
COMMIT;

 