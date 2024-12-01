import express from 'express';

let talks = [
  {
    id: '1',
    text: "welcome to DayTalk",
    createdAt: Date.now().toString(),
    name: 'Yeonseo',
    username: 'YS',
  },
  {
    id: '2',
    text: "this is a user test",
    createdAt: Date.now().toString(),
    name: 'Ko',
    username: 'Kk',
  },
];
const router = express.Router();

// GET /talks
// GET /talks?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username ? talks.filter(talk => talk.username === username)
  : talks;
  res.status(200).json(data);
});

// GET /talks/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const talk = talks.find(talk => talk.id === id);
  if(talk) {
    res.status(200).json(talk);
  } else {
    res.status(404).json({message: `Talk id(${id}) not found`});
  }
});
// POST /talks
router.post('/', (req, res, next) => {
  const {text, name, username} = req.body;
  const talk = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  talks = [talk, ...talks];
  res.status(201).json(talk);
});

// PUT /talks/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const talk = talks.find(talk => talk.id === id);
  if(talk) {
    talk.text = text;
    res.status(200).json(talk);
  } else {
    res.status(404).json({ message: `Talk id(${id}) not found`});
  }
});

// DELETE /talks/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  talks = talks.filter( talk => talk.id !== id);
  res.sendStatus(204);
});
export default router;