const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.paths = {
            index: '/',
            auth: '/auth',
            technologies: '/technologies',
            projects: '/projects'
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.index, require('./routes/index'));
        this.app.use(this.paths.technologies, require('./routes/technologies'));
        this.app.use(this.paths.projects, require('./routes/projects'));
        this.app.use(this.paths.auth, require('./routes/auth'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}

module.exports = Server;