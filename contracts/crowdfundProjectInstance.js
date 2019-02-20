/* eslint-disable */
import web3 from './web3';

const abi = []; // Your ABI goes here (Project contract)
// Example:
// const abi = [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "creator",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};
