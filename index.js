const express = require('express');
const path = require('path');
const app = express();

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'jon@gmail',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'James Doe',
    email: 'james@gmail.com',
    status: 'active'
  },
  {
    id: 4,
    name: 'Jessie Doe',
    email: 'jessie@gmail.com',
    status: 'inactive'
  }
];

app.get('/api/members', (req, res) => {

});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));