const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Step-by-Step Flow of protect Middleware

// Extract token from headers

// Look in req.headers.authorization for Bearer <token>

// If token does not exist → respond 401 Not authorized and stop

// Verify token

// Use jwt.verify(token, JWT_SECRET)

// Checks:

// Token is valid

// Token is signed with your secret

// Token is not expired

// Get user info from token

// Decoded token contains { id } (user ID)

// Fetch full user from database using User.findById(decoded.id)

// Attach user to req.user so controllers can use it

// Call next()

// If everything is valid, move to the next middleware or controller

// If any error occurs → respond 401 Not authorized

// One-Line Memory Rule

// Token → extract → verify → get user → attach to req → next() → controller can use it.

exports.protect = async(req , res ,next) => {
    let token;

    //check if token in headers
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }


    //make sure token exists

    if(!token){
        return res.status(401).json({message : "Not authoirzed to access this route"});
    }

    try{
        //verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        //Get user from token
        req.user = await User.findById(decoded.id);

        next();
    }catch(error){
        return res.status(401).json({message:"Not authorized to access this route"});
    }
}