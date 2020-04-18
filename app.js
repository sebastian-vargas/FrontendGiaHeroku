var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('dist/frontend'))

app.get('*', function (req, res) {
    let options = {
      root: path.join(__dirname, 'dist/frontend')
    }

    return res.sendFile('index.html', options)

});


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
