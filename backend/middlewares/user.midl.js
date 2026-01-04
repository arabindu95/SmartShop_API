import jwt from "jsonwebtoken";

function userMiddleware(req, res, next) {
  let token = null;

  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token && req.headers.authorization) {
    //if cookie missing try to headers
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(400).json({ message: "token missing in cookie" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default userMiddleware;
