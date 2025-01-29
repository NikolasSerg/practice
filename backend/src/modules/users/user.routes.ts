import { Router } from 'express';
import {getUsersController} from "./user.controllers";

export const register = (route: Router) => {
    // route.get('/users', (req, res) => {
    //     console.log('test')
    //     res.send('test response')
    // });
    route.get('/users', getUsersController);
}


export const test = () => {
    console.log('************* test ******************');
}




