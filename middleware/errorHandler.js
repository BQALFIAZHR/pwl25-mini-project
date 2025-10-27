const errorHandler = (err, req, res, next) => {
    console.error('Terjadi error:', err.stack);
    res.status(500).json({ message: 'Terjadi kesalahan pada server!' });
  };
  
  module.exports = errorHandler;
  