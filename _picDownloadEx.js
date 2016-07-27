var req = require('request');
var fs = require('fs');
req('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUboOU7Qr2y_xk3FN2fhvYfln6LOyO4hxKEQDFvVKjZ0FXNaM2').pipe(fs.createWriteStream('test.png'))
