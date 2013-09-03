/**
 * 登陆校验
 **/
exports.requiresLogin = function (req, res, next) {
	if(!req.session.empNo){
		return res.redirect('/login');
	} 
	next(); 
}

exports.user = {
  hasAuthorization : function (req, res, next) {
    next()
  }
}