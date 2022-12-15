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
//Associations
    roles.associate = function(models) {
        roles.hasMany(models.employees, {
          foreignKey: 'rolesid',
        });
    };
    return roles
}