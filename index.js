import express from 'express';

const app = express();
const port = 3000;

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// GET Movie by ID
app.get('/movies/:id', (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id == id) {
      res.json(movie);
      return;
    }
  }

  res.status(404).send('Movie not found');
});

// POST Movie list
app.post('/movies', (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.send('Movie is added to the data');
});

// DELETE Movie
app.delete('/movies/:id', (req, res) => {
  const id = req.params.id;
  movies = movies.filter((movie) => {
    if (movie.id != id) {
      return true;
    }

    return false;
  });

  res.send('Movie is deleted');
});

// PUT Movie
app.put('/movies/:id', (req, res) => {
  const id = req.params.id;
  const newMovie = req.body;

  const index = movies.findIndex((movie) => {
    return movie.id == id;
  });

  if (index !== -1) {
    movies[index] = { ...movies[index], ...newMovie };
    res.send('Movie is edited');
  } else {
    res.status(404).send('Movie not found');
  }
});

// Set the server to listen on port 3000
app.listen(port, () => console.log(`Server running on port ${port}`));
