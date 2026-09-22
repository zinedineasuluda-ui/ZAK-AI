//dotenv.config();
//const express = require('express');
//const dotenv = require('dotenv');
//const chatRoutes = require('./routes/chat');


//gconst app = express();
//app.use(express.json());

// Routes
//app.use('/chat', chatRoutes);

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Playful Assistant running on http://localhost:${PORT}`);
//});


//require('dotenv').config();

//const express = require('express');
//const chatRoutes = require('./routes/chat');


//gconst app = express();
//app.use(express.json());

// Routes
//app.use('/chat', chatRoutes);

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Playful Assistant running on http://localhost:${PORT}`);
//});


//require('dotenv').config();

//const express = require('express');
//const chatRoutes = require('./routes/chat');

//const app = express();
//app.use(express.json());

// Routes
//app.use('/chat', chatRoutes);

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Playful Assistant running on http://localhost:${PORT}`);
//});



//require('dotenv').config(); // MUST BE AT LINE 1

//const express = require('express');
//const cors = require('cors');
//const path = require('path');
//const chatRoutes = require('./routes/chat');

//const app = express();

//app.use(cors());
//app.use(express.json());

// Serve static dashboard files from the public directory
//app.use(express.static(path.join(__dirname, 'public')));

// API Routes
//app.use('/chat', chatRoutes);

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Playful Assistant running on http://localhost:${PORT}`);
//});



//require('dotenv').config();

//const express = require('express');
//const cors = require('cors');
//const path = require('path');
//const chatRoutes = require('./routes/chat');

//const app = express();

//app.use(cors());
//app.use(express.json());

// SERVE THE DASHBOARD FROM YOUR public FOLDER:
//app.use(express.static(path.join(__dirname, 'public')));

// API Routes
//app.use('/chat', chatRoutes);

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//   console.log(`Playful Assistant running on http://localhost:${PORT}`);
//});



require('dotenv').config(); // MUST BE AT LINE 1

const express = require('express');
const cors = require('cors');
const path = require('path');
const chatRoutes = require('./routes/chat');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Serve static assets from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Explicit route to serve the dashboard on GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ZAK AI running on http://localhost:${PORT}`);
});