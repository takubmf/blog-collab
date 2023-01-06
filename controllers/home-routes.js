const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.render("homepage",{ data: "Here is your data"});
})

router.get("/blog/:id", (req, res)=> {

// Bring in a model and make a qquery for some data
// const blogData = await Blog.findByPk(req.params.id)
// const blog = blogData.get({plain:true})



    res.render("blog",{ 
        // blog,
        data: "User created"
    });
})

router.get("/", (req, res)=> {
    res.send({ data: "User updated"});
})

router.get("/", (req, res)=> {
    res.send({ data: "User deleted"});
})

module.exports = router;