const { ObjectId } = require('mongodb');

const pairs = [
    {
        name: "WETH/USDT",
        symbol: "WETHUSDT",
        pair_type: "crypto-crypto",
        token1: ObjectId("62e417e5e3d9597df81f1207"),
        token2: ObjectId("62e419f0e3d9597df81f1209")
    },
    {
        name: "WBTC/USDT",
        symbol: "WBTCUSDT",
        pair_type: "crypto-crypto",
        token1: ObjectId("62e41ac9e3d9597df81f120a"),
        token2: ObjectId("62e419f0e3d9597df81f1209"),
    },
    {
        name: "MATIC/USDT",
        symbol: "MATICUSDT",
        pair_type: "crypto-crypto",
        token1: ObjectId("62e41b59e3d9597df81f120b"),
        token2: ObjectId("62e419f0e3d9597df81f1209"),
    },
    {
        name: "WETH/USDC",
        symbol: "WETHUSDC",
        pair_type: "crypto-crypto",
        token1: ObjectId("62e417e5e3d9597df81f1207"),
        token2: ObjectId("62e41d2ee3d9597df81f120c")
    },
    {
        name: "WBTC/USDC",
        symbol: "WBTCUSDC",
        pair_type: "crypto-crypto",
        token1: ObjectId("62e41ac9e3d9597df81f120a"),
        token2: ObjectId("62e41d2ee3d9597df81f120c"),
    },
    {
        name: "MATIC/USDC",
        symbol: "MATICUSDC",
        pair_type: "crypto-crypto",
        token1: ObjectId("62e41b59e3d9597df81f120b"),
        token2: ObjectId("62e41d2ee3d9597df81f120c"),
    },
    {
        name: "WETH/INR",
        symbol: "WETHINR",
        pair_type: "crypto-fiat",
        token1: ObjectId("62e417e5e3d9597df81f1207"),
        token2: ObjectId("62e41e61e3d9597df81f120d")
    },
    {
        name: "WBTC/INR",
        symbol: "WBTCINR",
        pair_type: "crypto-fiat",
        token1: ObjectId("62e41ac9e3d9597df81f120a"),
        token2: ObjectId("62e41e61e3d9597df81f120d"),
    },
    {
        name: "MATIC/INR",
        symbol: "MATICINR",
        pair_type: "crypto-fiat",
        token1: ObjectId("62e41b59e3d9597df81f120b"),
        token2: ObjectId("62e41e61e3d9597df81f120d"),
    },
]

module.exports = pairs;