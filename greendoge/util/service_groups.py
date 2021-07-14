from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "greendoge_harvester greendoge_timelord_launcher greendoge_timelord greendoge_farmer greendoge_full_node greendoge_wallet".split(),
    "node": "greendoge_full_node".split(),
    "harvester": "greendoge_harvester".split(),
    "farmer": "greendoge_harvester greendoge_farmer greendoge_full_node greendoge_wallet".split(),
    "farmer-no-wallet": "greendoge_harvester greendoge_farmer greendoge_full_node".split(),
    "farmer-only": "greendoge_farmer".split(),
    "timelord": "greendoge_timelord_launcher greendoge_timelord greendoge_full_node".split(),
    "timelord-only": "greendoge_timelord".split(),
    "timelord-launcher-only": "greendoge_timelord_launcher".split(),
    "wallet": "greendoge_wallet greendoge_full_node".split(),
    "wallet-only": "greendoge_wallet".split(),
    "introducer": "greendoge_introducer".split(),
    "simulator": "greendoge_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
