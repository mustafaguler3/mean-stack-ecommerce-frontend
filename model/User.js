import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders: [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
       } 
    ],
    wishlists: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: "WishList"
        } 
     ],
     isAdmin: {
        type: Boolean,
        default: false
     },
     hasShippingAddress: {
        type: Boolean,
        default: false
     },
     shippingAddress: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        country: {
            type: String,
        },
        phone: {
            type: String,
        }
     }
},

     {
        timestamps: true
     })

     const User = mongoose.model("User",UserSchema)

     module.exports = User