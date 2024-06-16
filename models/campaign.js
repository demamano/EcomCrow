const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the campaign schema
const campaignSchema = new Schema({
  owner: {
    type: String,
    required: true,
    // match: /^0x[a-fA-F0-9]{40}$/  
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  target: {
    type: String,  // Storing as a string to handle large numbers
    required: true,
    validate: {
      validator: function(v) {
        return /^[0-9]+$/.test(v);  // Ensure it's a numeric string
      },
      message: props => `${props.value} is not a valid target amount`
    }
  },
  deadline: {
    type: Number,  // Timestamp as a number
    required: true
  },
  amountCollected: {
    type: String,  // Storing as a string to handle large numbers
    default: '0',
    validate: {
      validator: function(v) {
        return /^[0-9]+$/.test(v);  // Ensure it's a numeric string
      },
      message: props => `${props.value} is not a valid amount`
    }
  },
  image: {
    type: String,
    required: true
  }
});

// Create the model
const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
