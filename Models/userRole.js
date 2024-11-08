const mongoose = require('mongoose')

const userRole_Model = mongoose.Schema(

    {
        RoleName:{
            type:String,
            required:["Role name must be there"]
        },
        status:{
            type:String,
            required:["Status must be active or inactive"]
        }
    }
)

const Roles = mongoose.model("Roles",userRole_Model)

module.exports = {Roles}