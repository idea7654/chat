import Room from "../models/Room";
import User from "../models/User";
import { Request, Response } from "express";
export interface RequestCustom extends Request {
  decoded?: any;
}

function createRoom(req: RequestCustom, res: Response) {
  function create(room: any) {
    if (room.length !== 0) {
      throw new Error("이미 존재하는 채팅방입니다!");
    } else {
      return Room.create({
        users: [req.body.user.nickname, req.body.friend.nickName],
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
    users: { $all: [req.body.user.nickname, req.body.friend.nickName] },
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
      throw new Error("없는 유저입니다!");
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

export { createRoom, getRoom };
