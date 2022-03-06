import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from '../utils/generateToken.js'

export const register = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400).json({
            message:"User with that email already exists"
        })
    }
    else{
        const user = await User.create({
            name, email, password
        })
        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token:generateToken(user._id)
            })
        }
        else{
            res.status(400).json({
                message:"Invalid user data"
            })
        }
    }
})

export const login = asyncHandler(async (req,res) => {
    const { email, password } = req.body
    const userExists = await User.findOne({ email })
    if(userExists){
        if(await userExists.matchPassword(password)) {
            const retObject = {...userExists._doc}
            delete retObject.password
            res.status(200).json({
                ...retObject,
                token: generateToken(userExists._id),
            })
        }
        else{
            res.status(401).json({
                message:"Bad credentials"
            })
        }
    }
    else{
        res.status(404).json({
            message:"User not found"
        })
    }
})
