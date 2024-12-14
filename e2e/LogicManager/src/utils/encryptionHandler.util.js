import bcrypt from "bcrypt";
export default class EncryptionHandler {
  #salt;
  constructor(salt = 10) {
    this.#salt = salt;
  }
  async encrypt(password) {
    try {
      const hash = await bcrypt.hash(password, this.#salt);
      return hash;
    } catch (err) {
      console.log(err);
    }
  }

  async verifyPassword(password, hash) {
    try {
      return await bcrypt.compare(password, hash);
    } catch (err) {
      console.log(err);
    }
  }
}

