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

// Registration route
app.post("/register", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) { 
      return res.status(400). json({ error: "Missing fields" });
    }

// Simulate DB save
    res.status(201).json({ message: `Registered: ${name} (${email})` });
    });
    

app.get('/user/:id', (req, res) => {
  res.json({ id: req.params.id, name: "Sample User"});  
});

app.listen(3000, () => console.log('API live on port 3000'));
