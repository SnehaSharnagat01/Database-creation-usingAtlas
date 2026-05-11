let mongoose = require("mongoose");

let connectDb = async () => {
  try {
                          //  private connection method ://username:password@clusterName.uniqueId/databaseName
    await mongoose.connect('mongodb+srv://kodex:kodex1234@cluster1.ufsdhwa.mongodb.net/databaseConnection')
    console.log("database is connected");
    
  } catch (error) {
    console.log( "error in connecting DB - ",error);   
  }
};
module.exports  = connectDb 