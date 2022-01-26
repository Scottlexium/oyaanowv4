const {Router} = require('express');
const authController = require('../controllers/authController');
const router = Router();



router.get('/', authController.homepage_get);
router.get('/retsiger', authController.reg_get);
router.post('/retsiger', authController.reg_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.post('/book', authController.book_post);
router.get('/book', authController.book_get);
router.post('/choose', authController.choose_post);
router.get('/choose', authController.choose_get);
router.post('/paid', authController.paid_post);
router.get('/details', authController.details_get);
router.post('/details/customer', authController.customer_post);
router.get('/details/customer', authController.customer_get);
router.get('/pdf', authController.pdf_get);
router.post('/load-bus', authController.loadbus_post);
router.get('/getbuses', authController.getbuses_get);
router.get('/getbus/:id', authController.bus_selected_get);

module.exports = router;
