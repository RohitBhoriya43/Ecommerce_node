const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
// const { protect } = require('./middlewares/authMiddleware');
const errorHandler = require('./utils/global.errors');

dotenv.config({path:"config/config.env"});

const app = express();
app.use(bodyParser.json());
// app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);


// mongoose.connect(process.env.MONGO_URI, )
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/user.route'));
app.use('/api/products', require('./routes/product.route'));
app.use('/api/orders', require('./routes/order.route'));
app.use('/api/payment', require('./routes/payment.route'));

// Error Handling Middleware
app.use(errorHandler);


module.exports = app


