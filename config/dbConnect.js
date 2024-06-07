const mongoose = require("mongoose")

function dbConnect(url){
    return mongoose.connect(url,{
        dbName: "merndb"
    })
    .then(() => console.log("Database is ready"))
    .catch(err => console.log(err))
}

module.exports = dbConnect