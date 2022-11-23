const jwt = require('jsonwebtoken');
const db = require('../models/index');
const User = db.User;

module.exports = {
    isAuth: async (req, res, next) => {
        let token = req.header('Authorization');
        if (!token) {
            return res.status(403).json({
                ok: false,
                msg: 'Unauthenticated user.'
            })
        }

        try {
            token = token.split(' ')[1]
            const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await User.findByPk(id, {
                attributes: {
                    exclude: ['password', 'deletedAt', 'createdAt', 'updatedAt']
                }
            })
            if (!req.user) {
                return res.status(403).json({
                    ok: false,
                    msg: 'User not found.'
                })
            }

            next();
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Server side error.'
            })
        }
    }
}