<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const KnowledgeController = require('../app/controllers/KnowledgeController');


router.get('/', KnowledgeController.index);  

module.exports = router;
=======
// const express = require('express');
// const router = express.Router();

// const KnowledgeController = require('../app/controllers/KnowledgeController');

const admin = require('firebase-admin');
const serviceAccount = require("../../contactform-cb752-firebase-adminsdk-25y9j-bda04b23ab.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://contactform-cb752.firebaseio.com/'
})
const db = admin.database();
const { Router}= require('express');
const router = Router();


router.get('/', (req, res)=>{
    db.ref('dieucanbiet').once('value', (snapshot)=>{
       const data =  snapshot.val();
       res.render('knowledge', {dieucanbiet: data});
    })

});  





module.exports = router;  
>>>>>>> 1f8d8aef23463b6ce14c178b8a4491d3eb1e1239
