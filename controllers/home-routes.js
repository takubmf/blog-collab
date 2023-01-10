const router = require('express').Router();
const { Post, Comment, User } = require('../models/index.js');
const withAuth = require('../utils/auth');


router.get("/", async (req,res) => {
  try { 
    // we need to get all Posts and include the User for each (change lines 8 and 9) - DONE!
    const postData = await Post.findAll({
      include: [User],
    });
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    // we should render all the posts here - DONE!
    res.render('homepage', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
   
})


router.get("/market", (req,res) => {
    res.render('market')
})

router.get("/account", (req,res) => {
    res.render('account')
})

router.get("/new-post", (req,res) => {
    res.render('new-post')
})

router.get("/messages", (req,res) => {
    res.render('messages')
})

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    // we need to get all Posts and include the User for each (change lines 8 and 9) - DONE!
    const postData = await Post.findAll({
      include: [User],
    });
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    // we should render all the posts here - DONE!
    res.render('post-admin', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {id: req.params.id},
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      // serialize the data
      const post = postData.get({ plain: true });
      // which view should we render for a single-post? - DONE!
      console.log(post);
      res.render('one-post', { post, loggedIn: req.session.loggedIn});
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// giving you the login and signup route pieces below, no changes needed.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('signup');
});

router.get("/homepage",(req,res)=>{
  res.render("homepage")
})

module.exports = router;