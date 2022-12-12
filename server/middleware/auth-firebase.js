const { firebase, auth } = require("../config/admin.js");
const User = require("../models/user");

function generateToken(req, res, next) {
  auth
    .getUserByEmail(req.body.email)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.email}`);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
  next();
}
function authMiddleware(req, res, next) {
  const headerToken = req.headers.authorization;

  if (!headerToken) {
    return res.send({ message: "No token provided" }).status(401);
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    res.send({ message: "Invalid token" }).status(401);
  }

  const token = headerToken.split(" ")[1];

  auth
    .verifyIdToken(token)
    .then(async function (token, req, next) {
      req.user = await User.findOne({
        where: { email: token.email },
        raw: true,
      });

      next();
    })
    .catch(() => {
      res.send({ message: "Could not authorize" }).status(403);
    });
}

module.exports = { authMiddleware, generateToken };
