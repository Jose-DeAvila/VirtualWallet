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
            phone: '3205037785',
            money: 0
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
            res.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                document: signinUser.document,
                phone: signinUser.phone,
                money: signinUser.money,
                token: getToken(signinUser)
            });
        }else{
            res.status(401).send({msg: 'Invalidad email or password 1'});
        }
    }catch(error){
        console.log(error.message);
    }
});

router.post('/register', async (req, res) =>{
    try{
        const user = new User({
            phone: req.body.phone,
            document: req.body.document,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            money: 0
        });
        const newUser = await user.save();
        if(newUser){
            res.send({
                _id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                document: newUser.document,
                phone: newUser.phone,
                money: 0,
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

router.post("/reload", async (req, res)=>{
    try{
        const dataUser = await User.findOne({document: req.body.document});
        if(dataUser){
            res.send({
                _id: dataUser.id,
                name: dataUser.name,
                email: dataUser.email,
                document: dataUser.document,
                phone: dataUser.phone,
                money: req.body.value,
            })
        }else{
            res.status(401).send({msg: 'Not found'})
        }
    }
    catch(error){
        console.log(error.message);
    }
});

export default router;