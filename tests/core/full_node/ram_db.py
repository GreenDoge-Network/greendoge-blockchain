from typing import Tuple

import aiosqlite

from greendoge.consensus.blockchain import Blockchain
from greendoge.consensus.constants import ConsensusConstants
from greendoge.full_node.block_store import BlockStore
from greendoge.full_node.coin_store import CoinStore
from greendoge.util.db_wrapper import DBWrapper


async def create_ram_blockchain(consensus_constants: ConsensusConstants) -> Tuple[aiosqlite.Connection, Blockchain]:
    connection = await aiosqlite.connect(":memory:")
    db_wrapper = DBWrapper(connection)
    block_store = await BlockStore.create(db_wrapper)
    coin_store = await CoinStore.create(db_wrapper)
    blockchain = await Blockchain.create(coin_store, block_store, consensus_constants)
    return connection, blockchain
