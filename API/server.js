const express = require('express');
const app = express();
const fs = require('fs');

app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/users.json", 'utf8', function(err, data){
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Internal Server Error");
        }
        console.log(data);
        res.end(data);
    });
});

const server = app.listen(8080, function(){
    //const host = server.address().address;
    const port = server.address().port;
    console.log("REST API demo app listening at http://localhost:%s", port);
});
