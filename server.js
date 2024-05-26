const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const dbPath = path.join(__dirname, 'imdb.db');
const db = new sqlite3.Database(dbPath);

app.use(express.static(__dirname));

app.get('/movies', (req, res) => {
    const sql = 'SELECT * FROM Movie';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            data: rows
        });
    });
});

app.get('/actors', (req, res) => {
    const sql = 'SELECT * FROM Actor';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            data: rows
        });
    });
});

app.get('/castings', (req, res) => {
    const sql = 'SELECT * FROM Casting';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            data: rows
        });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en https://localhost:${PORT}`);
});

