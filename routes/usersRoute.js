const express = require("express");
const User = require("../model/User");
const router = express.Router();

const userController = require("../controllers/usersController")
router.post("/api/v1/users/register",userController)


/*router.post("/api/v1/users/register",async (req,res) => {

    let user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })

    user = await user.save()

    if(!user){
        res.status(400).send("not save user")
    }

    res.status(200).send(user);
})
*/

module.exports = router;