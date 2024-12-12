import express from 'express';
import * as talkController from '../controller/talk.js';
import {body} from 'express-validator';
import {validate} from '../middleware/validator.js';

const router = express.Router();

const validateTalk = [
  body('text')
  .trim()
  .isLength({min: 3})
  .withMessage('text should be at least 3 characters'),
  validate
];

// GET /talks
// GET /talks?username=:username
router.get('/', talkController.getTalks);

// GET /talks/:id
router.get('/:id', talkController.getTalk);


// POST /talks
router.post('/', validateTalk, talkController.createTalk);

// PUT /talks/:id
router.put('/:id', validateTalk, talkController.updateTalk);

// DELETE /talks/:id
router.delete('/:id', talkController.deleteTalk);

export default router;