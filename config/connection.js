const {Sequelize, DataTypes}=require('sequelize')
const {sequelise} = require("./config")

sequelise.authenticate()
.then(()=>{
    console.log('Connected')
    
}).catch(err=>{
    console.log('Error'+err)
})
const db={}

 db.Sequelize = Sequelize;
    
db.sequelize = sequelise;

// db.products = require('./productModel')(sequelize,DataTypes)


sequelise.sync ({force : true})
.then(()=>{
    console.log('tables created')
})
 module.exports = db