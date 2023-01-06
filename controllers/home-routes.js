const router = require('express').Router();

//HOMEPAGE
router.get("/", (req,res) => {
    try{
        res.render("homepage",{ data: "Here is your data"});
    } catch(err) {
        console.log(err)
    }
});

router.get("/blog/:id", (req, res) => {

// Bring in a model and make a qquery for some data
// const blogData = await Blog.findByPk(req.params.id)
// const blog = blogData.get({plain:true})



    res.render("blog",{ 
        // blog,
        data: "User created"
    });
})

// router.get("/", (req, res)=> {
//     res.send({ data: "User updated"});
// })

// router.get("/", (req, res)=> {
//     res.send({ data: "User deleted"});
// })

//LOGIN
router.get("/login", async (req, res) => {
    try{
        res.render('login')
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;