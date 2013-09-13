var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    db: 'mongodb://192.168.0.133:27017/api_route',//所有环境在一起
    root: rootPath,
    env: 'production',//默认登陆环境
    admins: [83639, 87656], //管理员账号

    //所有认证服务
    oauth_servers: {
        development: {
            toke_url:'',
            client_id: 'APP-Customer',
            client_secret: 'KiowPdfsal2380jfdsl'
        },
        test: {
            toke_url:'',
            client_id: 'APP-Customer',
            client_secret: 'KiowPdfsal2380jfdsl'
        },
        preview: {
            toke_url:'',
            client_id: 'APP-Customer',
            client_secret: 'KiowPdfsal2380jfdsl'
        },
        production: {
            toke_url:'http://192.168.0.138:9090/oauth/token',
            client_id: 'APP-Customer',
            client_secret: 'KiowPdfsal2380jfdsl'
        }
    }
}