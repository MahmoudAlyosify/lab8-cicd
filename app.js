const express = require('express');
const os = require('os');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'taskdb',
  password: process.env.DB_PASSWORD || 'password',
  port: 5432,
});

app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    const tasks = result.rows;
    const grouped = Object.groupBy(tasks, task => task.status);
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: 'DB error' });
  }
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
