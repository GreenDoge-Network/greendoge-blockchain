# Please be informed
1. GreenDoge is not yet available for trading.<br>
2. Because the value of _mojo_per_greendoge=1000000000000 is too large. In order to avoid the problem of variable overflow that is difficult to deal with in the future, and to reward early participants. The block reward is revised as follows.

    if height == 0:
        return uint64(int((1 / 8) * 21000000 * _mojo_per_greendoge))
    elif height < (3 / 12) * _blocks_per_year: #Early participation rewards
        return uint64(int((1 / 8) * 100 * _mojo_per_greendoge))
    elif height < 1 * _blocks_per_year:
        return uint64(int((1 / 8) * 50 * _mojo_per_greendoge))
    elif height < 2 * _blocks_per_year:
        return uint64(int((1 / 8) * 25 * _mojo_per_greendoge))
    elif height < 3 * _blocks_per_year:
        return uint64(int((1 / 8) * 12.5 * _mojo_per_greendoge))
    elif height < 4 * _blocks_per_year:
        return uint64(int((1 / 8) * 6.25 * _mojo_per_greendoge))
    elif height < 5 * _blocks_per_year:
        return uint64(int((1 / 8) * 3.125 * _mojo_per_greendoge))
    elif height < 6 * _blocks_per_year:
        return uint64(int((1 / 8) * 1.5625 * _mojo_per_greendoge))
    elif height < 7 * _blocks_per_year:
        return uint64(int((1 / 8) * 0.78125 * _mojo_per_greendoge))
    elif height < 8 * _blocks_per_year:
        return uint64(int((1 / 8) * 0.390625 * _mojo_per_greendoge))
    elif height < 9 * _blocks_per_year:
        return uint64(int((1 / 8) * 0.1953125 * _mojo_per_greendoge))
    else:
        return uint64(int((1 / 8) * 0.09765625 * _mojo_per_greendoge))

# GreenDoge Blockchain - Mainnet
![image](https://github.com/GreenDoge-Network/greendoge-blockchain/blob/96981368b3949a91b836e8c01dca3b3ba0207d50/greendoge.jpg)
[Download GreenDoge blockchain](https://github.com/GreenDoge-Network/greendoge-blockchain/releases), the mainnet is online!!!

## Migration plan
ChiaDoge is no longer maintained. Because of the suggestions of many people, We decided to migrate from [ChiaDoge](https://github.com/ChiaDoge/chiadoge-blockchain) to a more thoughtful [GreenDoge Blockchain](https://github.com/GreenDoge-Network/greendoge-blockchain). GreenDoge mainnet is online!!!

GreenDoge is a modern community-centric green cryptocurrency based on a proof-of-space-and-time consensus algorithm. It is a community-supported fork of the [Chia Network](https://github.com/Chia-Network/chia-blockchain) codebase. The pre-farm coins of GreenDoge are the same as Chia, but __the block reward of GreenDoge is 50 times. This means that the pre-farm value is only 2% of Chia.__

For more information, see our website and downloads at https://greendoge.dog .

## Full Nodes: 
https://github.com/GreenDoge-Network/greendoge-blockchain/blob/main/full_node_list

## Remove old version (Before you install the new version)
rm -r greendoge-blockchain<br>
rm -r .greendoge

## Installing
git clone https://github.com/GreenDoge-Network/greendoge-blockchain<br>
cd greendoge-blockchain<br>
sh install.sh<br>
. ./activate<br>
greendoge init<br>
greendoge keys add<br>
greendoge plots add -d D:\plots_path <br>
greendoge start farmer<br>
greendoge wallet show<br>
s<br>
greendoge show -a 18.141.197.43:6544<br>
greendoge show -a 18.141.194.162:6544

sh install-timelord.sh<br>
greendoge start timelord

For more information, join our [Discord](https://discord.gg/YJaBQ9a6) and see website at https://greendoge.dog.

## Running
Once installed, a
[Quick Start Guide](https://github.com/Chia-Network/chia-blockchain/wiki/Quick-Start-Guide)
is available from the repository
[wiki](https://github.com/Chia-Network/chia-blockchain/wiki).

## Telegram
[GreenDoge coin Promotion Group](https://t.me/joinchat/oY75zFYg9Wg0NDQ9)<br>
[绿狗币推广群](https://t.me/joinchat/b11R4pYF41c5MWNl)

## Reddit
https://www.reddit.com/r/GreenDogecoin/

## Community
[GreenDoge Promotion Community](https://discord.gg/YJaBQ9a6)<br>
[GreenDoge Coin Community](https://discord.gg/xjvxH5jD) (Hosted by Wolfrage, Azile, dogdream, volar)👑<br>
[ChiaDoge discord](https://discord.gg/6xcXWpFt) (Hosted by Vemika)

## Sponsor server fees
BTC: 18e1gdU8EXg6V6gCqRWt3rEQTEsAqoPKaz<br>
ETH: 0x4ae2822c7391dbc32ba6d0a7ab315475d0b44581<br>
BNB: bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23 / MEMO 104421505<br>
TRC20: TVbXhifwY34cSVK6GuT5QWCxtWQiiCnYFz
