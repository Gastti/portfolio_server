const db = require('../models/index');
const Technologies = db.Technologies;

class Controllers {

    async get(req, res) {
        try {

            const technologies = await Technologies.findAll();
            res.json({
                data: technologies
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server side error.'
            })
        }
    }

    async create(req, res) {
        const { name, description } = req.body;
        try {

            const technologie = await Technologies.create({ name, description });

            res.status(200).json({
                message: 'Technologie added.',
                data: technologie
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server side error.'
            })
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {

            const technologie = await Technologies.findByPk(id);
            if (!technologie) {
                return res.json({
                    message: 'Technologie not found.'
                })
            }

            technologie.destroy();

            res.status(200).json({
                message: 'Technologie removed.'
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Server side error.'
            })
        }
    }

}

module.exports = new Controllers();