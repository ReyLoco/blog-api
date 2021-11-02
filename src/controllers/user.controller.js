import * as Cnt from "../constants";
import { getPagination } from "../lib/getPagination";
import User from "../models/User";
/********** User Controller *************/

export const createUser = async (req, res) => {
  try {
    const { name, surname, email, password, address, location, province, country, phone, birthdate } = req.body;

    if (!name || !surname || !email || !password) res.status(400).json({ sucess: false, message: Cnt.ER_CREATE_REQ });

    const newUser = new User({ name, surname, email, password, address, location, province, country, phone, birthdate });
    const savedUser = await newUser.save();
    res.json({ sucess: true, message: Cnt.TX_US_CREATE, savedUser });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_CREATE_CAT, error });
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const { size, page, name } = req.query;

    // console.log("Entrada: ", size, page, name)

    let data = {};

    if (!size && !page && !name) {
      data = await User.find().select("-password");
      res.json({
        totalItems: data.length,
        users: data,
        totalPages: 1,
        currentPage: 1,
      });
    } else {
      const { limit, offset } = getPagination(page, size);

      const condition = name
        ? {
            name: { $regex: new RegExp(name), $options: "i" },
          }
        : {};
      const select = "-password"

      // console.log(offset, limit, condition)

      data = await User.paginate(condition, { offset, limit, select });

      // console.log(...data.docs)

      res.json({
        totalItems: data.totalDocs,
        users: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ sucess: false, message: Cnt.ER_FINDALL, error });
  }
};

export const findOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");

    if (!user) return res.status(404).json({ message: Cnt.ER_NOTFOUND1 + id + Cnt.ER_NOTFOUND2 });

    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ sucess: false, message: Cnt.ER_FINDONE, error });
  }
};

export const findUserByName = async (req, res) => {
  try {
    let textToFind = new RegExp(req.params.text, "i");

    const users = await User.find({
      $or: [{ name: textToFind }, { surname: textToFind },],
    }).select("-password");

    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ sucess: false, message: Cnt.ER_FINDNAME, error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({ message: deletedUser.name + Cnt.TX_DELETE });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_DELETE, error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: updatedUser.name + Cnt.TX_UPDATE });
  } catch (error) {
    res.status(500).json({ sucess: false, message: Cnt.ER_UPDATE, error });
  }
};

/********** User Controller *************/
