/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as MemberService from "./members.service";
 import { BaseMember, Member } from "./member.interface";
 
 /**
  * Router Definition
  */
 export const membersRouter = express.Router();
 
 /**
  * Controller Definitions
  */
  membersRouter.get("/", async (req: Request, res: Response) => {
    try{
        const Members: any = await MemberService.findAll();
        console.log(Members);
        
        res.status(200).send(Members);
    }
    catch(ex){
        res.status(500).send(ex.message);
    }
});