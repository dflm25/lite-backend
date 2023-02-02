import express from 'express';
import authRoutes from './auth.route';
import companyRoutes from './company.route';

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/auth', authRoutes);
router.use('/companies', companyRoutes);
// router.use('/docs', express.static('docs'));

module.exports = router;