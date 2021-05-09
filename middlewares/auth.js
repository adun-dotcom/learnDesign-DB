const jwt = require('jsonwebtoken')

const auth = async (req, res, next)=>{
    try {
        const token = await req.headers.authorization.split("")[1];
        const isCustomAuth = token < 500
        let decodedData;
        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test')
        } else{
            decodedData = jwt.decode(token)
        }
    } catch (error) {
        
    }
}