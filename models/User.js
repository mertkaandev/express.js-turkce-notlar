const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

     name: {
         type: String,
         required: [true, "Please provide a name"]
     },
     email: {
         type: String,
         required: true,
         unique: [true, "Please try different e-mail"],
         match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid e-mail"
         ]
     },
     role: {
         type: String,
         default: "user",
         enum: ["user", "admin"],
     },
     password: {
         type: String,
         required: [true, "Please provide a password"], 
         minlenght: [6, "Please provide a password with min length 60"],
         select: false,
     },
     createdAt: {
         type: Date,
         default: Date.now
     },
     
});

module.exports = mongoose.model("User", UserSchema);

