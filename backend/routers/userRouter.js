const router = require('express').Router();
const { SignUp, SignIn, SendEmail, VerifyEmail, SetNewPassword } = require('../controllers/userControllers');
const authorize = require('../middlewares/authorize');

router.route('/signup')
    .post(SignUp);
router.route('/signin')
    .post(SignIn);
router.route('/send/email')
    .post([authorize], SendEmail);

router.route('/send/email/forgot/password')
    .post(SendEmail);

router.route('/email/verify')
    .post([authorize], VerifyEmail);

router.route('/set/new/password')
    .post(SetNewPassword);

module.exports = router;