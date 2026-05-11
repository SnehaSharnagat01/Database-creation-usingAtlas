let express = require("express");
const userModel = require("./models/user.model");
let app = express();
app.use(express.json());

// Created User
app.post("/create-user", async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        message: "all feilds are required..",
      });
    }

    let newUser = await userModel.create({
      name,
      email,
      mobile,
      password,
    });
    return res.status(201).json({
      message: "user created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server Error",
    });
  }
});

// Read User
app.get("/User/:id", async (req, res) => {
  try {
    let {id} = req.params

    // find() se saara data array ke roop mein mil jayega
    // let allUsers = await userModel.find();
    let allUsers = await userModel.findById(id);

    res.status(200).json({
      message: "user fetched successfully",
      user: allUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching user",
    });
  }
});

// Update User
app.put("update-user", async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!mobile || !name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

  }
   catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Problem",
    });
  }
});

module.exports = app;
