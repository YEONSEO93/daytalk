import express from 'express';
import * as talkController from '../controller/talk.js';

const router = express.Router();

// GET /talks
// GET /talks?username=:username
router.get('/', talkController.getTalks);

// GET /talks/:id
router.get('/:id', talkController.getTalk);

// POST /talks
router.post('/', talkController.createTalk);

// PUT /talks/:id
router.put('/:id', talkController.updateTalk);

// DELETE /talks/:id
router.delete('/:id', talkController.deleteTalk);

export default router;