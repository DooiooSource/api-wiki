var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//API运行环境
var apiEnvSchema = new Schema ({
        env: {type: String, index: true},
        name: {type: String},
        desc: {type: String}
    }, {
        collection: 'api_env'
    });

mongoose.model ('ApiEnv', apiEnvSchema);