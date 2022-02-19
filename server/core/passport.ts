import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { users } from "../../models";
import { UserProps } from "../../pages";
import { createJwtToken } from "../utils/createJwtToken";

// console.log(users);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    done(null, jwt_payload.data);
  })
);

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
        let userData: UserProps;
        const obj: Omit<UserProps, "id"> = {
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
          userData = user.toJSON();
          // console.log(user);
        } else {
          userData = await findUser.toJSON();
        }
        done(null, { ...userData, token: createJwtToken(userData) });
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
