// server.js
var express = require('express');

const app = express();
const pathName = __dirname + "/site";

app.use(express.static(pathName));
app.get("/*", (req, res) => {
    res.sendFile(pathName + "/index.html");
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);