import { sign } from 'core-js/fn/number';
import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.post('/', async (req, res) =>{
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            document: signinUser.email,
            token: getToken(user)
        })
    }else{
        res.status(401).send({msg: 'Invalidad email or password'});
    }
})