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
    async (_: unknown, __: unknown, profile, done) => {
      // (accessToken, refreshToken, profile, done) => {

      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });

      // console.log(accessToken, refreshToken, profile, done);

      try {
        const obj = {
          fullname: profile.displayName,
          username: profile.username,
          avatarUrl: profile.photos?.[0].value,
          phone: "",
          isActive: 0,
        };

        const findUser = await users.findOne({
          where: {
            username: obj.username,
          },
        });

        if (!findUser) {
          const user = await users.create(obj);
          // console.log(user);
          return done(null, user.toJSON());
        }
        done(null, findUser);
      } catch (error) {
        done(error);
      }
    }
  )
);

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
  // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  users.findById(id, function (err, user) {
    done(err, user);
  });
});
export { passport };
