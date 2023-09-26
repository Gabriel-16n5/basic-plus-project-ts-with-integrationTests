import express, {Request, Response} from "express"
import User from "../protocols/user-protocol";
import { createUserr, getUserss, deleteUser, updateUser, getUserssId } from "../services/users-service"
import httpStatus from "http-status";

export async function  createUsers(req: Request, res: Response) {
    const body = req.body as User
    try {
        createUserr(body);
        res.sendStatus(httpStatus.CREATED);
      } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.BAD_REQUEST);
      }
}

export async function getUsers (req: Request, res: Response) {
    const users = await getUserss();
    res.send(users);
}

export async function getUsersId (req: Request, res: Response) {
    const {id} = req.params;
    const userId: number = parseInt(id, 10)
    const users = await getUserssId(userId);
    res.send(users);
}

export async function deleteUsers (req: Request, res: Response) {
    const {id} = req.params;
    const userId: number = parseInt(id, 10)
    try {
      deleteUser(userId);
      res.sendStatus(httpStatus.OK);
    } catch (error) {
      console.log(error);
      res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function updateUsers (req: Request, res: Response) {
  const user:User = req.body;
  try {
    updateUser(user);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}