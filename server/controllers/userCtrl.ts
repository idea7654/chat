import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface RequestCustom extends Request {
  decoded?: any;
}

function Register(req: Request, res: Response) {
  const { email, password } = req.body;
  let newUser: any = null;
  function create(user: any) {
    if (user) {
      throw new Error("email exists");
    } else {
      return User.create({
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
      });
    }
  }
  function count(user: any) {
    newUser = user;
    return User.count({}).exec();
  }
  function assign(count: number) {
    if (count === 1) {
      return newUser.assignAdmin();
    } else {
      return Promise.resolve(false);
    }
  }
  function respond(isAdmin: boolean) {
    res.json({
      message: "registered successfully",
      admin: isAdmin ? true : false,
    });
  }
  function onError(error: any) {
    res.status(409).json({
      message: error.message,
    });
  }
  User.findOne({
    email: email,
  })
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError);
}

function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const secret = req.app.get("jwt-secret");

  function check(user: any) {
    if (!user) {
      throw new Error("login failed");
    } else {
      if (user.password === password) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            admin: user.admin,
          },
          secret
        );
        return token;
      } else {
        throw new Error("login failed");
      }
    }
  }

  function respond(token: any) {
    res.json({
      message: "login success",
      token,
    });
  }

  function onError(error: any) {
    res.status(403).json({
      message: error.message,
    });
  }

  User.findOne({
    email: email,
  })
    .then(check)
    .then(respond)
    .catch(onError);
}

function check(req: RequestCustom, res: Response) {
  res.json({
    success: true,
    info: req.decoded,
  });
}

export { Register, login, check };
