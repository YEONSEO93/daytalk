import * as talkRepository from '../data/talk.js';

export async function getTalks(req, res) {
  const username = req.query.username;
  const data = await (username ? await talkRepository.getAllByUsername(username)
  : talkRepository.getAll());
  res.status(200).json(data);
}

export async function getTalk(req, res, next) {
  const id = req.params.id;
  const talk = await talkRepository.getById(id);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({ message: `Talk id(${id})`});
  }
}

export async function createTalk(req, res, next) {
  const { text, name, username } = req.body;
  const talk = await talkRepository.create(text, name, username);
  res.status(201).json(talk);
}

export async function updateTalk(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const talk = await talkRepository.update(id, text);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({ message: `Talk id(${id}) not found`});
  }
}

export async function deleteTalk (req, res, next) {
  const id = req.params.id;
  await talkRepository.remove(id);
  res.sendStatus(204);
}