const { Router } = require('express');
const router = new Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'Server is working.'
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;