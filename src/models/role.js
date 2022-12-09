const db=require('./index')

module.exports = (sequelize,DataTypes)=>{
    const roles = sequelize.define("roles",{
        rolesid:{
           type :DataTypes.INTEGER,
           primaryKey:true,  autoIncrement: true,
        },
       title:{
           type : DataTypes.STRING,
           allownull :false
       }
       
    }, { timestamps: false });

    return roles
}