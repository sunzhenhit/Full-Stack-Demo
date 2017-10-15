var Items = require('../models/itemModel')
var bodyParser = require('body-parser');

module.exports = function(app){


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // app.use(function(req, res, next) {
    //     console.log('404')
    //     let err = new Error('Not Found');
    //     err.status = 404;
    //     next(err);
    //   });
      
    //   app.use(function(err, req, res, next) {
    //     res.sendStatus(err.status || 500);
    //   });
      

    // app.get('/', function(req, res, next) {
    //     console.log('Request: [GET]', req.originalUrl)
    //     res.sendFile(path.resolve(__dirname, 'client/index.html'));
    //   });

 

    app.get('/api/items/order',function(req, res){
        Items.aggregate([{"$group" : {_id:"$orderedItem", count:{$sum:1}}},
        {$sort:{"count":-1}}                                  ], function(err, fields){

           // aggregate([{"$group" : {_id:"$province", count:{$sum:1}}}])
           
                  if(err) throw err;

                  res.send(fields);
           
        });
    });

    app.get('/api/items/companyName/:companyName',function(req, res){
        Items.find({companyName: req.params.companyName}, function(err, Items){
           
                  if(err) throw err;

                  res.send(Items);
           
        });
    });

    app.get('/api/items/customerAddress/:customerAddress',function(req, res){
        Items.find({customerAddress: req.params.customerAddress}, function(err, Items){
           
    
              if(err) throw err;

                  res.send(Items);
           
        });
    });


    app.get('/api/items/companyName/:companyName/customerAddress/:customerAddress',function(req, res){
        Items.find({customerAddress: req.params.customerAddress,companyName: req.params.companyName}, function(err, Items){
           
            console.log('xxxxxx')
            console.log(req.params.companyName)
            console.log(req.params.customerAddress)

              if(err) throw err;

                  res.send(Items);
           
        });
    });


  
    
    app.post('/api/item',function(req,res){
        
        console.log(req.body);
                if(req.body.id){
                    Items.findOneAndUpdate(req.body.orderId,{
                        orderId: req.body.orderId,
                        companyName: req.body.companyName,
                        customerAddress: req.body.customerAddress,
                        orderedItem:req.body.orderedItem
                    },function(err,Items){
                         if(err) throw err;
                         res.send('Success'); 
                    })
                }else{

                    console.log("ccccccc");
                    var newItem = Items({
                        orderId: req.body.orderId,
                        companyName: req.body.companyName,
                        customerAddress: req.body.customerAddress,
                        orderedItem:req.body.orderedItem
                    });
        
                    newItem.save(function(err){
                        if (err) throw err;
                        res.send('Success');
                    })
        
                }
        
            });


    // app.delete('api/items/',function(req,res){
        
    //   Items.findOneAndRemove(req.body.orderId, function(err){
    //      if(err) throw err;
    //      res.send('Success');
    //  });

    // });

     app.delete('/api/item',function(req,res){
        console.log("xxx");
        console.log(req.body.orderId);
      if(typeof req.body._id !='undefined') {
        console.log("findByIdAndRemove");
        Items.findByIdAndRemove(req.body._id, function(err){
            console.log(req.body._id);
           if(err) throw err;
           res.send('Success');
       });
      }
  
     if(typeof req.body.orderId !='undefined') {
        console.log("findOneAndRemove");
        Items.findOneAndRemove({orderId: req.body.orderId}, function(err){
            if(err) throw err;
            res.send('Success');
       });
     }

        
   });
}