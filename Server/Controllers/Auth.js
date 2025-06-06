import users from "../Models/Auth.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existinguser = await users.findOne({ email });

    if (!existinguser) {
      const newuser = await users.create({ email });

      const token = jwt.sign(
        {
          email: newuser.email,
          id: newuser._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({ result: newuser, token });
    } else {
      const token = jwt.sign(
        {
          email: existinguser.email, // ✅ fixed here
          id: existinguser._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({ result: existinguser, token });
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Something went wrong..." });
  }
};
