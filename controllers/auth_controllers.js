const db = require('../models/index');
const User = db.User;

class Controllers {

    async register(req, res) {
        const { username, email, birthdate, password } = req.body;
        
    }

}