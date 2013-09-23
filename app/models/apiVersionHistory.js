/**
 * API 更新版本
 */
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var apiVersionHistorySchema = new Schema ({
    apiType:{type:String,index:true}

}, {
    collection: 'api_version_history'
});

mongoose.model ('ApiVersionHistory', apiVersionHistorySchema);