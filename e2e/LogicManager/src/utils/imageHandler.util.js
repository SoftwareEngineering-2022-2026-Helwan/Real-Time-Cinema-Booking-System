import fs   from "fs";
import path from "path";
import os   from "os";

class ImageHandler {
  #basePath = path.resolve(__dirname, "../public/img");

  saveImage(imageFile) {
    return new Promise((resolve, reject) => {
      const imageName = imageFile.originalname;
      const destinationPath = path.join(this.#basePath, imageName);

      if (!fs.existsSync(this.#basePath)) {
        fs.mkdirSync(this.#basePath, { recursive: true });
      }

      fs.writeFile(destinationPath, imageFile.buffer, (err) => {
        if (err) {
          console.error("Error saving image:", err);
          reject(err);
        } else {
          console.log("Image saved successfully:", destinationPath);
          resolve(destinationPath);
        }
      });
    });
  }

  getHostIP() {
    const networkInterfaces = os.networkInterfaces();
    let hostIP = "localhost";

    for (let interfaceName in networkInterfaces) {
      networkInterfaces[interfaceName].forEach((network) => {
        if (network.family === "IPv4" && !network.internal) {
          hostIP = network.address;
        }
      });
    }

    return hostIP;
  }

  getPort() {
    return process.env.port || 3000;
  }

  getImage(imageName) {
    const filePath = path.join(this.#basePath, imageName);

    if (fs.existsSync(filePath)) {
      const hostIP = this.getHostIP();
      const port = this.getPort();

      const imageUrl = `http://${hostIP}:${port}/public/img/${imageName}`;
      return imageUrl;
    } else {
      return "Image not found";
    }
  }
}

module.exports = ImageHandler;
