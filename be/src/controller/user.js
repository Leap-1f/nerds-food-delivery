import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../model/User.Model.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error finding user: ", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// app.post("/user", async (req, res) => {
//   // const password = "Aa12345";
//   const user = await User.create({
//     name: "билгүүндөл",
//     email: "duluubagsh@gmail.com",
//     password: await hashPassword(password),
//     phoneNumber: 98765432
//   });

//   res.send(user);
// });
