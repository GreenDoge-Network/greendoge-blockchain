from setuptools import setup

dependencies = [
    "blspy==1.0.3",  # Signature library
    "chiavdf==1.0.2",  # timelord and vdf verification
    "chiabip158==1.0",  # bip158-style wallet filters
    "chiapos==1.0.3",  # proof of space
    "clvm==0.9.7",
    "clvm_rs==0.1.8",
    "clvm_tools==0.4.3",
    "aiohttp==3.7.4",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.7",  # Binary data management library
    "colorlog==5.0.1",  # Adds color to logs
    "concurrent-log-handler==0.9.19",  # Concurrently log and rotate logs
    "cryptography==3.4.7",  # Python cryptography library for TLS - keyring conflict
    "keyring==23.0.1",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==5.4.1",  # Used for config file format
    "setproctitle==1.2.2",  # Gives the greendoge processes readable names
    "sortedcontainers==2.4.0",  # For maintaining sorted mempools
    "websockets==8.1.0",  # For use in wallet RPC and electron UI
    "click==7.1.2",  # For the CLI
    "dnspython==2.1.0",  # Query DNS seeds
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "pytest",
    "pytest-asyncio",
    "flake8",
    "mypy",
    "black",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
]

kwargs = dict(
    name="greendoge-blockchain",
    author="Lion Ethan",
    author_email="ethan@greendoge.dog",
    description="GreenDoge blockchain full node, farmer, timelord, and wallet.",
    url="https://greendoge.dog/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="greendoge blockchain node",
    install_requires=dependencies,
    setup_requires=["setuptools_scm"],
    extras_require=dict(
        uvloop=["uvloop"],
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "greendoge",
        "greendoge.cmds",
        "greendoge.clvm",
        "greendoge.consensus",
        "greendoge.daemon",
        "greendoge.full_node",
        "greendoge.timelord",
        "greendoge.farmer",
        "greendoge.harvester",
        "greendoge.introducer",
        "greendoge.plotting",
        "greendoge.pools",
        "greendoge.protocols",
        "greendoge.rpc",
        "greendoge.server",
        "greendoge.simulator",
        "greendoge.types.blockchain_format",
        "greendoge.types",
        "greendoge.util",
        "greendoge.wallet",
        "greendoge.wallet.puzzles",
        "greendoge.wallet.rl_wallet",
        "greendoge.wallet.cc_wallet",
        "greendoge.wallet.did_wallet",
        "greendoge.wallet.settings",
        "greendoge.wallet.trading",
        "greendoge.wallet.util",
        "greendoge.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "greendoge = greendoge.cmds.greendoge:main",
            "greendoge_wallet = greendoge.server.start_wallet:main",
            "greendoge_full_node = greendoge.server.start_full_node:main",
            "greendoge_harvester = greendoge.server.start_harvester:main",
            "greendoge_farmer = greendoge.server.start_farmer:main",
            "greendoge_introducer = greendoge.server.start_introducer:main",
            "greendoge_timelord = greendoge.server.start_timelord:main",
            "greendoge_timelord_launcher = greendoge.timelord.timelord_launcher:main",
            "greendoge_full_node_simulator = greendoge.simulator.start_simulator:main",
        ]
    },
    package_data={
        "greendoge": ["pyinstaller.spec"],
        "greendoge.wallet.puzzles": ["*.clvm", "*.clvm.hex"],
        "greendoge.util": ["initial-*.yaml", "english.txt"],
        "greendoge.ssl": ["greendoge_ca.crt", "greendoge_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["cacert.pem"],
    },
    use_scm_version={"fallback_version": "unknown-no-.git-directory"},
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
)


if __name__ == "__main__":
    setup(**kwargs)
