var contractABI = '[ { "constant": true, "inputs": [], "name": "hello", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ]';
var contractAdress = 	'0x062A766c61447592f34871eE3949f1934E6121C0';

var web3 = new Web3("http://localhost:8545");

const abi = JSON.parse(contractABI)

var helloworld = new web3.eth.Contract(abi,contractAdress);

console.log(helloworld.methods.hello().call().then(result => {console.log(result);}));
web3.eth.getAccounts().then(console.log);

document.addEventListener('DOMContentLoaded', () => { 
 //const $setData = document.getElementById('setdata');
 //const $getData = document.getElementById('getdata');

});



