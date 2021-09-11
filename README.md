# GreenDoge Blockchain
![image](https://github.com/GreenDoge-Network/greendoge-blockchain/blob/96981368b3949a91b836e8c01dca3b3ba0207d50/greendoge.jpg)
[Download GreenDoge blockchain](https://github.com/GreenDoge-Network/greendoge-blockchain/releases/tag/1.2.3)

GreenDoge: A new blockchain and smart transaction platform that is easier to use, more efficient, secure, and lower energy consumption. It is a community-supported fork of Chia blockchain, safely use your Chia mnemonics and plots to mine Green Dogecoin without plotting. Here are some of the features and benefits:
* Support Chia OG and new portable NFT plots without new hardware and plotting
* Lower energy consumption when mining with Chia
* Reduce the pre-mined value by increasing the block rewards by 10 to 50 times
* [Proof of space and time](https://docs.google.com/document/d/1tmRIb7lgi4QfKkNaxuKOBHRmwbVlGL4f7EsBDr_5xZE/edit) based consensus which allows anyone to farm with commodity hardware
* Very easy to use full node and farmer GUI and cli (thousands of nodes active on mainnet)
* Simplified UTXO based transaction model, with small on-chain state
* Lisp-style Turing-complete functional [programming language](https://chialisp.com/) for money related use cases
* BLS keys and aggregate signatures (only one signature per block)
* Support for light clients with fast, objective syncing
* A growing community of farmers and developers around the world

For more information, see our website and downloads at https://greendoge.dog.

## Mining full rewards on new portable NFT plots 
If you assign plots to a Chia plot NFT instead of a GreenDoge plot NFT, you will get the 1/8 rewards directly in GreenDoge software. The other 7/8 rewards must be taken out through [fd-cli tool](https://github.com/GreenDoge-Network/fd-cli) after 7 days.

## Latest News
- The whitepaper version 1.0.0 was officially released, downloads at https://greendoge.dog/whitepaper.
- The block rewards have been reduced from 100 to 20 now, with the end of the community early participant rewards for one month.
- GreenDoge has been listed on [forks.green](https://www.forks.green/) and [market.posat.io](https://market.posat.io/).
- The 500 GDOG rewards for registered early community participants have been sent.
- The rewards on the testnet will not be retained, please make sure you are on the mainnet.
![image](https://github.com/GreenDoge-Network/greendoge-blockchain/blob/79a9291b3d70f2dd03702e1822193f4d6ca16601/make_sure_mainnet.png)

## Installing

Install instructions are available in the
[INSTALL](https://github.com/Chia-Network/chia-blockchain/wiki/INSTALL)
section of the
[chia-blockchain repository wiki](https://github.com/Chia-Network/chia-blockchain/wiki).

## Running

Once installed, a
[Quick Start Guide](https://github.com/Chia-Network/chia-blockchain/wiki/Quick-Start-Guide)
is available from the repository
[wiki](https://github.com/Chia-Network/chia-blockchain/wiki).

## Syncing
If you need a quick synchronization, you can [download the database](https://chiadb.org/) and overwrite ".greendoge\mainnet\db\blockchain_v1_mainnet.sqlite".

## Emission Schedule
Farming rewards will create new GreenDoge once GreenDoge Network’s blockchain is launched. Our farming rewards schedule was directly patterned after the Chia rewards schedule. We present these rewards in an ideal case but the reality is usually far from ideal. Due to the fluctuations of space joining the network and Timelord speeds increasing or decreasing, the actual issuance schedule will vary slightly just as Bitcoin’s issuance schedule has historically. We may add a time adjustment factor based on what we have observed in Bitcoin to attempt to have farming rewards end up closer to this ideal than Bitcoin did. The idealized schedule is as follows: 
- 100 GDOG will be created every ten minutes for the first 1 month after launch.
- 20 GDOG will be created every ten minutes for the month 2 through 6.
- 10 GDOG will be created every ten minutes for the month 7 through 12.
- 5 GDOG will be created every ten minutes in year 2.
- 2.5 GDOG will be created every ten minutes in years 3 through 4.
- 1.25 GDOG will be created every ten minutes in years 5 through 6.
- 0.625 GDOG will be created every ten minutes in years 7 through 8.
- 0.3125 GDOG will be created every ten minutes every year after year 9.

## Compare with Chia
- [1.1.7](https://github.com/GreenDoge-Network/greendoge-blockchain/commit/ebc135046acf159d625bcb854bee613dc9f81182)
- [1.2.2](https://github.com/GreenDoge-Network/greendoge-blockchain/commit/1702a31ffe3e8e55e296d7047e00b08a161210d2)

## Node Information
- dns-introducer.greendoge.dog
- introducer.greendoge.dog:6545
- 18.214.88.31:6544 - US East (N. Virginia)
- 18.141.194.162:6544 - Asia Pacific (Singapore)

## History
- The ChiaDoge(CDOG) testnet launched on July 3, different from ChiaDogecoin(XCD) that launched on July 10.
- The name changed from ChiaDoge to GreenDoge(GDOG) on July 7.
- The mainnet launched on July 9.

## Links
Website: <br>
https://greendoge.dog <br>
Discord: <br>
https://discord.gg/HXbcfPGrgz <br>
Twitter: <br>
https://twitter.com/Green_Dogecoin <br>
Reddit: <br>
https://www.reddit.com/r/GreenDogecoin <br>
Facebook page: <br>
https://www.facebook.com/GreenDoge-102281638814048 <br>
Facebook group: <br>
https://www.facebook.com/groups/1152820041873426 <br>
GitHub: <br>
https://github.com/GreenDoge-Network/greendoge-blockchain <br>
Calculator: <br>
https://chiaforkscalculator.com/greendoge <br>
Telegram: <br>
https://t.me/green_doge (English) <br>
https://t.me/green_dogecoin (Chinese) <br>
Trade: <br>
https://www.forks.green/trading/gdogxch <br>
https://market.posat.io <br>
https://chiaforktraders.com <br>
Explorer: <br>
https://greendoge.posat.io <br>
https://alltheblocks.net/greendoge <br>
https://greendoge.chivescoin.org <br>
Database: <br>
https://chiadb.org

## Sponsor 
Sponsor the developer for renting the Intorducer and Timelord servers.
- BTC: 18e1gdU8EXg6V6gCqRWt3rEQTEsAqoPKaz
- ETH: 0x4ae2822c7391dbc32ba6d0a7ab315475d0b44581
- BNB: bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23 / MEMO 104421505
- TRC20: TVbXhifwY34cSVK6GuT5QWCxtWQiiCnYFz
- XCH: xch1wz5u3hj3wq6lzpsf5qxrhae6w2ff08mxekum03htpsgw3t98zfws2r24pu
- GDOG: gdog1u5qz05xkr7k7x3yuqdqmsz8yvvj0w9608wue7ykrnrgqnqrw0ltq7qhkk8
