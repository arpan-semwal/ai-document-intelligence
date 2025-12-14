const User = require("../models/User");
const generateToken = require("../utils/generateToken");

//@desc  Register new user
//@route POST /api/auth/register
//@access Public
//Register → check email → save user → generate token → send token + user info to client

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    //create user
    const user = await User.create({
      name,
      email,
      password,
    });

    //Generate Token
    const token = generateToken(user._id);
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


//@desc Login User
//@route POST /api/auth/login
//@access Public 

exports.login = async (req,res) => {
    try{
        const {email , password} = req.body;

        //check for user (include password for comparision)
        const user = await User.findOne({email}).select('+password');

        if(!user){
            return res.status(401).json({message:'Invalid credentials'});

        }

        //check password
        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"});

        }

        //Generate Token
        const token = generateToken(user._id);
        res.json({
            success:true,
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            }
        });
    } catch(error){
        console.error(error);
        res.status(500).json({message:"Server error", error:error.message});
    }
};



//@desc get current user
//@route GET /api/auth/me
//@access Private

exports.getMe = async (req ,res) => {
    try{
        const user = await User.findById(req.user.id);

        res.json({
            success:true,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        });
    } catch(error){
        res.status(500).json({message:"Server Error"});
    }
}


