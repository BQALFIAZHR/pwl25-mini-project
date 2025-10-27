const db = require('../config/db');

const Book = {
  getAll: (callback) => {
    db.query('SELECT * FROM books', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    db.query('INSERT INTO books SET ?', data, callback);
  },

  update: (id, data, callback) => {
    db.query('UPDATE books SET ? WHERE id = ?', [data, id], callback);
  },

  delete: ( id, callback) => {
    db.query('DELETE FROM books WHERE id = ?', [id], callback);
  }
};

module.exports = Book;
