const fieldsCheck = require('../middlewares/fieldsCheck');
const isAdmin = require('../middlewares/isAdmin');
const isAuth = require('../middlewares/isAuth');
const isMod = require('../middlewares/isMod');

module.exports = {
    ...fieldsCheck,
    ...isAdmin,
    ...isAuth,
    ...isMod
}