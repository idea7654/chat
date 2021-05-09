import User from "../models/User";
import { Request, Response } from "express";
export interface RequestCustom extends Request {
  decoded?: any;
}

function addFriend(req: RequestCustom, res: Response) {
  const { nickname } = req.body;
  const user = req.decoded;
  function submit(user: any) {
    if (user.friends.findIndex((i: any) => i.nickname === nickname)) {
      user.friends.push({
        nickname: nickname,
      });
      return user.save();
    } else {
      res.status(403).json({
        message: "既に登録済みのフレンドです",
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
  const nickname: any = decodeURIComponent(req.query.search as any);
  function search(user: any) {
    if (user) {
      return res.json({
        user,
      });
    } else {
      throw new Error("ユーザーが存在しません");
    }
  }

  function onError(err: any) {
    res.status(409).json({
      success: false,
      message: err,
    });
  }

  User.findOne({
    nickname: nickname,
  })
    .then(search)
    .catch(onError);
}

function searchManyFriends(req: RequestCustom, res: Response) {
  const nickname: any = decodeURIComponent(req.query.search as any);
  async function search(user: any) {
    if (user.length !== 0) {
      res.json({
        user,
      });
    } else {
      throw new Error("ユーザーが存在しません");
    }
  }

  function onError(err: any) {
    res.status(409).json({
      success: false,
      message: err,
    });
  }

  User.find({
    nickname: {
      $regex: nickname,
    },
  })
    .then(search)
    .catch(onError);
}

export { addFriend, friendSearch, searchManyFriends };
