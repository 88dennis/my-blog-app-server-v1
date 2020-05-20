let express = require('express');
let bodyParser = require('body-parser')

const app = express();
let PORT = 8000;

const articlesInfo = {
    'learn-react' : {
        upvotes: 0,
        comments: []
    },
    'learn-mongo' : {
        upvotes: 0,
        comments: []
    },

    'learn-node' : {
        upvotes: 0,
        comments: []
    },

    'learn-java' : {
        upvotes: 0,
        comments: []
    }
}


app.use(bodyParser.json());

// app.get("/hello", (req, res) => {
//     console.log(req)
//     res.send("hello")
// });

// app.get("/hello/:name", (req, res) => {
//     console.log(req.params)
//     //name comes frome the one you declared after the colon
//     res.send("hello " + req.params.name)
// });

// // hello endpoint
// //use POSTMAN (body, raw, json) create a json file ther
// //USE POSTMAN TO SEND A JSON OBJECT AND HIT THIS ENDPOINT
// app.post("/hello", (req, res) => {
//     console.log(req.body)
//     res.send("hello " + req.body.name)
// });


app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;
    articlesInfo[articleName].upvotes +=1;
    res.status(200).send(articleName + " now has " + articlesInfo[articleName].upvotes + " upvotes ")
})





app.listen(PORT, function(){
    console.log("Connected to PORT " + "http://localhost:" + PORT)
})