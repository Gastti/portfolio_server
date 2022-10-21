const { Router } = require('express');
const router = new Router();
const Technologies = require('../controllers/technologies_controllers');

router.get('/', Technologies.get);
router.post('/', Technologies.create);
router.delete('/:id', Technologies.delete);

module.exports = router;