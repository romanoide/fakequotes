var express = require('express');
var router = express.Router();
var controllers = require('../controllers');



// The routes
// ============================================================
router.get('/', function (req, res,next) {
	controllers.imggen(req,res,next);
});

router.get('/postimage',function(req,res,next){
	controllers.postimage(req,res,next);
})



module.exports = router;