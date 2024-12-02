import express from 'express';
import * as talkRepository from '../data/talk.js';

const router = express.Router();

// GET /talks
// GET /talks?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username ? talkRepository.getAllByUsername(username)
  : talkRepository.getAll;
  res.status(200).json(data);
});

// GET /talks/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const talk = talkRepository.getById(id);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({message: `Talk id(${id}) not found`});
  }
});
// POST /talks
router.post('/', (req, res, next) => {
  const {text, name, username} = req.body;
  const talk = talkRepository.create(text, name, username);
  res.status(201).json(talk);
});

// PUT /talks/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const talk = talkRepository.update(id, text);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({ message: `Talk id(${id}) not found`});
  }
});

// DELETE /talks/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  talkRepository.remove(id);
  res.sendStatus(204);
});
export default router;