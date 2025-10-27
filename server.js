const express = require('express');
const app = express();
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// Middleware utama
app.use(express.json());
app.use(logger);

// Routes utama
app.use('/books', bookRoutes);

// Middleware error handler (harus di bawah semua routes)
app.use(errorHandler);

// Jalankan server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${process.env.PORT}`);
});
