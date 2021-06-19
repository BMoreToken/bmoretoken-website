(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{599:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initEIP712Domain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_contributors","type":"address[]"},{"name":"_balances","type":"uint256[]"},{"name":"_total","type":"uint256"},{"name":"_usedSimple","type":"bool"}],"name":"findBadAddressesForERC20","outputs":[{"name":"badAddresses","type":"address[]"},{"name":"badBalances","type":"uint256[]"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setVIPFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReceiverAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_tokenIds","type":"uint256[]"},{"name":"_amounts","type":"uint256[]"},{"name":"_actionType","type":"uint256"},{"name":"_uniqueId","type":"bytes32"},{"name":"_referrer","type":"address"},{"components":[{"name":"delegater","type":"address"},{"name":"expiration","type":"uint256"}],"name":"agent","type":"tuple"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"bulksendNFTTokenForBurners","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"referrerFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_version","type":"string"},{"name":"_chainId","type":"uint256"},{"name":"_verifyingContract","type":"address"}],"name":"upgradeEIP712Domain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_contributors","type":"address[]"},{"name":"_balances","type":"uint256[]"},{"name":"_tokenIds","type":"uint256[]"}],"name":"findBadAddressesForERC1155","outputs":[{"name":"badAddresses","type":"address[]"},{"name":"badBalances","type":"uint256[]"},{"name":"badTokenIds","type":"uint256[]"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"setReceiverAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"Agent_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"}],"name":"bulksendEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_txRecordId","type":"bytes32"}],"name":"checkTxExist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"registerVIP","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"}],"name":"bulksendTokenSimple","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"},{"name":"_referrer","type":"address"}],"name":"bulksendToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"},{"name":"_usedSimple","type":"bool"},{"components":[{"name":"delegater","type":"address"},{"name":"expiration","type":"uint256"}],"name":"agent","type":"tuple"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"bulksendTokenForBurners","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712DOMAIN_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_contributors","type":"address[]"},{"name":"_tokenIds","type":"uint256[]"},{"name":"_usedSimple","type":"bool"}],"name":"findBadAddressesForERC721","outputs":[{"name":"badAddresses","type":"address[]"},{"name":"badTokenIds","type":"uint256[]"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_vipList","type":"address[]"}],"name":"addToVIPList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"},{"name":"_referrer","type":"address"}],"name":"bulksendTokenSimple","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"txFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"},{"name":"_usedSimple","type":"bool"},{"components":[{"name":"delegater","type":"address"},{"name":"expiration","type":"uint256"}],"name":"agent","type":"tuple"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"_referrer","type":"address"}],"name":"bulksendTokenForBurners","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_bytes32","type":"bytes32"}],"name":"bytes32ToSring","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"delegater","type":"address"},{"name":"expiration","type":"uint256"}],"name":"agent","type":"tuple"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"decodeSigner","outputs":[{"name":"signer","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_tokenIds","type":"uint256[]"},{"name":"_amounts","type":"uint256[]"},{"name":"_actionType","type":"uint256"},{"name":"_uniqueId","type":"bytes32"},{"name":"_referrer","type":"address"}],"name":"bulksendNFTToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setTxFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"VIPFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contributors","type":"address[]"},{"name":"_balances","type":"uint256[]"}],"name":"findBadAddressesForEther","outputs":[{"name":"badAddresses","type":"address[]"},{"name":"badBalances","type":"uint256[]"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isVIP","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_vipList","type":"address[]"}],"name":"removeFromVIPList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address[]"},{"name":"_values","type":"uint256[]"},{"name":"_uniqueId","type":"bytes32"}],"name":"bulksendToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setReferrerFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"getBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"total","type":"uint256"}],"name":"LogTokenBulkSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"receiver","type":"address"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"LogGetToken","type":"event"}]')},604:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')}}]);