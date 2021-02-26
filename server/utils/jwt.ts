import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface RequestCustom extends Request {
  decoded?: any;
}

function Check(req: RequestCustom, res: Response, next: NextFunction) {
  const token: any = req.headers["x-access-token"] || req.query.token;

  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "not logged in",
    });
  }

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get("jwt-secret"), (err: any, decoded: any) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  // if it has failed to verify, it will return an error message
  const onError = (error: any) => {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  };

  // process the promise
  p.then((decoded) => {
    req.decoded = decoded;
    next();
  }).catch(onError);
}

export default Check;
