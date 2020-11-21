INSERT INTO shelfie
(product_name, price, image)
VALUES
(${product_name}, ${price}, ${image})
RETURNING *;

