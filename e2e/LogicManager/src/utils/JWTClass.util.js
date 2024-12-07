import jwt from "jsonwebtoken";

class JWT {
  #Secret;
  constructor(secret) {
    this.#Secret = secret;
  }
  createToken(data, expireDate) {
    return jwt.sign(data, this.#Secret, {
      expiresIn: expireDate,
    });
  }
  async verifyToken(token) {
    try {
      await jwt.verify(token, this.#Secret);
      return true;
    } catch (err) {
      console.error("Token verification failed:", err);
      return false;
    }
  }

   decodeToken(token) {
    const decoded = jwt.decode(token);
    return decoded ? decoded : "no valid token";
  }
}
module.exports = JWT;  