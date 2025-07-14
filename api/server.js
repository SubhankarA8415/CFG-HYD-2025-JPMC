const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('../utils/db'); // relative path adjusted for /api folder
const farmerRoutes = require('../routes/farmerroute');
const managerRoutes = require('../routes/manageroutes');
const adminRoutes = require('../routes/adminroutes');
const { errorHandler } = require('../middleware/errormiddleware');
const fileRoutes = require('../routes/fileroutes');
const paymentRoutes = require('../routes/paymentroute');
const productionRoutes = require('../routes/productionroutes');
const market = require('../routes/marketroutes');
const chatRoutes = require('../routes/chatroutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/api/ping', (req, res) => {
  console.log('✅ Ping received at /api/ping');
  res.status(200).json({ message: 'Server is working fine' });
});

// ✅ API Routes
app.use('/api/manager', managerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/excel', fileRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/production', productionRoutes);
app.use('/api/market', market);
app.use('/api/chat', chatRoutes);

// ✅ Error Handler
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🌍 Server running locally at http://localhost:${PORT}`);
  });
}

// ✅ Export as Vercel Serverless Function
module.exports = app;
module.exports.handler = serverless(app);
