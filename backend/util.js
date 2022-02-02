import jwt from 'jsonwebtoken'
import config from './config';

const getToken = (user) =>{
    return jwt.sign(user,config.JWT.SECRET,{
        expiresIn: '48h'
    })
}

export {
    getToken
}