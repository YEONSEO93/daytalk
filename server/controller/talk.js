import * as talkRepository from '../data/talk.js';

export function getTalks(req, res) {
  const username = req.query.username;
  const data = username ? talkRepository.getAllByUsername(username)
  : talkRepository.getAll;
  res.status(200).json(data);
}

export function getTalk(req, res, next) {
  const id = req.params.id;
  const talk = talkRepository.getById(id);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({ message: `Talk id(${id})`});
  }
}

export function createTalk(req, res, next) {
  const { text, name, username } = req.body;
  const talk = talkRepository.create(text, name, username);
  res.status(201).json(talk);
}

export function updateTalk(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const talk = talkRepository.update(id, text);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({ message: `Talk id(${id}) not found`});
  }
}

export function deleteTalk (req, res, next) {
  const id = req.params.id;
  talkRepository.remove(id);
  res.sendStatus(204);
}