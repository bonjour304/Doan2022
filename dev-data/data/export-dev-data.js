const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Rule = require('./../../models/rulesModel');
const APIFeatures = require('../../utils/apiFeatures');
const mongoClient = require('mongodb').MongoClient;

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

exports.exportRules = async (req, res) => {
    try {

    // EXECUTE QUERY
    const features = new APIFeatures(Rule.find(), req.query)
    //  .paginate();
   
    const rules = await features.query;

        
      // SEND RESPONSE
     let data = JSON.stringify(rules);
     fs.writeFile('respondRules.json',data, (err) =>{
         if(err) throw err;
         console.log('Data written to file');
     }); 

    } catch (err) {
      console.log("can't write")
    }
  };




