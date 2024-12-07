import {client} from "../db/index.js";

export const getKey = async (req, res, next) => {
    const { contentID } = req;
  let result;
  result ??= await client.get(contentID);
  if (result) {
    return res.status(200).json(JSON.parse(result));
  }
  next();
};

