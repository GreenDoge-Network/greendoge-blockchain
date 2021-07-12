# GreenDoge Blockchain
![image](https://github.com/GreenDoge-Network/greendoge-blockchain/blob/96981368b3949a91b836e8c01dca3b3ba0207d50/greendoge.jpg)
[Download GreenDoge blockchain](https://github.com/GreenDoge-Network/greendoge-blockchain/releases)

GreenDoge is a modern community-centric green cryptocurrency based on a proof-of-space-and-time consensus algorithm. It is a community-supported fork of the [Chia Network](https://github.com/Chia-Network/chia-blockchain) codebase. The pre-farm coins of GreenDoge are the same as Chia, but __the early block reward of GreenDoge is 50 times that of Chia. You can win more money today.__ For more information, see our website and downloads at https://greendoge.dog.

* [Proof of space and time](https://docs.google.com/document/d/1tmRIb7lgi4QfKkNaxuKOBHRmwbVlGL4f7EsBDr_5xZE/edit) based consensus which allows anyone to farm with commodity hardware
* Very easy to use full node and farmer GUI and cli (thousands of nodes active on mainnet)
* Simplified UTXO based transaction model, with small on-chain state
* Lisp-style Turing-complete functional [programming language](https://chialisp.com/) for money related use cases
* BLS keys and aggregate signatures (only one signature per block)
* Support for light clients with fast, objective syncing
* A growing community of farmers and developers around the world

## Please be informed
1. GreenDoge is not yet available for trading.<br>
2. The registered early participant rewards will be sent after the transfer function is activated.
3. The default value of _mojo_per_chia=1,000,000,000,000 is too large. In order to avoid the problem of [integer overflow](https://en.wikipedia.org/wiki/Integer_overflow) that is difficult to deal with in the future, and to reward early community participants. The block reward of the mainnet has been confirmed as [the code](https://github.com/GreenDoge-Network/greendoge-blockchain/blob/main/greendoge/consensus/block_rewards.py).

* The maximum value of UINT64 is 18,446,744,073,709,551,615<br>
* _mojo_per_chia is 1,000,000,000,000<br>
* 18,446,744,073,709,551,615 / 1,000,000,000,000 = 18,446,744 (very limited)
