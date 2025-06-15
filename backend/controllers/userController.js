const User = require('../model/User');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET,{expiresIn: "7d"});
}


const registerUser = async(req,res) => {
    try {} catch (error) {
        res.status(500).json({message: "Server error",error:error.message});
    }
};

const loginUser = async(req,res) => {
    try {} catch (error) {
        res.status(500).json({message: "Server error",error:error.message});
    }
};

const getUserProfile = async(req,res) => {
    try {} catch (error) {
        res.status(500).json({message: "Server error",error:error.message});
    }
};

const updateUserProfile = async(req,res) => {
    try {} catch (error) {
        res.status(500).json({message: "Server error",error:error.message});
    }
};

module.exports = {registerUser, loginUser, getUserProfile, updateUserProfile }