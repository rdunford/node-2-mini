const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller');

//step 1
const massive = require('massive');
require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    return app.set('db', dbInstance);
     
    // dbInstance.new_planes().then(planes =>{
    //      console.log(planes)
    //  }) .catch(err => console.log(err));

});



app.use(bodyParser.json());
app.use(cors());


app.get(`/api/planes`, ctrl.getPlanes);



const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listening on port ${port}`); });

