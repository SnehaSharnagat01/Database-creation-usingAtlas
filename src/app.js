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
    let { id } = req.params;

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
app.put("/user/update/:id", async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!mobile || !name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let { id } = req.params;
    console.log(id);

    let updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        mobile,
        password,
      },
      {
        new: true,
      },
    );
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log(updatedUser);

    return res.status(200).json({
      message: "updated user successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Problem",
    });
  }
});

// Delete User
app.delete('/user/delete/:id', async (req,res)=>{

    try {
        let {id} = req.params
     let deletedUser =   await userModel.findByIdAndDelete(id)
       return res.status(200).json({
        message:"user deleted successfully"
       })

       if(!deletedUser){
        return res.status(404).json({
            message:"user not found"
        })
       }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server Error'
        })       
    }
})

module.exports = app;
