const mongoose = require('mongoose');

// const validator = require('validator');

const ruleSchema = new mongoose.Schema(
  {
    rKey : {
      type: String,
      required: [true, 'A rule must have a key'],
      enum: {
        values: ['acl'],
        message: 'Key must be "acl"'
      }
    },

    rName : {
      type: String,
      required: [true, 'A rule must have a name'],
      
    },

    rType : {
      type : String,
      required: [true, 'A rule must have a key'],
      enum: {
        values :['dstdomain', 'src', 'url_path'],
        message: 'Type must be "dstdomain", "src", "url_path"'
      }
    },

    rValue : {
      type: String,
      required: [true, 'A rule must have a name'],
      unique: true
    },

    aKey : {
      type: String,
      required: [true, 'A access must have a key'],
      enum: {
        values: ['http_access'],
        message: 'Key must be "http_access"'
      }
    },

      aType : {
        type : String,
        required: [true, 'A rule must have a key'],
        enum: {
          values :['deny', 'allow'],
          message: 'Type must be "deny"or"allow'
        }
      },
    

    aName : {
      type: String,
      required: [true, 'A access must have a name'],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function(el) {
          return el === this.rName;
        },
        message: 'Rule name and access name are not the same!'
      }
    }
   }
);



const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
