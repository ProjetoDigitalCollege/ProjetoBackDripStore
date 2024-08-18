import jwt from 'jsonwebtoken';

const authenticateUser = (require, response, next) => {
    const authHeader = require.headers.authorization;
    
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return response.sendStatus(403);
            }
            require.user = user;
            next();
        })
    } else {
            response.sendStatus(401);
    }
};

export default authenticateUser;