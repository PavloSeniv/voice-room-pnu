import express from "express";
import fs from "fs";
import https from "https";
import http from "http";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import { nanoid } from "nanoid";
import sharp from "sharp";
import { Code } from "../models";
import { UserProps } from "../pages";
import { Axios } from "../core/axios";
declare global {
  namespace Express {
    interface User extends UserProps {}
  }
}

// Cerf
const httpsOptions = {
  key: fs.readFileSync("./cert/key.pem"), // путь к ключу
  cert: fs.readFileSync("./cert/cert.pem"), // путь к сертификату
};

dotenv.config({
  path: "server/.env",
});

import "./core/db";

import { passport } from "./core/passport";

const app = express();

const randomCode = (max: number = 9999, min: number = 1000) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const uploader = multer({
  storage: multer.diskStorage({
    destination: function (_, __, cb) {
      cb(null, "./public/avatars/");
    },
    filename: function (_, file, cb) {
      cb(
        null,
        // file.fieldname + "-" + nanoid(6) + "." + file.mimetype.split("/").pop()
        file.fieldname +
          "-" +
          nanoid(6) +
          "." +
          file.originalname.split(".").pop()
      );
    },
  }),
});

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.post("/upload", uploader.single("photo"), (req, res) => {
  const filePath = req.file.path;
  sharp(filePath)
    .resize(300, 300)
    .toFormat("jpeg")
    .toFile(filePath.replace(".png", ".webp"), (err) => {
      if (err) {
        throw err;
      }
      fs.unlinkSync(filePath);

      // res.json(req.file);
      res.json({
        url: `/avatars/${req.file.filename.replace(".png", ".webp")}`,
      });
    });
});

app.get("/test", (req, res) => {
  res.json("Test Server Working");
});

app.get(
  "/auth/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

app.get(
  "/auth/sms/activate",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userId = req.user.id;
    const smsCode = req.query.code;

    if (!smsCode) {
      return res.status(400).send();
    }

    const whereQuery = { code: smsCode, user_id: userId };

    try {
      const findCode = await Code.findOne({
        where: whereQuery,
      });

      if (findCode) {
        await Code.destroy({
          where: whereQuery,
        });
        return res.send();
      } else {
        throw new Error("User not found ");
      }
    } catch (error) {
      res.status(500).json({
        message: "Erroe when activate account",
      });
    }
  }
);

app.get(
  "/auth/sms",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const phone = req.query.phone;
    const userId = req.user.id;
    const smsCode = randomCode();
    if (phone) {
      return res.status(400).send();
    }
    try {
      // await Axios.get(
      //   `https://sms.ru/send?send_id=${process.env.SMS_API_KEY}&to=${process.env.SMS_API_PHONE}&msg=${smsCode}`
      // );
      await Code.create({
        code: smsCode,
        user_id: userId,
      });
      res.status(201).send();
    } catch (error) {
      res.status(500).json({
        message: "Erroe when sending SMS",
      });
    }

    // const data = await Axios.post(
    //   "https://api-gateway.kyivstar.ua/mock/rest/v1beta",
    //   (req, res) => {
    //     const code = {
    //       from: "messagedesk",
    //       to: "38 (067) 273-67-51",
    //       text: "Hello World!",
    //     };
    //     return req.code.body;
    //   }
    // );
  }
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home.
    // res.redirect("/");
    // res.send();
    // res.json(req.user);
    res.send(
      `<script>window.opener.postMessage('${JSON.stringify(
        req.user
      )}','*');window.close()</script>`
    ); // автоматичне закриття вікна
  }
);

https.createServer(httpsOptions, app).listen(3001, () => {
  console.log("Server HTTPS Runned in 3001 port!!! ");
});

http.createServer(app).listen(3002, () => {
  console.log("Server HTTP Runned in 3002 port!!!");
});

// app.listen(3001, () => {
//   console.log("Server Runned!!!");
// });
