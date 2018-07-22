pragma solidity ^0.4.8;

contract Verifies {
	mapping (address => uint) verifies;

	function getVerification(uint verify) {
		verifies[msg.sender] = getVerifies(msg.sender) + verify;
	}

	function getVerifies(address addr) returns(uint) {
    	return verifies[addr];
  }
}
