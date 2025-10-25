import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import generationRoutes from './routes/generation';
import { errorHandler } from './utils/errorHandler';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Correct CORS Configuration
app.use(cors({
  origin: [
    'https://nodeapp-1-4o66.onrender.com',   // ✅ Your frontend on Render
    'http://localhost:3000'                  // ✅ For local development
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dockgen')
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });

// ✅ Main API Routes
app.use('/api/generation', generationRoutes);

// ✅ Health Check Endpoint (use /health, not /api/health)
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'DockGen AI Backend'
  });
});

// Global Error Handler
app.use(errorHandler);

// ✅ Start the Server
app.listen(PORT, () => {
  console.log(`🚀 DockGen AI Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log('🔑 CORS allowed for: https://nodeapp-1-4o66.onrender.com, http://localhost:3000');
});

export default app;
