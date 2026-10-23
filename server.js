require ("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("My Week 2 API!")
});

// POST /user -> Accepts {name, email} and responds with "Hello, [name]!"
app.post("/user", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) { 
      return res.status(400). json({ error: "Name and email are required!" });
    }

// Simulate DB save
    res.status(200).json({ responds: `Hello, ${name}!` });
    });
    
// GET /user/:id -> Dynamic profile endpoint responding with "User [id] profile"
app.get('/user/:id', (req, res) => {
  const userid = req.params.id;
  res.json( `User ${userid} profile`);  
});

app.listen(3000, () => console.log('API live on port 3000'));
