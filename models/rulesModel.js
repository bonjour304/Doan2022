const mongoose = require('mongoose');

// const validator = require('validator');

const ruleSchema = new mongoose.Schema(
  {
    rKey : {
      type: String,
      required: true,
      enum: ['acl'],
      default: 'acl'
    },

    rName : {
      type: String,
      required: true,
    },

    rType : {
      type : String,
      required: true,
      enum: ['dstdomain', 'src', 'url_path'],
      default: 'dstdomain'
    },

    rValue : {
      type: String,
      required: true,
      unique: true
    },

    aKey : {
      type: String,
      required: true,
      enum: ['http_access'],
      default: 'http_access'
    },

      aType : {
        type : String,
        required: true,
        enum: ['deny', 'allow']
      },

    aName : {
      type: String,
      required: true
    }
   }
);



const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
