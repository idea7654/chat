import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface RequestCustom extends Request {
  decoded?: any;
}

function Register(req: Request, res: Response) {
  const { email, password, nickname } = req.body;
  function create(user: any) {
    if (user) {
      throw new Error("email exists");
    } else {
      return User.create({
        email: email,
        password: password,
        nickname: nickname,
      }).then((res) => {
        console.log(res);
      });
    }
  }
  function respond() {
    res.json({
      message: "registered successfully",
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

async function check(req: RequestCustom, res: Response) {
  const user = await User.findOne({
    email: req.decoded.email,
  });
  await res.json({
    success: true,
    info: user,
  });
}

async function search(req: Request, res: Response) {
  const { email } = req.body;
  const user = await User.findOne({
    email: email,
  });
  if (user) {
    res.json({
      user: user,
    });
  } else {
    res.status(403).json({
      message: "ユーザーを探せません",
    });
  }
}

function update(req: RequestCustom, res: Response) {
  const user = req.decoded;
  console.log(req.file, typeof (req.file as any).location);
  User.findOne({ _id: user._id }, (err: any, data: any) => {
    data.message = req.body.message;
    data.nickname = req.body.nickname;
    data.image = (req.file as any).location.toString();
    data.save();
  });
  return res.json({
    success: true,
    nickname: req.body.nickname,
    message: req.body.message,
    image: (req.file as any).location.toString(),
  });
}

export { Register, login, check, search, update };
