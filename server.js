const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const User = require('./app/(auth)/user');
const cors = require('cors');
const corsOption = {origin: ['exp://153.33.75.161:8081'], credentials: true, methods: ["GET", "POST", "PUT", "DELETE"], }

app.use(cors(corsOption));
app.use(express.json());

app.get('/signup', (req, res) => {
  res.status(405).send('Signup is only available via POST.');
});

app.post('/signup', async (req, res) => {
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      console.error('Error registering user', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const uri = "mongodb+srv://scepti:admin!mongodb@cluster0.j1mrlu1.mongodb.net/users_info?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected to DB'))
    .catch((err) => console.log(err));