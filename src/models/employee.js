module.exports = (sequelize,DataTypes)=>{
    const employees = sequelize.define("employees",{
        id:{
           type :DataTypes.INTEGER,
           primaryKey:true,  autoIncrement: true,
        },
        Fname:{
           type : DataTypes.STRING,
           allownull :false
       },
       Lname:{
        type : DataTypes.STRING,
        allownull :false
       },
       Email:{
        type : DataTypes.STRING,
        allownull :false
       },

       rolesid:{
           type:DataTypes.INTEGER,
           ForeignKey:true
       }
       
    }, { timestamps: false });
    
    //Association
    employees.associate = function(models) {
        employees.belongsTo(models.roles, {
          foreignKey: 'rolesid',
        });
    };
   
    return employees
}