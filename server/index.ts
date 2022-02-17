import express from "express";
import fs from "fs";
import https from "https";
import http from "http";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import { nanoid } from "nanoid";

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

const uploader = multer({
  storage: multer.diskStorage({
    destination: function (_, __, cb) {
      cb(null, "./public/avatars/");
    },
    filename: function (_, file, cb) {
      cb(
        null,
        file.fieldname + "-" + nanoid(6) + "." + file.mimetype.split("/").pop()
      );
    },
  }),
});

app.use(cors());

app.use(passport.initialize());

app.post("/upload", uploader.single("photo"), (req, res) => {
  res.json(req.file);
});

app.get("/test", (req, res) => {
  res.json("Test Server");
});

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
