const express = require("express")
const router = express.Router()
const User = require("../model/User");


const registerUserController = async (req,res) => {
    const {fullName,email,password} = req.body

    const userExists = await User.findOne({email})
    if(userExists){
        res.json({
            message: "User already exists"
        })
    }

    const user = await User.create({
        fullName,
        email,
        password
    });

    res.status(201).json({
        status: "success",
        message: "user registered successfully",
        data: user
    })
}

module.exports = [registerUserController]