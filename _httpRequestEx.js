var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
  'msg' : 'Hello World from client'
});

var options = {
  hostname: 'localhost',
  port: '5566',
  path: '/hello',
  method: 'POST',
  headers:{
    'Content-Type':'application/yale918-mac',
    'Content-Length':Buffer.byteLength(postData)
  }
};

var req_post = http.request(options, (res)=>{
  res.on('data',function(chunk){
      console.log('Res: '+chunk);
  })
});

req_post.write(postData);
req_post.end();
