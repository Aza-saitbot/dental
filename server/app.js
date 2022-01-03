require('dotenv').config()
const express =require('express')
const fileUpload=require('express-fileupload')
const cors=require('cors')
const path=require('path')
const sequelize=require('./db.js')
const models=require('./models/models.js')
const router=require('./routes')
const errorHandler=require('./middleware/ErrorHandlingMiddleware')


const PORT=process.env.PORT || 5000

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))

app.use('/api',router)


// обработка ошибок, последний middleware
app.use(errorHandler)

async function start() {
    
try{
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))
}catch(e){
    console.log('Server error',e.message)

}
}


start()

// "start": "cross-env NODE_ENV=production node app.js",
// "server": "nodemon app.js",
// "client": "npm run start --prefix client",
// "client:install": "npm install --prefix client",
// "client:build": "npm run build --prefix client",
//"dev": "cross-env NODE_ENV=development concurrently \"npm run server\" \"npm run client\""


// const mongoose=require('mongoose')
//
// const app=express()
//
// app.use(express.json({extended:true}))
//

//
// if (process.env.NODE_ENV === 'production'){
//     app.use('/',express.static(path.join(__dirname,'client','build')))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }
//
// const PORT=process.env.PORT || 5000
//
// async function start() {
//
//     try{
//         await mongoose.connect(config.get('mongoUri'),{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//         })
//         app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))
//     }catch(e){
//         console.log('Server error',e.message)
//         process.exit(1)
//     }
// }





