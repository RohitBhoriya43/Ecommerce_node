const mongoose = require("mongoose");

const db = () => {
    console.log("mongouri---->",process.env.MONGO_URI)
  mongoose.connect(
    process.env.MONGO_URI,
    // {
    //   useNewUrlParser:true,
    //   UseUnifiedTopology:true  
    // }
  ).then((con) => {
    console.log(`DataBase connected: ${con.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = db;