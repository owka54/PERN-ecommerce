CREATE TABLE IF NOT EXISTS users (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    email varchar(50),
    password varchar(50),
    firstName varchar(50),
    lastName varchar(50)
);

CREATE TABLE IF NOT EXISTS products (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    name varchar(50) NOT NULL,
    price money NOT NULL,
    description varchar(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    total money NOT NULL,
    status varchar(50) NOT NULL,
    userId int NOT NULL,
    created date NOT NULL,
    modified date NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS orderItems (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    created date NOT NULL,
    orderId int  NOT NULL,
    qty int NOT NULL,
    price int NOT NULL,
    productId int NOT NULL,
    name varchar(50) NOT NULL,
    description varchar(200) NOT NULL,
    FOREIGN KEY (orderId) REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS carts (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    userId int NOT NULL,
    modified date NOT NULL,
    created date NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS cartItems (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    cartId int NOT NULL,
    productId int NOT NULL,
    quantity int NOT NULL,
    FOREIGN KEY (cartId) REFERENCES carts(id),
    FOREIGN KEY (productId) REFERENCES products(id)
);