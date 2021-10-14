import { Router } from "express";
import User from "../models/User";
/********** ROUTER *************/
const router = Router();

router.get("/", async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

router.post("/", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const newUser = new User({ name, surname, email, password });
    const savedUser = await newUser.save();
    res.json({ sucess: true, message: "Usuario Guardado", savedUser });
  } catch (error) {
    res.json({ sucess: false, message: "Error al guardar el usuario", error });
  }
});

export default router;

/********** ROUTER *************/
