const dbconfig = require('../config/dbconfig')
const {Sequelize, DataTypes}=require('sequelize')

const sequelise=new Sequelize (

    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
       host : dbconfig.Host,
       dialect:dbconfig.DIALECT
    }

)
module.exports = sequelise;

