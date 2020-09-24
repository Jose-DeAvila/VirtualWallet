import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        document: user.document,
        email: user.email,
        phone: user.phone,
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    });
}

export {
    getToken
}