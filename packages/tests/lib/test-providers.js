"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
//import Web3HttpProvider from "web3-providers-http";
var ethers_1 = require("ethers");
var bnify = ethers_1.ethers.BigNumber.from;
var blockchainData = {
    homestead: {
        addresses: [
            {
                address: "0xAC1639CF97a3A46D431e6d1216f576622894cBB5",
                balance: bnify("4813414100000000"),
                code: "0x"
            },
            // Splitter contract
            {
                address: "0x3474627D4F63A678266BC17171D87f8570936622",
                code: "0x606060405260e060020a60003504630b3ed5368114602e57806337b0574a14605257806356fa47f0146062575b005b602c6004356000546101009004600160a060020a03908116339091161460bb575b50565b60005460ff166060908152602090f35b602c60043560005460ff1615609657600160a060020a038116600034606082818181858883f193505050501515604f576002565b33600160a060020a0316600034606082818181858883f193505050501515604f576002565b600080546101009004600160a060020a03169082606082818181858883f193505050501515604f57600256",
                storage: {
                    "0": "0x0000000000000000000000b2682160c482eb985ec9f3e364eec0a904c44c2300"
                }
            },
            {
                address: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
                name: "ricmoo.firefly.eth"
            },
        ],
        blocks: [
            {
                hash: "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741",
                parentHash: "0xb495a1d7e6663152ae92708da4843337b958146015a2802f4193a410044698c9",
                number: 3,
                timestamp: 1438270048,
                nonce: "0x2e9344e0cbde83ce",
                difficulty: 17154715646,
                gasLimit: bnify("0x1388"),
                gasUsed: bnify("0"),
                miner: "0x5088D623ba0fcf0131E0897a91734A4D83596AA0",
                extraData: "0x476574682f76312e302e302d66633739643332642f6c696e75782f676f312e34",
                transactions: []
            }
        ],
        transactions: [
            {
                hash: "0xccc90ab97a74c952fb3376c4a3efb566a58a10df62eb4d44a61e106fcf10ec61",
                blockHash: "0x9653f180a5720f3634816eb945a6d722adee52cc47526f6357ac10adaf368135",
                blockNumber: 4097745,
                transactionIndex: 18,
                from: "0x32DEF047DeFd076DB21A2D759aff2A591c972248",
                gasPrice: bnify("0x4a817c800"),
                gasLimit: bnify("0x3d090"),
                to: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                value: bnify("0x186cc6acd4b0000"),
                nonce: 0,
                data: "0xf2c298be000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000067269636d6f6f0000000000000000000000000000000000000000000000000000",
                r: "0x1e5605197a03e3f0a168f14749168dfeefc44c9228312dacbffdcbbb13263265",
                s: "0x269c3e5b3558267ad91b0a887d51f9f10098771c67b82ea6cb74f29638754f54",
                v: 38,
                creates: null,
                //raw: "0xf8d2808504a817c8008303d090946fc21092da55b392b045ed78f4732bff3c580e2c880186cc6acd4b0000b864f2c298be000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000067269636d6f6f000000000000000000000000000000000000000000000000000026a01e5605197a03e3f0a168f14749168dfeefc44c9228312dacbffdcbbb13263265a0269c3e5b3558267ad91b0a887d51f9f10098771c67b82ea6cb74f29638754f54",
                chainId: 1
            }
        ],
        transactionReceipts: [
            {
                blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                blockNumber: 0x3c92b5,
                contractAddress: null,
                cumulativeGasUsed: 0x1cca2e,
                from: "0x18C6045651826824FEBBD39d8560584078d1b247",
                gasUsed: 0x14bb7,
                logs: [
                    {
                        address: "0x314159265dD8dbb310642f98f50C066173C1259b",
                        blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                        blockNumber: 0x3c92b5,
                        data: "0x00000000000000000000000018c6045651826824febbd39d8560584078d1b247",
                        logIndex: 0x1a,
                        topics: [
                            "0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82",
                            "0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae",
                            "0xf0106919d12469348e14ad6a051d0656227e1aba2fefed41737fdf78421b20e1"
                        ],
                        transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                        transactionIndex: 0x39,
                    },
                    {
                        address: "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef",
                        blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                        blockNumber: 0x3c92b5,
                        data: "0x000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000000000000000595a32ce",
                        logIndex: 0x1b,
                        topics: [
                            "0x0f0c27adfd84b60b6f456b0e87cdccb1e5fb9603991588d87fa99f5b6b61e670",
                            "0xf0106919d12469348e14ad6a051d0656227e1aba2fefed41737fdf78421b20e1",
                            "0x00000000000000000000000018c6045651826824febbd39d8560584078d1b247"
                        ],
                        transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                        transactionIndex: 0x39,
                    }
                ],
                logsBloom: "0x00000000000000040000000000100000010000000000000040000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000200000010000000004000000000000000000000000000000000002000000000000000000000000400000000020000000000000000000000000000000000000004000000000000000000000000000000000000000000000000801000000000000000000000020000000000040000000040000000000000000002000000004000000000000000000000000000000000000000000000010000000000000000000000000000000000200000000000000000",
                root: "0x9b550a9a640ce50331b64504ef87aaa7e2aaf97344acb6ff111f879b319d2590",
                status: null,
                to: "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef",
                transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                transactionIndex: 0x39
            },
            // Byzantium block
            {
                byzantium: true,
                blockHash: "0x34e5a6cfbdbb84f7625df1de69d218ade4da72f4a2558064a156674e72e976c9",
                blockNumber: 0x444f76,
                contractAddress: null,
                cumulativeGasUsed: 0x15bfe7,
                from: "0x18C6045651826824FEBBD39d8560584078d1b247",
                gasUsed: 0x1b968,
                logs: [
                    {
                        address: "0xb90E64082D00437e65A76d4c8187596BC213480a",
                        blockHash: "0x34e5a6cfbdbb84f7625df1de69d218ade4da72f4a2558064a156674e72e976c9",
                        blockNumber: 0x444f76,
                        data: "0x",
                        logIndex: 0x10,
                        topics: [
                            "0x748d071d1992ee1bfe7a39058114d0a50d5798fe8eb3a9bfb4687f024629a2ce",
                            "0x5574aa58f7191ccab6de6cf75fe2ea0484f010b852fdd8c6b7ae151d6c2f4b83"
                        ],
                        transactionHash: "0x7f1c6a58dc880438236d0b0a4ae166e9e9a038dbea8ec074149bd8b176332cac",
                        transactionIndex: 0x1e,
                    }
                ],
                logsBloom: "0x00000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000200000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000800000000000000000800000000000000000000000000000000000000",
                status: 1,
                to: "0xb90E64082D00437e65A76d4c8187596BC213480a",
                transactionHash: "0x7f1c6a58dc880438236d0b0a4ae166e9e9a038dbea8ec074149bd8b176332cac",
                transactionIndex: 0x1e
            }
        ]
    },
    kovan: {
        addresses: [
            {
                address: "0x09c967A0385eE3B3717779738cA0B9D116e0EcE7",
                balance: bnify("997787946734641021"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0xf0ec9bf41b99a6bd1f6cd29f91302f71a1a82d14634d2e207edea4b7962f3676",
                parentHash: "0xf110ecd84454f116e2222378e7bca81ac3e59be0dac96d7ec56d5ef1c3bc1d64",
                number: 3,
                timestamp: 1488459452,
                difficulty: 131072,
                gasLimit: bnify("0x5b48ec"),
                gasUsed: bnify("0"),
                miner: "0x00A0A24b9f0E5EC7Aa4c7389b8302fd0123194dE",
                extraData: "0xd5830105048650617269747986312e31352e31826c69",
                transactions: []
            },
            // Kovan Test Case with difficulty > 53-bits; See #711
            {
                hash: "0xd92891a6eeaed4892289edf9bd5ebff261da5c6a51f7131cc1a481c6f4d1aa75",
                parentHash: "0xcc769a02513be1df80eee7d3a5cb87f14f37baee03c13f3e3ad1e7bdcaf7dac3",
                number: 16265864,
                timestamp: 1579621004,
                difficulty: null,
                gasLimit: bnify("0x989680"),
                gasUsed: bnify("0x0705bf"),
                miner: "0x596e8221A30bFe6e7eFF67Fee664A01C73BA3C56",
                extraData: "0xde830206088f5061726974792d457468657265756d86312e34302e30826c69",
                transactions: [
                    "0x20e6760fa1297fb06c8c20e6ed99581e0ba964d51167ea3c8ff580bfcb10bfc3",
                    "0x0ce7eba48b1bbdee05823b79ae24e741f3f290d0abfef8ae9adf32db108b7dd6",
                    "0x1fa2baafa844bf4853e4abbbf49532bf570210d589dc626dbf7ebc4832bdfa5d",
                    "0xdb5d1fa54d30a4b6aee0b242a2c68ea52d3dd28703f69e6e30871827850aa2fa",
                    "0xcc898db85d7d2493d4778faf640be32a4a3b7f5f987257bdc0009ce75a18eeaa"
                ]
            },
        ],
        transactions: [],
        transactionReceipts: []
    },
    rinkeby: {
        addresses: [
            {
                address: "0xd09a624630a656a7dbb122cb05e41c12c7cd8c0e",
                balance: bnify("3000000000000000000"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0x9eb9db9c3ec72918c7db73ae44e520139e95319c421ed6f9fc11fa8dd0cddc56",
                parentHash: "0x9b095b36c15eaf13044373aef8ee0bd3a382a5abb92e402afa44b8249c3a90e9",
                number: 3,
                timestamp: 1492010489,
                nonce: "0x0000000000000000",
                difficulty: 2,
                gasLimit: bnify("0x47e7c4"),
                gasUsed: bnify(0),
                miner: "0x0000000000000000000000000000000000000000",
                extraData: "0xd783010600846765746887676f312e372e33856c696e757800000000000000004e10f96536e45ceca7e34cc1bdda71db3f3bb029eb69afd28b57eb0202c0ec0859d383a99f63503c4df9ab6c1dc63bf6b9db77be952f47d86d2d7b208e77397301",
                transactions: []
            },
        ],
        transactions: [],
        transactionReceipts: []
    },
    ropsten: {
        addresses: [
            {
                address: "0x03a6F7a5ce5866d9A0CCC1D4C980b8d523f80480",
                balance: bnify("15861113897828552666"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0xaf2f2d55e6514389bcc388ccaf40c6ebf7b3814a199a214f1203fb674076e6df",
                parentHash: "0x88e8bc1dd383672e96d77ee247e7524622ff3b15c337bd33ef602f15ba82d920",
                number: 3,
                timestamp: 1479642588,
                nonce: "0x04668f72247a130c",
                difficulty: 996427,
                gasLimit: bnify("0xff4033"),
                gasUsed: bnify("0"),
                miner: "0xD1aEb42885A43b72B518182Ef893125814811048",
                extraData: "0xd883010503846765746887676f312e372e318664617277696e",
                transactions: []
            },
        ],
        transactions: [],
        transactionReceipts: [
            {
                blockHash: "0xc9235b8253fce455942147aa8b450d23081b867ffbb2a1e4dec934827cd80f8f",
                blockNumber: 0x1564d8,
                contractAddress: null,
                cumulativeGasUsed: bnify("0x80b9"),
                from: "0xb346D5019EeafC028CfC01A5f789399C2314ae8D",
                gasUsed: bnify("0x80b9"),
                logs: [
                    {
                        address: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                        blockHash: "0xc9235b8253fce455942147aa8b450d23081b867ffbb2a1e4dec934827cd80f8f",
                        blockNumber: 0x1564d8,
                        data: "0x00000000000000000000000006b5955a67d827cdf91823e3bb8f069e6c89c1d6000000000000000000000000000000000000000000000000016345785d8a0000",
                        logIndex: 0x0,
                        topics: [
                            "0xac375770417e1cb46c89436efcf586a74d0298fee9838f66a38d40c65959ffda"
                        ],
                        transactionHash: "0x55c477790b105e69e98afadf0505cbda606414b0187356137132bf24945016ce",
                        transactionIndex: 0x0,
                    }
                ],
                logsBloom: "0x00000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000010000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                root: "0xf1c3506ab619ac1b5e8f1ca355b16d6b9a1b7436b2960b0e9ec9a91f4238b5cc",
                to: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                transactionHash: "0x55c477790b105e69e98afadf0505cbda606414b0187356137132bf24945016ce",
                transactionIndex: 0x0
            },
            // Byzantium Receipt
            {
                byzantium: true,
                blockHash: "0x61d343e0e081b60ac53bab381e07bdd5d0815b204091a576fd05106b814e7e1e",
                blockNumber: 0x1e1e3b,
                contractAddress: null,
                cumulativeGasUsed: bnify("0x4142f"),
                from: "0xdc8F20170C0946ACCF9627b3EB1513CFD1c0499f",
                gasUsed: bnify("0x1eb6d"),
                logs: [
                    {
                        address: "0xCBf1735Aad8C4B337903cD44b419eFE6538aaB40",
                        blockHash: "0x61d343e0e081b60ac53bab381e07bdd5d0815b204091a576fd05106b814e7e1e",
                        blockNumber: 0x1e1e3b,
                        data: "0x000000000000000000000000b70560a43a9abf6ea2016f40a3e84b8821e134c5f6c95607c490f4f379c0160ef5c8898770f8a52959abf0e9de914647b377fa290000000000000000000000000000000000000000000000000000000000001c20000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000355524c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c6a736f6e2868747470733a2f2f6170692e6b72616b656e2e636f6d2f302f7075626c69632f5469636b65723f706169723d455448555344292e726573756c742e584554485a5553442e632e300000000000000000000000000000000000000000",
                        logIndex: 0x1,
                        topics: ["0xb76d0edd90c6a07aa3ff7a222d7f5933e29c6acc660c059c97837f05c4ca1a84"],
                        transactionHash: "0xf724f1d6813f13fb523c5f6af6261d06d41138dd094fff723e09fb0f893f03e6",
                        transactionIndex: 0x2,
                    }
                ],
                logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000080000000202000000",
                status: 1,
                to: "0xB70560a43A9aBf6ea2016F40a3e84B8821E134c5",
                transactionHash: "0xf724f1d6813f13fb523c5f6af6261d06d41138dd094fff723e09fb0f893f03e6",
                transactionIndex: 0x2
            },
        ],
    },
    goerli: {
        addresses: [
            {
                address: "0x06B5955A67D827CDF91823E3bB8F069e6c89c1D6",
                balance: bnify("314159000000000000"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0xd5daa825732729bb0d2fd187a1b888e6bfc890f1fc5333984740d9052afb2920",
                parentHash: "0xe675f1362d82cdd1ec260b16fb046c17f61d8a84808150f5d715ccce775f575e",
                number: 3,
                timestamp: 1548947483,
                difficulty: 2,
                gasLimit: bnify("10455073"),
                gasUsed: bnify("0"),
                miner: "0x0000000000000000000000000000000000000000",
                extraData: "0x506172697479205465636820417574686f7269747900000000000000000000002822e1b202411c38084d96c84302b8361ec4840a51cd2fad9cb4bd9921cad7e64bc2e5dc7b41f3f75b33358be3aec718cf4d4317ace940e01b3581a95c9259ac01",
                transactions: []
            },
            // Blockhash with leading zero; see #629
            {
                hash: "0x0f305466552efa183a0de26b6fda26d55a872dbc02aca8b5852cc2a361ce9ee4",
                parentHash: "0x6723e880e01c15c5ac894abcae0f5b55ea809a31eaf5618998928f7d9cbc5118",
                number: 1479831,
                timestamp: 1571216171,
                difficulty: 2,
                gasLimit: bnify(0x7a1200),
                gasUsed: bnify("0x0d0ef5"),
                miner: "0x0000000000000000000000000000000000000000",
                extraData: "0x0000000000000000000000000000000000000000000000000000000000000000f4e6fc1fbd88adf57a272d98f725487f872ef0495a54c2b873a58d14e010bf517cc5650417f18cfd4ad2396272c564a7da1265ae27c397609293f488ec57d68e01",
                transactions: [
                    "0xea29f0764f03c5c67ac53a866a28ce23a4a032c2de4327e452b39f482920761a",
                    "0x0eef23ffb59ac41762fdfa55d9e47e82fa7f0b70b1e8ec486d72fe1fee15f6de",
                    "0xba1eeb67ac6e8d1aa900ff6fbd84ac46869c9e100b33f787acfb234cd9c93f9f",
                    "0x4f412ab735b29ddc8b1ff7abe4bfece7ad4684aa20e260fbc42aed75a0d387ea",
                    "0x2f1fddcc7a2c4b2b7d83c5cadec4e7b71c34cec65da99b1114bd2b044ae0636c"
                ]
            }
        ],
        transactions: [],
        transactionReceipts: [
            {
                blockHash: "0x2384e8e8bdcf6eb87ec7c138fa503ac34adb32cac817e4b35f14d4339eaa1993",
                blockNumber: 47464,
                byzantium: true,
                contractAddress: null,
                cumulativeGasUsed: bnify(21000),
                from: "0x8c1e1e5b47980D214965f3bd8ea34C413E120ae4",
                gasUsed: bnify(21000),
                logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                to: "0x58Bb4221245461E1d4cf886f18a01E3Df40Bd359",
                transactionHash: "0xec8b1ac5d787f36c738cc7793fec606283b41f1efa69df4ae6b2a014dcd12797",
                transactionIndex: 0,
                logs: [],
                status: 1
            }
        ],
    }
};
blockchainData["default"] = blockchainData.homestead;
function equals(name, actual, expected) {
    if (expected && expected.eq) {
        if (actual == null) {
            assert_1.default.ok(false, name + " - actual big number null");
        }
        expected = ethers_1.ethers.BigNumber.from(expected);
        actual = ethers_1.ethers.BigNumber.from(actual);
        assert_1.default.ok(expected.eq(actual), name + " matches");
    }
    else if (Array.isArray(expected)) {
        if (actual == null) {
            assert_1.default.ok(false, name + " - actual array null");
        }
        assert_1.default.equal(actual.length, expected.length, name + " array lengths match");
        for (var i = 0; i < expected.length; i++) {
            equals("(" + name + " - item " + i + ")", actual[i], expected[i]);
        }
    }
    else if (typeof (expected) === "object") {
        if (actual == null) {
            if (expected === actual) {
                return;
            }
            assert_1.default.ok(false, name + " - actual object null");
        }
        var keys_1 = {};
        Object.keys(expected).forEach(function (key) { keys_1[key] = true; });
        Object.keys(actual).forEach(function (key) { keys_1[key] = true; });
        Object.keys(keys_1).forEach(function (key) {
            equals("(" + name + " - key + " + key + ")", actual[key], expected[key]);
        });
    }
    else {
        if (actual == null) {
            assert_1.default.ok(false, name + " - actual null");
        }
        assert_1.default.equal(actual, expected, name + " matches");
    }
}
function waiter(duration) {
    return new Promise(function (resolve) {
        var timer = setTimeout(resolve, duration);
        if (timer.unref) {
            timer.unref();
        }
    });
}
var allNetworks = ["default", "homestead", "ropsten", "rinkeby", "kovan", "goerli"];
var providerFunctions = [
    {
        name: "getDefaultProvider",
        networks: allNetworks,
        create: function (network) {
            if (network == "default") {
                return ethers_1.ethers.getDefaultProvider();
            }
            return ethers_1.ethers.getDefaultProvider(network);
        }
    },
    {
        name: "AlchemyProvider",
        networks: allNetworks,
        create: function (network) {
            if (network == "default") {
                return new ethers_1.ethers.providers.AlchemyProvider();
            }
            return new ethers_1.ethers.providers.AlchemyProvider(network);
        }
    },
    {
        name: "CloudflareProvider",
        networks: ["homestead"],
        create: function (network) {
            return new ethers_1.ethers.providers.AlchemyProvider(network);
        }
    },
    {
        name: "InfuraProvider",
        networks: allNetworks,
        create: function (network) {
            if (network == "default") {
                return new ethers_1.ethers.providers.InfuraProvider();
            }
            return new ethers_1.ethers.providers.InfuraProvider(network);
        }
    },
    {
        name: "EtherscanProvider",
        networks: allNetworks,
        create: function (network) {
            if (network == "default") {
                return new ethers_1.ethers.providers.EtherscanProvider();
            }
            return new ethers_1.ethers.providers.EtherscanProvider(network);
        }
    },
    {
        name: "NodesmithProvider",
        networks: [],
        create: function (network) {
            throw new Error("not tested");
        }
    },
    {
        name: "Web3Provider",
        networks: [],
        create: function (network) {
            throw new Error("not tested");
        }
    }
];
// This wallet can be funded and used for various test cases
var fundWallet = ethers_1.ethers.Wallet.createRandom();
var testFunctions = [];
Object.keys(blockchainData).forEach(function (network) {
    function addSimpleTest(name, func, expected) {
        var _this = this;
        testFunctions.push({
            name: name,
            networks: [network],
            execute: function (provider) { return __awaiter(_this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, func(provider)];
                        case 1:
                            value = _a.sent();
                            equals(name, expected, value);
                            return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    function addObjectTest(name, func, expected, checkSkip) {
        var _this = this;
        testFunctions.push({
            name: name,
            networks: [network],
            checkSkip: checkSkip,
            execute: function (provider) { return __awaiter(_this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, func(provider)];
                        case 1:
                            value = _a.sent();
                            Object.keys(expected).forEach(function (key) {
                                equals(name + "." + key, value[key], expected[key]);
                            });
                            return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    var tests = blockchainData[network];
    // And address test case can have any of the following:
    // - balance
    // - code
    // - storage
    // - ENS name
    tests.addresses.forEach(function (test) {
        if (test.balance) {
            addSimpleTest("fetches account balance: " + test.address, function (provider) {
                return provider.getBalance(test.address);
            }, test.balance);
        }
        if (test.code) {
            addSimpleTest("fetches account code: " + test.address, function (provider) {
                return provider.getCode(test.address);
            }, test.code);
        }
        if (test.storage) {
            Object.keys(test.storage).forEach(function (position) {
                addSimpleTest("fetches storage: " + test.address + ":" + position, function (provider) {
                    return provider.getStorageAt(test.address, bnify(position));
                }, test.storage[position]);
            });
        }
        if (test.name) {
            addSimpleTest("fetches ENS name: " + test.address, function (provider) {
                return provider.resolveName(test.name);
            }, test.address);
        }
    });
    tests.blocks.forEach(function (test) {
        addObjectTest("fetches block (by number) #" + test.number, function (provider) {
            return provider.getBlock(test.number);
        }, test);
    });
    tests.blocks.forEach(function (test) {
        addObjectTest("fetches block (by hash) " + test.hash, function (provider) {
            return provider.getBlock(test.hash);
        }, test, function (provider, network, test) {
            return (provider === "EtherscanProvider");
        });
    });
    tests.transactions.forEach(function (test) {
        addObjectTest("fetches transaction " + test.hash, function (provider) { return __awaiter(void 0, void 0, void 0, function () {
            var tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.getTransaction(test.hash)];
                    case 1:
                        tx = _a.sent();
                        // This changes with every block
                        assert_1.default.equal(typeof (tx.confirmations), "number", "confirmations is a number");
                        delete tx.confirmations;
                        assert_1.default.equal(typeof (tx.wait), "function", "wait is a function");
                        delete tx.wait;
                        return [2 /*return*/, tx];
                }
            });
        }); }, test, function (provider, network, test) {
            return (provider === "EtherscanProvider");
        });
    });
    tests.transactionReceipts.forEach(function (test) {
        addObjectTest("fetches transaction receipt " + test.transactionHash, function (provider) { return __awaiter(void 0, void 0, void 0, function () {
            var receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.getTransactionReceipt(test.transactionHash)];
                    case 1:
                        receipt = _a.sent();
                        if (test.status === null) {
                            assert_1.default.ok(receipt.status === undefined, "no status");
                            receipt.status = null;
                        }
                        // This changes with every block; so just make sure it is a number
                        assert_1.default.equal(typeof (receipt.confirmations), "number", "confirmations is a number");
                        delete receipt.confirmations;
                        return [2 /*return*/, receipt];
                }
            });
        }); }, test);
    });
});
(function () {
    var _this = this;
    function addErrorTest(code, func) {
        var _this = this;
        testFunctions.push({
            name: "throws correct " + code + " error",
            networks: ["ropsten"],
            execute: function (provider) { return __awaiter(_this, void 0, void 0, function () {
                var value, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, func(provider)];
                        case 1:
                            value = _a.sent();
                            console.log(value);
                            assert_1.default.ok(false, "did not throw");
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            assert_1.default.equal(error_1.code, code, "incorrect error thrown");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    addErrorTest(ethers_1.ethers.utils.Logger.errors.NONCE_EXPIRED, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, provider.sendTransaction("0xf86480850218711a0082520894000000000000000000000000000000000000000002801ba038aaddcaaae7d3fa066dfd6f196c8348e1bb210f2c121d36cb2c24ef20cea1fba008ae378075d3cd75aae99ab75a70da82161dffb2c8263dabc5d8adecfa9447fa")];
        });
    }); });
    addErrorTest(ethers_1.ethers.utils.Logger.errors.INSUFFICIENT_FUNDS, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        var txProps, wallet, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txProps = {
                        to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
                        gasPrice: 9000000000,
                        gasLimit: 21000,
                        value: 1
                    };
                    wallet = ethers_1.ethers.Wallet.createRandom();
                    return [4 /*yield*/, wallet.signTransaction(txProps)];
                case 1:
                    tx = _a.sent();
                    return [2 /*return*/, provider.sendTransaction(tx)];
            }
        });
    }); });
    addErrorTest(ethers_1.ethers.utils.Logger.errors.INSUFFICIENT_FUNDS, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        var txProps, wallet;
        return __generator(this, function (_a) {
            txProps = {
                to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
                gasPrice: 9000000000,
                gasLimit: 21000,
                value: 1
            };
            wallet = ethers_1.ethers.Wallet.createRandom().connect(provider);
            return [2 /*return*/, wallet.sendTransaction(txProps)];
        });
    }); });
    addErrorTest(ethers_1.ethers.utils.Logger.errors.UNPREDICTABLE_GAS_LIMIT, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, provider.estimateGas({
                    to: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" // ENS contract
                })];
        });
    }); });
})();
testFunctions.push({
    name: "sends a transaction",
    extras: ["funding"],
    timeout: 300,
    networks: ["ropsten"],
    execute: function (provider) { return __awaiter(void 0, void 0, void 0, function () {
        var wallet, addr, b0, tx, b1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = fundWallet.connect(provider);
                    addr = "0x8210357f377E901f18E45294e86a2A32215Cc3C9";
                    return [4 /*yield*/, provider.getBalance(wallet.address)];
                case 1:
                    b0 = _a.sent();
                    assert_1.default.ok(b0.gt(ethers_1.ethers.constants.Zero), "balance is non-zero");
                    return [4 /*yield*/, wallet.sendTransaction({
                            to: addr,
                            value: 123
                        })];
                case 2:
                    tx = _a.sent();
                    return [4 /*yield*/, tx.wait()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, provider.getBalance(wallet.address)];
                case 4:
                    b1 = _a.sent();
                    assert_1.default.ok(b0.gt(b1), "balance is decreased");
                    return [2 /*return*/];
            }
        });
    }); }
});
describe("Test Provider Methods", function () {
    var fundReceipt = null;
    var faucet = "0x8210357f377E901f18E45294e86a2A32215Cc3C9";
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, funder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = ethers_1.ethers.getDefaultProvider("ropsten");
                        return [4 /*yield*/, ethers_1.ethers.utils.fetchJson("https://api.ethers.io/api/v1/?action=fundAccount&address=" + fundWallet.address.toLowerCase())];
                    case 1:
                        funder = _a.sent();
                        fundReceipt = provider.waitForTransaction(funder.hash);
                        fundReceipt.then(function (receipt) {
                            console.log("*** Funded: " + fundWallet.address);
                        });
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, gasPrice, balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait until the funding is complete
                    return [4 /*yield*/, fundReceipt];
                    case 1:
                        // Wait until the funding is complete
                        _a.sent();
                        provider = ethers_1.ethers.getDefaultProvider("ropsten");
                        return [4 /*yield*/, provider.getGasPrice()];
                    case 2:
                        gasPrice = _a.sent();
                        return [4 /*yield*/, provider.getBalance(fundWallet.address)];
                    case 3:
                        balance = _a.sent();
                        fundWallet.connect(provider).sendTransaction({
                            to: faucet,
                            gasLimit: 21000,
                            gasPrice: gasPrice,
                            value: balance.sub(gasPrice.mul(21000))
                        });
                        return [2 /*return*/];
                }
            });
        });
    });
    providerFunctions.forEach(function (_a) {
        var name = _a.name, networks = _a.networks, create = _a.create;
        networks.forEach(function (network) {
            var provider = create(network);
            testFunctions.forEach(function (test) {
                // Skip tests not supported on this network
                if (test.networks.indexOf(network) === -1) {
                    return;
                }
                if (test.checkSkip && test.checkSkip(name, network, test)) {
                    return;
                }
                // How many attempts to try?
                var attempts = (test.attempts != null) ? test.attempts : 3;
                var timeout = (test.timeout != null) ? test.timeout : 60;
                var extras = (test.extras || []).reduce(function (accum, key) {
                    accum[key] = true;
                    return accum;
                }, {});
                it(name + "." + (network ? network : "default") + " " + test.name, function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var error, attempt, attemptError_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.timeout(timeout * 1000 * attempts);
                                    if (!extras.funding) return [3 /*break*/, 2];
                                    return [4 /*yield*/, fundReceipt];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (!!extras.nowait) return [3 /*break*/, 4];
                                    return [4 /*yield*/, waiter(1000)];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    error = null;
                                    attempt = 0;
                                    _a.label = 5;
                                case 5:
                                    if (!(attempt < attempts)) return [3 /*break*/, 10];
                                    _a.label = 6;
                                case 6:
                                    _a.trys.push([6, 8, , 9]);
                                    return [4 /*yield*/, Promise.race([
                                            test.execute(provider),
                                            waiter(timeout * 1000).then(function (resolve) { throw new Error("timeout"); })
                                        ])];
                                case 7: return [2 /*return*/, _a.sent()];
                                case 8:
                                    attemptError_1 = _a.sent();
                                    console.log("*** Failed attempt " + (attempt + 1) + ": " + attemptError_1.message);
                                    error = attemptError_1;
                                    return [3 /*break*/, 9];
                                case 9:
                                    attempt++;
                                    return [3 /*break*/, 5];
                                case 10: throw error;
                            }
                        });
                    });
                });
            });
        });
    });
});
/*
describe("Test extra Etherscan operations", function() {
    let provider = new providers.EtherscanProvider();
    it("fethces the current price of ether", function() {
        this.timeout(20000);
        return provider.getEtherPrice().then(function(price) {
            assert.ok(typeof(price) === "number", "Etherscan price returns a number");
            assert.ok(price > 0.0, "Etherscan price returns non-zero");
        });
    });
    it("fetches the history", function() {
        this.timeout(100000);
        return provider.getHistory("ricmoo.firefly.eth").then(function(history) {
            assert.ok(history.length > 40, "Etherscan history returns results");
            assert.equal(history[0].hash, "0xd25f550cfdff90c086a6496a84dbb2c4577df15b1416e5b3319a3e4ebb5b25d8", "Etherscan history returns correct transaction");
        });
    });
});
*/
describe("Test Basic Authentication", function () {
    //this.retries(3);
    function test(name, url) {
        it("tests " + name, function () {
            this.timeout(60000);
            return ethers_1.ethers.utils.fetchJson(url).then(function (data) {
                assert_1.default.equal(data.authenticated, true, "authenticates user");
            });
        });
    }
    var secure = {
        url: "https://httpbin.org/basic-auth/user/passwd",
        user: "user",
        password: "passwd"
    };
    var insecure = {
        url: "http://httpbin.org/basic-auth/user/passwd",
        user: "user",
        password: "passwd"
    };
    var insecureForced = {
        url: "http://httpbin.org/basic-auth/user/passwd",
        user: "user",
        password: "passwd",
        allowInsecureAuthentication: true
    };
    test("secure url", secure);
    test("insecure url", insecureForced);
    it("tests insecure connections fail", function () {
        this.timeout(60000);
        assert_1.default.throws(function () {
            return ethers_1.ethers.utils.fetchJson(insecure);
        }, function (error) {
            return (error.reason === "basic authentication requires a secure https url");
        }, "throws an exception for insecure connections");
    });
});
describe("Test API Key Formatting", function () {
    it("Infura API Key", function () {
        var projectId = "someProjectId";
        var projectSecret = "someSecretKey";
        // Test simple projectId
        var apiKeyString = ethers_1.ethers.providers.InfuraProvider.getApiKey(projectId);
        assert_1.default.equal(apiKeyString.apiKey, projectId);
        assert_1.default.equal(apiKeyString.projectId, projectId);
        assert_1.default.ok(apiKeyString.secretKey == null);
        // Test complex API key with projectId
        var apiKeyObject = ethers_1.ethers.providers.InfuraProvider.getApiKey({
            projectId: projectId
        });
        assert_1.default.equal(apiKeyObject.apiKey, projectId);
        assert_1.default.equal(apiKeyObject.projectId, projectId);
        assert_1.default.ok(apiKeyObject.projectSecret == null);
        // Test complex API key with projectId and projectSecret
        var apiKeyObject2 = ethers_1.ethers.providers.InfuraProvider.getApiKey({
            projectId: projectId,
            projectSecret: projectSecret
        });
        assert_1.default.equal(apiKeyObject2.apiKey, projectId);
        assert_1.default.equal(apiKeyObject2.projectId, projectId);
        assert_1.default.equal(apiKeyObject2.projectSecret, projectSecret);
        // Fails on invalid projectId type
        assert_1.default.throws(function () {
            var apiKey = ethers_1.ethers.providers.InfuraProvider.getApiKey({
                projectId: 1234,
                projectSecret: projectSecret
            });
            console.log(apiKey);
        }, function (error) {
            return (error.argument === "projectId" && error.reason === "projectSecret requires a projectId");
        });
        // Fails on invalid projectSecret type
        assert_1.default.throws(function () {
            var apiKey = ethers_1.ethers.providers.InfuraProvider.getApiKey({
                projectId: projectId,
                projectSecret: 1234
            });
            console.log(apiKey);
        }, function (error) {
            return (error.argument === "projectSecret" && error.reason === "invalid projectSecret");
        });
        {
            var provider = new ethers_1.ethers.providers.InfuraProvider("homestead", {
                projectId: projectId,
                projectSecret: projectSecret
            });
            assert_1.default.equal(provider.network.name, "homestead");
            assert_1.default.equal(provider.apiKey, projectId);
            assert_1.default.equal(provider.projectId, projectId);
            assert_1.default.equal(provider.projectSecret, projectSecret);
        }
        // Attempt an unsupported network
        assert_1.default.throws(function () {
            var provider = new ethers_1.ethers.providers.InfuraProvider("imaginary");
            console.log(provider);
        }, function (error) {
            return (error.argument === "network" && error.reason === "unsupported network");
        });
    });
});
describe("Test WebSocketProvider", function () {
    this.retries(3);
    function testWebSocketProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.destroy()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    it("InfuraProvider.getWebSocketProvider", function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = ethers_1.ethers.providers.InfuraProvider.getWebSocketProvider();
                        return [4 /*yield*/, testWebSocketProvider(provider)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe("Test Events", function () {
    this.retries(3);
    function testBlockEvent(provider) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var firstBlockNumber = null;
                        var handler = function (blockNumber) {
                            if (firstBlockNumber == null) {
                                firstBlockNumber = blockNumber;
                                return;
                            }
                            provider.removeListener("block", handler);
                            if (firstBlockNumber + 1 === blockNumber) {
                                resolve(true);
                            }
                            else {
                                reject(new Error("blockNumber fail"));
                            }
                        };
                        provider.on("block", handler);
                    })];
            });
        });
    }
    it("InfuraProvider", function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(60000);
                        provider = new ethers_1.ethers.providers.InfuraProvider("rinkeby");
                        return [4 /*yield*/, testBlockEvent(provider)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=test-providers.js.map