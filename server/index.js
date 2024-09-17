const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const bcrypt = require('bcrypt');
const users = require('./users');

app.post('/login', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);

  // Find user by email
  const user = users.find((user) => user.email === email);
  console.log('user', user);
  if (!user) {
    return res.status(400).json({ message: 'Invalid email , does not exist' });
  }

  // Check if the password is correct
  const validPassword = await bcrypt.compare(password, user.password);
 
  if (!validPassword) {
    return res.status(400).json({ message: 'Password not correct' });
  }

  return res.status(200).json({ message: 'Sign up successful!', user });

   
});

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if the user already exists (in real life, you'd query your database)
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database (this example just saves it in memory)
    users.push({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({ message: 'Sign up successful!' });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user' });
  }
});


// VerifyEmail


app.get('/verifyemail',   (req, res) => {
   
  return res.status(200).json({ message: 'Sign up successful!' });

   
});


app.listen(8080, () => {
  console.log('Server running on port 8080');
});
