
 const express = require('express');
 const app = express()
 const port = 3000
 
 
 app.use(express.json());
 
 app.post('/echo', (req, res) => {
  res.json({ echoed: req.body}); //req.body now available!   
 })
 
 
 app.get('/', (req, res) => {
   res.send('My Week 2 API!')
 })
 
 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })
