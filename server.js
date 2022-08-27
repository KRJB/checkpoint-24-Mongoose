const express = require ('express')
const connectDB = require('./DB/connect')
const Person = require('./model/model')
const app = express()
const PORT = 6000
connectDB()
app.listen(PORT,(err)=>{
    err?
    console.log(err)
    :console.log(`server is running in port ${PORT}...`)
})



//------ create and save one document ------

// const person1= new Person({
//     name:'mostfa',
//     age:26,
//     favoriteFood:['couscous']
// })
// person1.save((err)=>{
//     (err)?console.log("error while saving",err):console.log("saved successfully")
//    })



//------ create and save multiple people  : this method triggers save automatically ------

// Person.create([
//     {name:"Eya",
//     age:14,
//     favoriteFood :['couscous','spaghetti']},
//     {name:"ahmed",
//     age:28,
//     favoriteFood :['riz']},
//     {name:"mostfa",
//     age:18,
//     favoriteFood :['chicken wings']},
//     {name:"samar",
//     age:35,
//     favoriteFood :['spaghetti']}
// ])



//------ Find all the people having a given name ------

// const searchName = async()=>{
//     try {
//         let name="mostfa"
//     const data = await Person.find({"name":name})
//     console.log(data)
//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// searchName()



//------ find one person bye favourite food ------



// const searchFood = async()=>{
//     try {
//         let favoriteFood="couscous"
//     const data = await Person.findOne({"favoriteFood":favoriteFood})
//     console.log(data)
//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// searchFood()




//------ find a person bye id ------



// const searchId = async()=>{
//     try {
   
//         const data = await Person.findById({ _id: "630a609a8cf79924378b1df6" })
//     console.log(data)
//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// searchId()





//------ Find a person by _id and Edit favoriteFoods ------



// const Edit = async()=>{
//     try {
   
//         const data = await Person.findById({ _id: "6309160f36ce208c941ecab1" })
//         await Person.updateOne(data, {$push:{favoriteFood:  "hamburger"}})

//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// Edit()







//------ Find a person by Name and set the person's age to 20 ------



// const Edit = async()=>{
//     try {
   
//         const data = await Person.findOneAndUpdate({ name:'Eya' },{$set:{age:  20}})
//     console.log(data)
//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// Edit()







//------ Delete one person by id ------


// const Delete = async()=>{
//     try {
   
//        await Person.findByIdAndRemove({ _id: "630a609a8cf79924378b1df4" })
//             console.log('Person deleted')

//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// Delete()




//------ Delete one person by id ------


// const Delete = async()=>{
//     try {
   
//        await Person.deleteMany({name:'Mary' })
//             console.log('People deleted')

//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// Delete()




//------ Chain Search Query Helpers to Narrow Search Results ------


// const searchName = async()=>{
//     try {
//         let favoriteFood="couscous"
//     const data = await Person.find({"favoriteFood":favoriteFood})
//     .limit(2)
//     .sort({ name: 1 })
//     .select({ age: false })
//     console.log(data)
//     } catch (err) {
//         console.log("error occured while searching",err)
//     }
// }
// searchName()


