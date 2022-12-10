function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403)
    return res.send('You need to sign in')
  }

  next()
}

function authRole(role) {
    return (req, res, next) => {
      
      if (req.user.levelOfAccess !== role) {
        return res.status(401).send("Not allowed");
      }
  
      next();

    };
  }
  
  module.exports = { authRole };