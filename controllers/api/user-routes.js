const router = require('express').Router();
const { User } = require('../../models');

// SIGN UP

router.post('/', async (req, res) => {
  console.log("USER create",req.body)
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email:req.body.email
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.email = newUser.email;
      req.session.loggedIn = true;
     console.log(newUser,req.session)
      res.json(newUser);
    });
  } catch (err) {
    console.log(err,"Signup")
    res.status(500).json(err);
  }
});

// LOGIN

router.post('/login', async (req, res) => {
  console.log("Login",req.body)
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log("Login",err)
    res.status(400).json({ message: 'No user account found!' });
  }
});

// LOGOUT

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;