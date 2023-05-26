const express = require('express'); // Now my app has access to express
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const players = {
  'christian mcCaffrey': {
    name: 'Christian Jackson McCaffrey',
    age: 26,
    birthLocation: 'Castle Rock, Colorado',
    position: 'RB',
    college: 'Stanford',
    draftYear: 2017,
    draftRound: 1,
    roundPick: 8,
    team: 'San Francisco 49ers'
  },

  'austin ekeler': {
    name: 'Austin Ekeler',
    age: 28,
    birthLocation: 'Lincoln, Nebraska',
    position: 'RB',
    college: 'Western State',
    draftYear: 2017,
    draftRound: 'undrafted',
    roundPick: 'undrafted',
    team: 'Los Angeles Chargers'
  },

  "ja'marr chase": {
    name: "Ja'Marr Anthony Chase",
    age: 23,
    birthLocation: 'Harvey, Louisiana',
    position: 'WR',
    college: 'LSU',
    draftYear: 2021,
    draftRound: '1',
    roundPick: '5',
    team: 'Cincinnati Bengals'
  },

  'shane falco': {
    name: 'Shane Falco',
    age: 34,
    birthLocation: 'Columbus, Ohio, ',
    position: 'QB',
    college: 'Ohio State',
    draftYear: 1989,
    draftRound: '1',
    roundPick: '1',
    team: 'Sharks'
  }
};

//Hear a request and respond with an html file
app.get('/', (require, response) => {
  response.sendFile(__dirname + '/index.html');
});

// The
app.get('/api/:playerName', (request, response) => {
  // We want to be able to send the client a specific player back
  // Hear the request and send the specific player. The user tell us what player they care about it
  // The URL where the user tell us what player do they want is the request
  // :playerName is a queryParameter so we can say request.params.playerName (Austin Ekeler)
  const playersName = request.params.playerName.toLowerCase();
  // If the player in the query parameter exist in the object, respond with the player json
  if (players[playersName]) {
    response.json(players[playersName]);
  } else {
    response.json(players['shane falco']);
  }
  // response.json(players);
});

// Heroku maybe doesn't want to use the PORT we assign so we use process.env.PORT
app.listen(process.env.PORT || PORT, () =>
  console.log(`The server is running on port ${PORT}! You better go catch it! `)
);
