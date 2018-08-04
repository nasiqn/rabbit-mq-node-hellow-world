var amqp = require('amqplib/callback_api');

// connect to the rabbit mq server
// amqp.connect('amqp://localhost', function(err, conn) {
//     conn.createChannel(function(err, ch) {});
//   });

//  amqp.connect('amqp://localhost')
//  .then((result) => {
//      console.log(result);
//     createChannel(result);
//  })

amqp.connect('amqp://localhost', function(err, conn) {
    debugger;
    console.log(err);
    createChannel(conn);
  });
 
 function createChannel(result){
    result.createChannel(function(err, data){
        console.log(data);
      var q = 'hello';
      data.assertQueue(q, {durable: false});  
      data.sendToQueue(q, Buffer.from("Hello World !!"));
      console.log(" [x] Sent 'Hello World!'");
    })
 }