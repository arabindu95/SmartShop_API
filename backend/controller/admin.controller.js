import { Admin } from "./../model/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//********* signup Controller *********
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  //password hshing
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    // validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        errors: "All fields are required",
      });
    }
    // cheacking for user exist
    const existingUser = await Admin.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: "Admin already exist",
      });
    }

    //save user with Hashpassword
    const payload = { fullName, email, password: hashPassword };
    const newAdmin = new Admin(payload);
    await newAdmin.save();
    res.status(201).json({
      success: true,
      message: " signup successfully",
      newAdmin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errors: "error in signup",
    });
    console.log(error, "error in signup show to console");
  }
};

//************** login Controller ****************
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //cheack empty fields in login
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        errors: "All fields are required",
      });
    }

    //cheack user exists
    const user = await Admin.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        errors: "invalid email address",
      });
    }

    //cheack password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    //password matching
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        errors: "incorrect password",
      });
    }

    // jwt token generate
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    //set cookie
    const cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "Strict",
    };
    //send cookie and token to browser
    res.cookie("jwt", token, cookieOption);

    res.status(200).json({
      success: true,
      message: " you are successfully login",
      token,
    });
  } catch (error) {
    res.status(500).json({
      errors: "login error",
    });
    console.log(error, "login errrors console");
  }
};

//**************logout*********************** */
export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "Strict",
    });
    res
      .status(200)
      .json({ success: true, message: " you are successfully logout" });
  } catch (error) {
    res.status(500).json({ errors: "error in logout", error });
    console.log(error);
  }
};
