import { Request, Response } from 'express';
import {getUsersServices} from "./user.services.js";

export const getUsersController = async (req: Request, res: Response) => {
    try {
        console.log('========>>>> controller works');
        
        const result = await getUsersServices();
        res.json(result);
    } catch(e) {
        console.error(e, 'error in controller');
    }
}