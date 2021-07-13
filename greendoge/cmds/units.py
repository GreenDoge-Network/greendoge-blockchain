from typing import Dict

# The rest of the codebase uses dogs everywhere. Only uses these units
# for user facing interfaces
units: Dict[str, int] = {
    "greendoge": 10 ** 12,  # 1 greendoge (XDG) is 1,000,000,000,000 dog (1 Trillion)
    "dog:": 1,
    "colouredcoin": 10 ** 3,  # 1 coloured coin is 1000 colouredcoin dogs
}
