

amqp.connect('amqp://localhost', function(err, result){
  if(err){
    console.log(err);
  }
  createChannel(result);
})

function createChannel(result){
  result.createChannel(function(err, ch){
    if(err){
      console.log(err);
    }
      var q = 'hello';
      ch.assertQueue(q, {durable: false});  
      ch.consume(q, function(err, data){
        console.log(" [x] Received %s", data.content.toString());
      });
  })
    
 }