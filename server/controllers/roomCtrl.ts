import Room from "../models/Room";
import User from "../models/User";
import { Request, Response } from "express";
export interface RequestCustom extends Request {
  decoded?: any;
}

function createRoom(req: RequestCustom, res: Response) {
  function create(room: any) {
    console.log(room);
    if (room.length !== 0) {
      throw new Error("既にチャットルームがあります");
    } else {
      return Room.create({
        users: [req.body.user.nickname, req.body.friend.nickname],
      })
        .then((Res) => {
          console.log(Res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function respond() {
    res.json({
      message: "success",
    });
  }

  function onError(error: any) {
    res.status(409).json({
      message: error.message,
    });
  }

  Room.find({
    users: { $all: [req.body.user.nickname, req.body.friend.nickname] },
  })
    .then(create)
    .then(respond)
    .catch(onError);
}

function getRoom(req: RequestCustom, res: Response) {
  const user = req.decoded;

  function searchRoom(user: any) {
    if (user) {
      return Room.find({
        users: { $in: [user.nickname] },
      });
    } else {
      throw new Error("ユーザーが存在しません");
    }
  }

  function respond(room: any) {
    res.json({
      room,
    });
  }

  function onError(err: any) {
    res.status(409).json({
      success: false,
      message: err,
    });
  }

  User.findOne({
    _id: user._id,
  })
    .then(searchRoom)
    .then(respond)
    .catch(onError);
}

function searchRoom(req: Request, res: Response) {
  const { users } = req.body;
  const user: string = users.user.nickname;
  const aite: string = users.aite.nickname;

  function respond(room: any) {
    res.json({
      room,
    });
  }

  function onError(err: any) {
    res.status(409).json({
      success: false,
    });
  }

  Room.find({
    users: { $all: [user, aite] },
  })
    .then(respond)
    .catch(onError);
}

export { createRoom, getRoom, searchRoom };
