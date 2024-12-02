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

export async function getAll() {
  return talks;
}

export async function getAllByUsername(username) {
  return talks.filter((talk) => talk.username === username);
}

export async function getById(id) {
  return talks.find((talk) => talk.id === id);
}

export async function create(text, name, username) {
  const talk = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  talks = [talk, ...talks];
  return talk;
}

export async function update(id, text) {
  const talk = talks.find(talk => talk.id === id);
  if(talk) {
    talk.text = text;
  }
  return talk;
}

export async function remove(id) {
    talks = talks.filter( talk => talk.id !== id);
}