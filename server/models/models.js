const sequelize=require('../db')
const {DataTypes}=require('sequelize')

const User=sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true },
    password:{type:DataTypes.STRING, },
    role:{type:DataTypes.STRING, defaultValue:'USER'},
})

const Basket=sequelize.define('basket',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
})
const BasketJob=sequelize.define('basket_job',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
})

const Job=sequelize.define('job',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false },
    price:{type:DataTypes.INTEGER,allowNull:false },
    rating:{type:DataTypes.INTEGER,defaultValue: 0 },
    img:{type:DataTypes.STRING,allowNull:false },

})

const Type=sequelize.define('type',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false },
})
const Services=sequelize.define('service',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false },
})

const Rating=sequelize.define('rating',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    rate:{type:DataTypes.INTEGER,allowNull:false },
})

const JobInfo=sequelize.define('job_info',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false },
    description:{type:DataTypes.STRING,allowNull:false },
})

const TypeServices=sequelize.define('type_services',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(BasketJob)
BasketJob.belongsTo(User)

Type.hasMany(Job)
Job.belongsTo(Type)

Services.hasMany(Job)
Job.belongsTo(Services)

Job.hasMany(Rating)
Rating.belongsTo(Job)

Job.hasMany(JobInfo,{as: 'info'})
JobInfo.belongsTo(Job)

Type.belongsToMany(Services,{through:TypeServices})
Services.belongsToMany(Type,{through:TypeServices})

module.exports={
    User,
    Basket,
    BasketJob,
    Job,
    Type,
    Services,
    TypeServices,
    JobInfo,
    Rating
}