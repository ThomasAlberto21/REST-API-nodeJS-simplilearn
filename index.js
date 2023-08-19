import express from 'express';

const app = express();
const port = 3000;

let movies = [
  {
    id: 1,
    name: 'The Lord of the Rings',
    year: 2004,
    author: 'J. R. R. Tolkien',
    genre: 'Fantasy',
    description:
      'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien.',
    status: 'Available',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Harry Potter',
    year: 2001,
    author: 'J. K. Rowling',
    genre: 'Fantasy',
    description:
      'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.',
    status: 'Available',
    rating: 4.8,
  },
];

// GET Movie List
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Set the server to listen on port 3000
app.listen(port, () => console.log(`Server running on port ${port}`));
