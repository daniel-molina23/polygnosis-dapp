const express = require('express');
const app = express();
const port = 3001;
// const unirest = require("unirest");

//must start `ipfs daemon` from command line (install ipfs beforehand)

// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient('http://localhost:5001');//connect to daemon server through port 5001 through terminal


app.get('/ipfs-api/ipfsFileAdd/:path', (req, res) => {

    console.log('Received the body (res.body): ', res.body);
    console.log('Received the params (req.params):', req.params);

//   const request = unirest("GET", "https://twinword-word-associations-v1.p.rapidapi.com/associations/");
//   request.query({ "entry": req.params.word });
//   request.headers({
//     "x-rapidapi-host": "twinword-word-associations-v1.p.rapidapi.com",
//     "x-rapidapi-key": "YOUR_RAPID_API_KEY_GOES_HERE",
//     "useQueryString": true
//   });
//   request.end(function (response) {
//     if (response.error) throw new Error(response.error);
//     res.json(response.body.associations_scored || {});
//   });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});