const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../config/generateToken");
const Web3 = require("web3");
// @description     Register new user
// @route           POST /api/user/
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, username, email, eth_address } = req.body;

    // res.json(req.body);
    if(!name || !username || !email || !eth_address){
        res.status(400);
        // throw new Error("Please enter all required fields");
        res.json({error: "Please enter all required fields"});
    }

    const userExists = await User.findOne({ eth_address });

    if (userExists) {
        res.status(400);
        res.json({error: "User already exists"});
        // throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        username,
        email,
        eth_address,
      });
    
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          username: user.username,
          pic: user.pic,
          eth_address: user.eth_address,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        // throw new Error("User not found");
        res.json({error: "User not found"});
      }
});


// @description     Authenticate user
// @route           POST /api/user/auth
// @access          Public
const getNonce = asyncHandler(async (req, res) => {
  const { eth_address } = req.body;
  // res.json(req.body);
  if(!eth_address){
    res.status(400);
    // throw new Error("Please enter all required fields");
    res.json({error: "Please enter all required fields"});
  }

  const userExists = await User.findOne({ eth_address });

  if (userExists) {
      res.status(200);
      res.json({nonce: userExists.nonce});
      user.nonce = Math.floor(Math.random() * 1000000);
      user.save();
      // throw new Error("User already exists");
  } else {
      res.status(404);
      res.json({error: "User not found"});
  }
});

// @description     Authenticate user
// @route           POST /api/user/auth
// @access          Public
const authUser = asyncHandler(async (req, res) => {
  const { eth_address, signature } = req.body;

  // res.json(req.body);
  if(!eth_address || !signature){
    res.status(400);
    // throw new Error("Please enter all required fields");
    res.json({error: "Please enter all required fields"});
  }

  const userExists = await User.findOne({ eth_address });

  if (userExists) {
      res.status(400);
      res.json({error: "User already exists"});
      // throw new Error("User already exists");
  }

  let original_message = `Verify your nonce: ${userExists.nonce}`;

  let recoveredAddress = Web3.eth.accounts.recover(original_message, signature);

  if (recoveredAddress.toUpperCase() === eth_address.toUpperCase()) { //verified
    res.send(JSON.stringify({
      verified: true
    }));
  } else { //failed
    res.send(JSON.stringify({
      verified: false
    }));
  }

  
});

module.exports = { registerUser, authUser, getNonce };