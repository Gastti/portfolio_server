const db = require('../models/index');
const Role = db.Role;

module.exports = {

    isAdmin: async (req, res, next) => {
        if(!req.user) {
            return res.status(500).json({
                ok: false,
                msg: 'The token must be verified first.'
            })
        }

        const { roleId } = req.user;
        const { name } = await Role.findByPk(roleId);

        if (name !== 'Administrator') {
            return res.status(401).json({
                ok: false,
                msg: "Unauthorized user."
            })
        }

        next();
        
    }

}
