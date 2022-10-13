// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;
// ¿Cuál es el equivalente en Cairo?
import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
        }

    function wave() public {
        totalWaves += 1;
        console.log("%s te saluda!", msg.sender);
        }
    
    function getTotalWaves() public view returns (uint256) {
        console.log("Tenemos %d salu2!", totalWaves);
        return totalWaves;

    }
}