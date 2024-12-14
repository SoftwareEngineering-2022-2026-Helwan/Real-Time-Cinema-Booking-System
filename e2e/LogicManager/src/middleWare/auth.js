import ENCRYPT from "../utils/encryptionHandler.util.js";
import { SECRET } from "../env.js";
import User from "../db/tables/user.table.js";
import JWT from "../utils/JWTClass.util.js";
import url from "url";
import Email from "../utils/maillerClass.util.js";
import path from "path";
import { fileURLToPath } from "url";
import { stat } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let encry = new ENCRYPT();
let jwt = new JWT(SECRET);

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  const user = await User.findOne({ where: { email: email.toLowerCase() } });
  if (!user || !(await encry.verifyPassword(password, user.password))) {
    return res.status(401).json({status: "fail", message: "Incorrect email or password" });
  }

//   let html = Email.getHTML(
//     path.join(__dirname, "../../public/emails/welcome.html")
//   );
//   let welEmail = new Email("support@mail.com", user.email);
//   html = html.replace("{{user}}", user.fname);
//   welEmail.sendEmail(html, "Welcome");

  const userData = {
    id: user.id,
    role: user.role,
    name: user.fname,
    email: user.email,
    phone: user.phone,
  };

  const token = jwt.createToken(userData, "90d");

  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      console.log("the user is : " + req.user);
      return res
        .status(403)
        .json({ message: "You do not have permission to perform this action" });
    }

    next();
  };
};

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(url);
  if (!token) {
    return res.status(401).json({
      message: "You are not logged in! Please log in to get access.",
    });
  }
  let decoded;
  decoded ??= await jwt.verifyToken(token);
  if (decoded) {
    decoded = jwt.decodeToken(token);
  }
  const currentUser = await User.findByPk(decoded.id);

  if (!currentUser) {
    return res.status(401).json({
      message: "The user belonging to this token does no longer exist.",
    });
  }
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return res.status(401).json({
      message: "User recently changed password! Please log in again.",
    });
  }
  req.user = currentUser;
  next();
};
export const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
