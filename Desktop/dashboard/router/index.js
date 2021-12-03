const router = require('express').Router()
const controller = require('../controllers')
const dashboard = require('./dashboard')

// routes
router.get('/', controller.home)

router.use(controller.notFound)
router.use(controller.exception)

router.use('/dashboard', dashboard)
module.exports = router