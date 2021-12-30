const {Router} = require('express');
const authController = require('../controllers/authController');
const router = Router();


router.get('/retsiger', authController.reg_get);
router.post('/retsiger', authController.reg_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);



module.exports = router;