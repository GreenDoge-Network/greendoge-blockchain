import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("GREENDOGE_ROOT", "~/.greendoge/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("GREENDOGE_KEYS_ROOT", "~/.greendoge_keys"))).resolve()
