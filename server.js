const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const books = {
  'the lighting thief': {
    title: 'The Lighting Thief',
    release: 'July 1, 2005',
    genre: ['Fantasy', 'Young Adult', 'Greek Mithology'],
    pages: 377,
    author: 'Rick Riordan',
  },
  'the sea of monsters': {
    title: 'The Sea of Monsters',
    release: 'April 1, 2007',
    genre: ['Fantasy', 'Young Adult', 'Greek Mithology'],
    pages: 279,
    author: 'Rick Riordan',
  },
  "the titan's curse": {
    title: "The Titan's Curse",
    release: 'May 1, 2007',
    genre: ['Fantasy', 'Young Adult', 'Greek Mithology'],
    pages: 312,
    author: 'Rick Riordan',
  },
  'the battle of the labyrinth': {
    title: 'The Battle of the Labyrinth',
    release: 'May 6, 2008',
    genre: ['Fantasy', 'Young Adult', 'Greek Mithology'],
    pages: 361,
    author: 'Rick Riordan',
  },
  'the last olympian': {
    title: 'The Last Olympian',
    release: 'May 5, 2009',
    genre: ['Fantasy', 'Young Adult', 'Greek Mithology'],
    pages: 381,
    author: 'Rick Riordan',
  },
  unknown: {
    title: 'Book not found',
    release: '----',
    genre: '----',
    pages: '----',
    author: '----',
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/books/:bookTitle', (request, response) => {
  const bookName = request.params.bookTitle.toLowerCase();
  if (books[bookName]) {
    response.json(books[bookName]);
  } else {
    response.json(books['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
