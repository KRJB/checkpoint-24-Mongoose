const mongoose = require ('mongoose')
const connectDB = async()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/person');
    } catch (error) {
        handleError()
    }
}
module.exports = connectDB