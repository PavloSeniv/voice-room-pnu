import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { users } from "../../models";

console.log(users);

passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://localhost:3001/auth/github/callback",
    },
    async (_:unknown, __:unknown, profile, cb) => {
      // async (accessToken, refreshToken, profile, cb) => {

      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });

      // console.log(accessToken, refreshToken, profile, cb);
      const obj = {
        fullname: profile.displayName,
        username: profile.username,
        avatarUrl: profile.photos?.[0].value,
        phone: "",
        isActive: 0,
      };

      console.log(obj);

      const user = await users.create(obj);
      console.log(user);

      cb();
    }
  )
);

export { passport };
