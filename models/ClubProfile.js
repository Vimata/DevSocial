const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  clubName: {
    type: String,
    required: true,
    unique: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  objective: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Suspended'],
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      dateJoined: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  memberAccounts: [
    {
      deposit: {
        account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'account',
        },
        amount: {
          type: String,
          required: true,
        },
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        date: {
          type: Date,
          default: Date.now,
        },
        transactionType: {
          type: String,
          default: 'Cash Deposit',
        },
      },
      withdrawal: {
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        type: {
          type: String,
          enum: ['Full', 'Partial'],
          default: 'Full',
          required: true,
        },
        announcementDate: {
          type: Date,
          default: Date.now,
        },
        payoutDate: {
          date: {
            type: Date,
            default: Date.now,
          },
        },
        transactionType: {
          type: String,
          default: 'Cash Withdrawal',
        },
      },
      fee: {
        account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'account',
        },
        amount: {
          type: String,
          required: true,
        },
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        date: {
          type: Date,
          default: Date.now,
        },
        transactionType: {
          type: String,
          default: 'Expense',
        },
      },
      beginBalance: {
        units: {
          type: String,
          required: true,
        },
        amount: {
          type: String,
          required: true,
        },
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        type: {
          type: String,
          enum: ['Paid In', 'Earnings'],
          default: 'Paid In',
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
  securities: [
    {
      buy: {
        security: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'security',
        },
        numberOfSharesBought: {
          type: String,
          required: true,
        },
        commission: {
          type: String,
        },
        otherFees: {
          type: String,
        },
        account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'account',
        },
        date: {
          type: Date,
          default: Date.now,
        },
        transactionType: {
          type: String,
          default: 'Buy Security',
        },
      },
      sell: {
        symbol: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        numberOfSharesSold: {
          type: String,
          required: true,
        },
        grossSellAmount: {
          type: String,
          required: true,
        },
        commission: {
          type: String,
        },
        otherFees: {
          type: String,
        },
        netProceeds: {
          type: String,
          required: true,
        },
        account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'account',
        },
        comments: {
          type: String,
        },
        reasonForSale: {
          type: String,
        },
        transactionType: {
          type: String,
          default: 'Sell Security',
        },
      },
    },
  ],
});

module.exports = Club = mongoose.model('clubprofile', ClubSchema);
