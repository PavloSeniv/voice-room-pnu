import express from "express";
import fs from "fs";
import https from "https";
import dotenv from "dotenv";

// Cerf
const httpsOptions = {
  key: fs.readFileSync("./cerf/server-key.pem"), // путь к ключу
  cert: fs.readFileSync("./cerf/server-cert.pem"), // путь к сертификату
};

dotenv.config({
  path: "server/.env",
});

import "./core/db";

import { passport } from "./core/passport";

const app = express();

app.use(passport.initialize());

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // res.redirect("/");
    // res.send();
    res.json(req.user);
  }
);

https.createServer(httpsOptions, app).listen(3001, () => {
  console.log("Server Runned!!!");
});
