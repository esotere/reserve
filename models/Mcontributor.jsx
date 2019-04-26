const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ContributorSchema = new Schema({
title: {
    type: String,
    trim: true,
    unique: false,
},
name: {
    type: String,
    trim: true,
    unique: false,
},
address: {
    type: String,
    trim: true,
    unique: false,
},
phoneNumber: {
    type: Number,
    unique: false,
    require: true,
},
email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter valid e-mail address"]
},
number_of_shares_purchased: {
    type: Number,
    trim: true,
    unique: false,
},
bank_name: {
    type: String,
    trim: true,
    unique: false,
},
bank_account_number: {
    type: Number,
    trim: true,
    unique: false,
},
bvn: {
    type: Number,
    trim: true,
    unique: false,
},
name_of_next_of_kin: {
    type: String,
    trim: true,
    unique: false,
},
relationship: {
    type: String,
    trim: true,
    unique: false,
},
address_of_nok: {
    type: String,
    trim: true,
    unique: false,
},
phoneNumber_of_nok: {
    type: Number,
    unique: false,
    require: true,
},
email_of_nok: {
    type: String,
    unique: false,
    match: [/.+@.+\..+/, "Please enter valid e-mail address"]
},
creation_date: {
    type: Date,
    // default: Date.now
}
});

let Contributor = mongoose.model("Contributor", ContributorSchema);

module.exports = Contributor;