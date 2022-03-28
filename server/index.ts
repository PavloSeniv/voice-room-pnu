import express from "express";
import fs from "fs";
import https from "https";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import sharp from "sharp";

import AuthController from "./controllers/AuthController";

import { uploader } from "./core/uploader";
import { certHttpsOptions } from "./utils/certHttpsOptions";

dotenv.config({
  path: "server/.env",
});

import "./core/db";

import { passport } from "./core/passport";

const app = express();

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
  AuthController.getMe
);
app.get(
  "/auth/sms",
  passport.authenticate("jwt", { session: false }),
  AuthController.sendSMS
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/sms/activate",
  passport.authenticate("jwt", { session: false }),
  AuthController.activate
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  AuthController.authCallback
);

https.createServer(certHttpsOptions, app).listen(3001, () => {
  console.log("Server HTTPS Runned in 3001 port!!! ");
});

http.createServer(app).listen(3002, () => {
  console.log("Server HTTP Runned in 3002 port!!!");
});

// app.listen(3001, () => {
//   console.log("Server Runned!!!");
// });
