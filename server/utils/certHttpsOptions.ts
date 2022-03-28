import fs from "fs";

// Cerf
export const certHttpsOptions = {
  key: fs.readFileSync("./cert/key.pem"), // путь к ключу
  cert: fs.readFileSync("./cert/cert.pem"), // путь к сертификату
};
