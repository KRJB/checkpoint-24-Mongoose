const mongoose=require('mongoose')
const {Schema}=mongoose
const personSchema = new Schema({
    name:{ type:String, required:true},
    age:{type:Number},
    favoriteFood : [String]
})
const Person=mongoose.model('Person',personSchema)
module.exports=Person;