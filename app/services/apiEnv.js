var ApiEnv = require('../models').ApiEnv;

/**
 * 查询所有的envs
 * @param cb
 */
exports.findAll = function(cb){
    ApiEnv.find({},cb);
}