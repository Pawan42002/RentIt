const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscriptionSchema = new mongoose.Schema({
    isValid: {
        type: boolean,
        required: true
    },
    
});

const SubscriptionModel = mongoose.model("subscription", SubscriptionSchema);

module.exports = SubscriptionModel;