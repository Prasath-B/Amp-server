const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser")
const cors = require('cors');
const router = require('./routes/router.js')

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(bodyParser.json({limit:'50mb'}));

const dbURL = `mongodb+srv://prasath:balpraman@cluster0.pq1oc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

 mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(router)

app.listen(process.env.PORT || '5000',()=>{
     console.log('server is runnig on port 5000');
 })
