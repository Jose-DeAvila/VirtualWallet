import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try{
        const user = new User({
            name: 'Jose',
            email: 'joseluisdeavila01@gmail.com',
            password: '3005560374xd',
            document: '1007938709',
            phone: '3205037785'
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch(error){
        res.send({msg: error.message});
    }
})

router.post('/signin', async (req, res) =>{
    try{
        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if(signinUser){
            console.log("Hola");
            res.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                document: signinUser.email,
                phone: signinUser.phone,
                token: getToken(signinUser)
            })
        }else{
            res.status(401).send({msg: 'Invalidad email or password 1'});
        }
    }catch(error){
        console.log(error.message+"Hola");
    }
});

router.post('/register', async (req, res) =>{
    try{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            document: req.body.document,
            password: req.body.password,
            phone: req.body.phone
        });
        const newUser = await user.save();
        if(newUser){
            res.send({
                _id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                document: newUser.email,
                token: getToken(newUser)
            })
        }
        else{
            res.status(401).send({msg: 'Invalidad user data'});
        }
    }
    catch(error){
        console.log(error.message);
    }
});

export default router;