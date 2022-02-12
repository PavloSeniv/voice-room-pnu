import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";

passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://localhost:3001/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });

      // console.log(accessToken, refreshToken, profile, cb);
      const user = {
        fullname: profile.displayName,
        avatarUrl: profile.photos?.[0].value,
        username: profile.username,
      };

      console.log(user);

      cb();
    }
  )
);

export { passport };
