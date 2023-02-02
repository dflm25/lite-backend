import express from 'express';
import * as controller from '../controllers/company.controller';

const router = express.Router();

router.route('/').get(controller.index);

module.exports = router;