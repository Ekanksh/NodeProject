const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((e) => {
    console.log("Database connection failed");
})

var nailSchema = new mongoose.Schema({
   size : String,
   day : String,
   weight : Number

});

var Nail = mongoose.model('Nail', nailSchema);

router.get('/', (req, res) => {
    findData(req, res);
});

function findData(req, res) {
    Nail.find({},(err, data)=>{
		res.send(data);
    });
}


router.post('/', function(req,res) {
    var  nail=new Nail();
    nail.size = req.body.size;
    nail.day = req.body.day;
    nail.weight = req.body.weight;
    
    nail.save();

});



// router.post('/nails/:size/:day/:weight', (req, res) => {
//     var price1 = req.params.size;
//     var price2 = req.params.day;
//     var price3 = req.params.weight;
//     console.log(price1);
//     var nail = new Nail();
//     nail.size = prices1;
//     nail.day = prices2;
//     nail.weight = prices3;
//     nail.save((err, doc) => {
//         if(err){
//             console.log(err);
//             res.status(500).send();
//         }
//         else{
//             res.send(doc);
//         }
//     });
// });



module.exports = router  ;