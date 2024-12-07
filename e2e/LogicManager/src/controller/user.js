import User from "./../db/tables/user.table.js";
import {client} from "../db/index.js";

export const createUser = async (req, res) => {
  try {
    const { fname, lname, phone, email, role, password } = req.body;
    const cinema = await User.create({
      fname,
      lname,
      phone,
      email,
      role,
      password,
    });
    res.status(201).json(cinema);
  } catch (error) {
    res.status(500).json({ message: "Error creating User", error });
  }
};
export const getUsers = async (req, res) => {
  let users;
  users ??= await User.findAll();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({ message: "Error fetching Users" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  let user;
  user ??= await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    client.set("user" + id, user);
    await res.status(200).json(cinema);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  let user;
  user ??= await User.destroy({ where: { id: id } });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User deleted successfully" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.body;
  const { fname, lname, phone, email, role, password } = req.body;
  let user;
  user ??= await User.update(
    { fname, lname, phone, email, role, password },
    { where: { id: id } }
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User updated successfully" });
  }
};
