import { config as configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";

    mongoose.connect(process.env.URL_MONGODB)
.then(()=>console.log("base de donnée connectée"))
.catch(()=>console.log("echec de connection a la base de donnée"))

module.exports = mongoose