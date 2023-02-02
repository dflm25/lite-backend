import express from 'express';
import {validate} from 'express-validation';
import * as controller from '../controllers/auth.controller';
import rules from '../validations/auth.validation';

const router = express.Router();

router.route('/login').post(validate(rules.login), controller.login);
router.route('/refresh-token').post(validate(rules.refresh), controller.refresh);

module.exports = router;