import express from "express";
import passport from "passport";

const app = express();

app.get("/auth/google", (req, res) => {
  res.send("Hello it`s server!");
});

app.post("/auth/google", passport.authenticate("local"));

app.listen(3001, () => {
  // if (err) {
  //   throw Error("Server Error!!!");
  // }
  console.log("Server Runned!!!");
});


app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);