const express = require('express');
const app = express();

//to parse JSON and extract with 
app.use(express.json()); //version 4.16+


//must start `ipfs daemon` from command line (install ipfs beforehand) on seperate terminal
const { create } = require('ipfs-http-client');
const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' }); //connect to daemon server through port 5001 through terminal
const dfd = require("danfojs-node");//data processing like pandas for python




const parseForIPFS = async (fileName, body) => {
  // console.log('bodyType in parseForIPFS: ',typeof(body));
  if(body == null || fileName == null) return null;
  
  const buffer = Buffer.from(body); //OR - Buffer.from(JSON.stringify(obj));
  
  const preString = buffer.toString();
  const tempArr = preString.split('\n');
  // console.log('The temp array:', tempArr);

  console.log('Within the editorial loops:');
  console.log('-----------------------');
  console.log('-----------------------');
  for(let i = 0; i < tempArr.length; i++){
    const currLen = tempArr[i].length;
    if(currLen >= 1 && tempArr[i][currLen-1] === '\r'){
      tempArr[i] = tempArr[i].substring(0,currLen-1);//pop last char
    }
    tempArr[i] = tempArr[i].split(',');
  }
  const last = tempArr[tempArr.length-1];
  if(last[0] === ''){
    tempArr.pop();
  }

  const columnLabels = tempArr.shift();

  console.log('columnsLabels:', columnLabels);
  // console.log('List:', tempArr);

  console.log('Got this new buffer:',buffer);
  const df = new dfd.DataFrame(tempArr, {columns: columnLabels});
  const features = Array.from(df.columns.values());
  // console.log('Got these new features:', features);
  const numOfRows = df.shape[0];
  const head = df.head(10);
  console.log(head);
  const getHeader = async () => {
    var temp = {};
    features.map(async (item, i) => {
      let t = head.col_data[i];
      temp[item] = t;
      // console.log(item, ':', t);
    });
    return temp;
  }

  const header = await getHeader();
  // console.log('header:', header);
  if(buffer == null || header == null) return null;


  const addFile = async (filePath, buffer) => {
    const fileAdded = await ipfs.add({path: filePath, content: buffer});
    console.log("IPFS fileAdded successfully: ", fileAdded);
    const fileHash = fileAdded.cid.toString('base58btc');//IPFS v0 hash
    //more info at: https://www.npmjs.com/package/cids#cidtostringbasethismultibasename
    console.log('IPFS hash V0: ', fileHash);

    return fileHash;
  }

  const ipfsHash = await addFile(fileName, buffer);

  if(ipfsHash == null){
    return null;
  }

  return {
    features,
    numOfRows,
    header,
    ipfsHash,
  };
}

//executed for any request to '/ipfs-api/ipfsFileAdd/'
app.use('/ipfs-api/ipfsFileAdd/', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //permit any CORS policy

  let makeDirBool = true;

  for await (const file of ipfs.files.ls('/polygnosisDapp')) {
    if(file.type !== null) makeDirBool = false;
    console.log('FOUND THESE PATHS, TYPE=', file.type, '\nNAME:', file.name)
  }

  if(makeDirBool === true){
    const newDir = '/polygnosisDapp/fileAdditions';
    await ipfs.files.mkdir(newDir, {parents: true})
    .then(() => {
      console.log('Successfully made new directory in IPFS: ', newDir);
    })
    .catch( (err) => {
      console.log('Broke at the IFPS mkdir...')
    }); //new ipfs dir if DNE
  }
  
  console.log('passing it to the next...');
  next();//pass control to next middleware function in this stack
});

// request is the server asking
// response is what is received back
app.post('/ipfs-api/ipfsFileAdd/:fileName', async (req, res) => {
  // console.log('Received the body (req.body): ', req.body);
  // console.log('Received the params (req.params):', req.params);
  //req.params.word to access parameter passed
  let passed = true;
  
  //process
  const formattedBody = await parseForIPFS(req.params.fileName, req.body)
    .catch((err) => {
      console.log('Broke at the parseForIPFS');
      console.error(err.message);
      res.status(400).send(null);
      passed = false;
    });

  if(formattedBody === null){ 
    console.log('No body present!'); 
    passed = false;
  }
  
  
  if(passed === true){
    res.send(formattedBody); //JSON with {ipfsHash, features, headers, numOfRows}
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Express Server listening at http://localhost:${PORT}`));