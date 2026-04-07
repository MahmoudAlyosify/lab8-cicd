CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL
);
INSERT INTO tasks (id, name, status) VALUES
(1, 'Milk', 'done'), (2, 'Eggs', 'done'), (3, 'Bread', 'pending'), (4, 'Butter', 'pending'), (5, 'Orange juice', 'pending');
