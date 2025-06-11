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

export const addPoints = async (req, res) => {
  const { pointsToAdd } = req.body;
  const userId = req.userid; // From auth middleware

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated." });
  }

  if (typeof pointsToAdd !== 'number' || pointsToAdd <= 0) {
    return res.status(400).json({ message: "Points to add must be a positive number." });
  }

  try {
    const user = await users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.points = (user.points || 0) + pointsToAdd; // Ensure user.points is not NaN if initially undefined
    await user.save();

    res.status(200).json({ message: "Points added successfully", points: user.points });
  } catch (error) {
    console.error("Error adding points:", error);
    res.status(500).json({ message: "Something went wrong while adding points." });
  }
};
