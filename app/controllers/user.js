var config = require('../../config/config');
var utils = require('../utils');
var md5 = utils.Md5;
var base64 = utils.Base64;
var request = require('request');
var qs = require('querystring')
var apiEnv = require('../services').ApiEnv;

exports.showLogin = function (req, res) {
    apiEnv.findAll(function(err,data){
        res.render('user/index', {
            title: '登陆',
            navcate:'index',
            apiEnvs:data || []
        });
    });
}

exports.logout = function (req, res) {
    req.session.empNo = null;
    req.session.username = null;
    req.session.headers = null;
    res.redirect('/');
}

exports.login = function (req, res) {
    var empNo = req.body.empNo; //工号
    var password = req.body.password;  //密码
    var env = req.body.apiEnv || config.env; //环境
    var oauth_server = config.oauth_servers[env];

    //oauth认证登陆
    var pwdsec = md5.md5(password);
    var signStr = md5.md5(empNo + pwdsec + oauth_server.client_id + oauth_server.client_secret);
    var codeStr = base64.encode(empNo + ":" + pwdsec + "aB1c");
    var data = {grant_type: 'password', code: codeStr, sign: signStr, client_id: oauth_server.client_id, client_secret: oauth_server.client_secret};
    var headers = {'content-type': 'application/x-www-form-urlencoded',Accept: "application/json; charset=utf-8", Authorization: "Basic " + base64.encode(oauth_server.client_id + ":" + oauth_server.client_secret)};

    //认证
    request.post({
            url: oauth_server.toke_url,
            headers:headers,
            timeout:5000,
            body:qs.stringify(data),
            json:true
        },
        function(err, r1, b){
            if(err){
                return res.render("user/index",{error:'登陆失败',title: '登陆',navcate:'index'});
            }
            if(r1.statusCode === 200){
                request({url:'http://100.dooioo.com:10019/account/info/'+empNo, json:true}, function(error, response, body){
                    if(error || res.statusCode !== 200){
                        return res.render("user/index",{error:'登陆失败',title: '登陆',navcate:'index'});
                    }
                    req.session.username = body.employeeInfo.userName || empNo;
                    req.session.empNo = empNo;
                    req.session.password = password;
                    req.session.access_token = b.access_token;
                    return res.redirect("/");
                });
            }else{
                return res.render("user/index",{error:'登陆失败',title: '登陆',navcate:'index'});
            }
        }
    )
}