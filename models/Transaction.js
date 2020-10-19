const { Schema, model } = require('mongoose');

const TransactionSchema = new Schema(
  {
    text: {
      type: String,
      trim: true,
      required: [true, 'Please add some text'],
    },
    amount: {
      type: Number,
      required: [true, 'Please add a positive or negative number'],
    },
  },
  { timestamps: true }
);

module.exports = model('Transaction', TransactionSchema);
