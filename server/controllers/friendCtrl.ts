import User from "../models/User";
import { Request, Response } from "express";
export interface RequestCustom extends Request {
  decoded?: any;
}

function addFriend(req: RequestCustom, res: Response) {
  const { nickName } = req.body;
  const user = req.decoded;
  function submit(user: any) {
    if (user.friends.findIndex((i: any) => i.nickName === nickName)) {
      user.friends.push({
        nickName: nickName,
      });
      return user.save();
    } else {
      res.status(403).json({
        message: "이미 등록된 친구입니다!",
      });
    }
  }

  function respond(user: any) {
    res.json({
      message: "success",
      user: user,
    });
  }

  function onError(err: any) {
    throw new Error(err.message);
  }

  User.findOne({
    _id: user._id,
  })
    .then(submit)
    .then(respond)
    .catch(onError);
}

function friendSearch(req: Request, res: Response) {
  const nickName: any = decodeURIComponent(req.query.search as any);
  function search(user: any) {
    if (user) {
      return res.json({
        user,
      });
    } else {
      throw new Error("없는 유저입니다!");
    }
  }

  function onError(err: any) {
    res.status(409).json({
      success: false,
      message: err,
    });
  }

  User.findOne({
    nickname: nickName,
  })
    .then(search)
    .catch(onError);
}

export { addFriend, friendSearch };
