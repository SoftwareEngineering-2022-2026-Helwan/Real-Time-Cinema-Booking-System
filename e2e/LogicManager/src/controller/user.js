import User from "./../db/tables/user.table.js";
import { client } from "../db/index.js";
import JWT from "../utils/JWTClass.util.js";
import ENCRYPT from "../utils/encryptionHandler.util.js";
import { SECRET } from "../env.js";
import { fn, Model } from "sequelize";
import Reservation from "./../db/tables/reservation.table.js";
import { hash } from "bcrypt";
import Cinema from "../db/tables/cinema.table.js";
import { Sequelize } from "sequelize";
import path from "path";
import Email from "../utils/maillerClass.util.js";
import { fileURLToPath } from "url";
import { stat } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let jwt = new JWT(SECRET);
let encryption = new ENCRYPT();

//admin function

export const createVendor = async (req, res) => {
  const { fname, lname, phone, email, password } = req.body;
  let hashedPassword = await encryption.encrypt(password);
  const role = "vendor";
  let newUser;
  newUser ??= await User.create({
    fname,
    lname,
    phone,
    email,
    role,
    password: hashedPassword,
  });

  if (newUser) {
    client.set("user" + newUser.id, JSON.stringify(newUser));

    return res.status(201).json({
      message: "Vendor Created ",
    });
  } else {
    res.status(500).json({ message: "Error creating User" });
  }
};
export const getVendors = async (req, res) => {
  let users;
  users ??= await User.findAll({
    where: { role: "vendor" },
    attributes: [
      "id",
      "phone",
      "fname",
      [Sequelize.fn("COUNT", Sequelize.col("Cinemas.ID")), "cinemaCount"],
    ],
    include: [
      {
        model: Cinema,
        required: false,
        attributes: [],
      },
    ],
    group: ["User.id"],
  });

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({ message: "Error fetching Users" });
  }
};
export const getVendor = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  try {
    const vendor = await User.findByPk(id, {
      attributes: [
        "id",
        "phone",
        "fname",
        [Sequelize.fn("COUNT", Sequelize.col("Cinemas.ID")), "cinemaCount"],
      ],
      include: [
        {
          model: Cinema,
          required: false,
          attributes: [],
        },
      ],

      group: ["User.id"],
    });
    console.log(vendor);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    client.set(`vendor${id}`, JSON.stringify(vendor));
    res.status(200).json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vendor" });
  }
};
export const deleteVendor = async (req, res) => {
  const { id } = req.params;
  console.log("id is :", id);
  let vendor;
  vendor ??= await User.destroy({ where: { id: id } });
  if (vendor === 0) {
    return res.status(404).json({ message: "Vendor not found" });
  } else {
    res.status(200).json({ message: "Vendor deleted successfully" });
  }
};

export const updateVendor = async (req, res) => {
  const { id } = req.params;
  const { fname, lname, phone, email, password } = req.body;
  if (!fname || !lname || !phone || !email || !password) {
    return res.status(400).json({ message: "Please provide all data" });
  }
  const vender = await User.findByPk(id);
  if (!vender) {
    return res.status(404).json({ message: "User not found" });
  }
  vender.fname = fname;
  vender.lname = lname;
  vender.phone = phone;
  vender.email = email;
  vender.password = await encryption.encrypt(password);

  await vender.save();
  client.set("vender" + vender.id, JSON.stringify(vender));
  res.status(200).json({
    message: "Vendor updated successfully please login again ",
  });
};
// vendor function
export const getVendorCinema = async (req, res) => {
  const id = req.params.id;
  try {
    const vendor = await User.findByPk(id, {
      attributes: [],
      include: [
        {
          model: Cinema,
          required: false,
          attributes: ["name", "ID", "Location"],
        },
      ],
    });
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    client.set(`vendor${id}`, JSON.stringify(vendor));
    res.status(200).json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vendor" });
  }
};
export const updateMe = async (req, res) => {
  const { id } = req.params;
  const { fname, lname, phone, email, password } = req.body;
  if (!fname || !lname || !phone || !email || !password) {
    return res.status(400).json({ message: "Please provide all data" });
  }
  const vender = await User.findByPk(id);
  if (!vender) {
    return res.status(404).json({ message: "User not found" });
  }
  vender.fname = fname;
  vender.lname = lname;
  vender.phone = phone;
  vender.email = email;
  vender.password = await encryption.encrypt(password);

  await vender.save();
  const venderId = {
    id: vender.id,
  };
  const token = jwt.createToken(venderId, "90d");
  client.set("vender" + vender.id, JSON.stringify(vender));
  res.status(200).JSON({
    status: "success",
    token,
    data: {
      vender,
    },
  });
};
// user function
export const createUser = async (req, res) => {
  const { fname, lname, phone, email, password } = req.body;
//   console.log(fname, lname, phone, email, password);
  let hashedPassword = await encryption.encrypt(password);
  let newUser;
  newUser ??= await User.create({
    fname,
    lname,
    phone,
    email,
    password: hashedPassword,
  });
  const userid = {
    id: newUser.id,
    email: newUser.email,
    fname: newUser.fname,
    phone: newUser.phone,
    role: newUser.role,
  };
  let token = jwt.createToken(userid, "90d");

  if (newUser) {
      let html = Email.getHTML(
    path.join(__dirname, "../public/emails/welcome.html")
  );
  let welEmail = new Email("support@mail.com", newUser.email);
  html = html.replace("{{name}}", newUser.fname);
  welEmail.sendEmail(html, "Welcome");
    return res.status(201).json({
      status: "success",
      token,
      data: {
        newUser,
      },
    });
  } else {
    res.status(500).json({ message: "Error creating User" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  let user;
  user ??= await User.findByPk(id, {
    attributes: ["id", "fname", "lname", "phone", "email"],
    include: [{ model: Reservation, required: false }],
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    client.set("user" + user.id, JSON.stringify(user));
    // console.log("user id :" + user.Reservation);

    await res.status(200).json({
      status: "success",

      data: {
        user,
      },
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  let user;
  user ??= await User.destroy({ where: { id: id } });
  if (user === 0) {
    return res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User deleted successfully" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fname, lname, phone, email, password } = req.body;
  if (!fname || !lname || !phone || !email) {
    return res.status(400).json({ message: "Please provide all data" });
  }
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if(password == null){
      user.password = user.password
  }
  else{
      user.password = await encryption.encrypt(password);
  }
  console.log(user.password);
  user.fname = fname;
  user.lname = lname;
  user.phone = phone;
  user.email = email;

  await user.save();
  const token = jwt.createToken({ id: user.id, role: user.role, email: user.email, name: user.fname, phone: user.phone }, "90d");
  client.set("user" + user.id, JSON.stringify(user));
  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
// verify token for front
export const verifyToken = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "token is verified",
  });
};
