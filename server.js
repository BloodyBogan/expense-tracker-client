const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

require('dotenv').config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/transactions', require('./routes/Transactions.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
