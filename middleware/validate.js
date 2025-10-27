const validate = (req, res, next) => {
    const { title, author, year, price, stock } = req.body;
    if (!title || !author || !year || !price || !stock) {
      return res.status(400).json({ message: 'Semua kolom wajib diisi!' });
    }
    next();
  };
  
  module.exports = validate;
  