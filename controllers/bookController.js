const db = require('../config/db');

// GET semua buku
exports.getAllBooks = (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

// GET buku berdasarkan ID
exports.getBookById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM books WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Buku tidak ditemukan' });
    res.json(result[0]);
  });
};

// POST tambah buku
exports.createBook = (req, res) => {
  const { title, author, year, price, stock } = req.body;
  db.query(
    'INSERT INTO books (title, author, year, price, stock, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
    [title, author, year, price, stock],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ message: 'Buku berhasil ditambahkan', id: result.insertId });
    }
  );
};

// PUT update buku
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, year, price, stock } = req.body;
  db.query(
    'UPDATE books SET title=?, author=?, year=?, price=?, stock=? WHERE id=?',
    [title, author, year, price, stock, id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Buku tidak ditemukan' });
      res.json({ message: 'Buku berhasil diperbarui' });
    }
  );
};

// DELETE buku
exports.deleteBook = (req, res) => {
  const {id} = req.params
  db.query('DELETE FROM books WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json ({message:errr.message});
    if (result.affectedRows === 0) return res.status(404).json({message: 'buku tidak ditemukan'});
    res.json({message: 'Buku berhasil dihapus'});

  });
};
