const mongooose = require('monsooge');


const TaskSchema = new mongooose.Schema({
    name:String,
    completed:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)