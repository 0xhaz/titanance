let eth:string, dai:string, usdt:string, usdc:string, TI:string, arb:string, pol:string, bnb:string
export const spotTokens = {
    5: [
        {
            symbol: "ETH",
            contract: "0x7982894f4F46961D8A22A7D0Bcf3D5644dC8B257",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "1INCH",
            contract: "0x685655524eBB3fa67155Caa7d4FEa9f42bE21fEE",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "AAVE",
            contract: "0x51Ef872ceE97a9D34a3839A8c54d64C8A34D7b37",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "APE",
            contract: "0x90366Fdc4Ca8b02CA25BB195387e62E266BC2e52",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "ARB",
            contract: "0x16a45bdF03F3111cAc41856A78964F48c368d3EF",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BAT",
            contract: "0x160C2371EB879347D212DCDAA0120B18E4f49f7d",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BTC",
            contract: "0x160C2371EB879347D212DCDAA0120B18E4f49f7d",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "LINK",
            contract: "0x1A57B14d9249142825941A55fc10cEB2aE157E93",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MATIC",
            contract: "0x8a5A1dfcd0fd82dBDF12358b5C001Dfb93027442",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MKR",
            contract: "0x0bA3De61A08CDFe457733F5f8F8Ac99979d5C802",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "PEPE",
            contract: "0x6709c5219a8650923169472971da4BB8168f501C",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "SHIB",
            contract: "0xdF5e6992D02b5234cD64394beE5192638E887c0e",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "UNI",
            contract: "0xbd2D9b2c876101a38049255346b8Ddf08879fEA8",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "TI",
            contract: "0x5d1477Ea68bd8f52851597493e78b1Df0972a525",
            icon: TI,
            enable: true,
        },
        {
            symbol: "DAI",
            contract: "0x84dA233aDF77b85d3D5a5Ff7E0d0A823E540664d",
            icon: dai,
            enable: true
        },
        {
            symbol: "USDT",
            contract: "0xc245BEC4A844a72e2134AE60ebe0f0af754052b2",
            icon: usdt,
            enable: true
        },
        {
            symbol: "USDC",
            contract: "0xe378575Cb826132b17d7a49D4C331De19370112D",
            icon: usdc,
            enable: true
        }
    ],
    97: [
        {
            symbol: "ETH",
            contract: "0xf62F205A904293D256E5bD750119d469681C17c0",
            icon: bnb,
            enable: true,
            mainToken: true
        },
        {
            symbol: "1INCH",
            contract: "0x00e155Dc47EcBa0126662CfAb8D3504a47aF6C4E",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "AAVE",
            contract: "0x2D9Fcdf0226f96a0287B04faD829fb0716096208",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "APE",
            contract: "0xd6Ce6126e4C7Bd5e1E477F20125B0dad4F87c7B6",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "ARB",
            contract: "0x5Ca36b44618001299B10fBC338DE751016c3D1B9",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BAT",
            contract: "0x5Ca36b44618001299B10fBC338DE751016c3D1B9",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BTC",
            contract: "0x0832Dc39826243E41Eb59533fC16Fe7Ba1cb446d",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "LINK",
            contract: "0x7C043672Be8359DdCd0Dc53c8Aef9786024a2619",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MATIC",
            contract: "0x03158B95786F3a21Ae09C3fc01337732DEC06D6e",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MKR",
            contract: "0xe8De6735614b379385c37EE1Fdd52FB22e1e51Bc",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "PEPE",
            contract: "0xECEbd1C1719aE3b6d2f91c3ea1948622F3cDEb0B",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "SHIB",
            contract: "0x36A0B719E88Ea0bc4Dc4D79C59796CE3CAc91807",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "UNI",
            contract: "0xBf777A83eD622516294A57746983506807137904",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "TI",
            contract: "0x7b71A2EA00EA3c84d0889e98B73839Ddeeed4Cbd",
            icon: TI,
            enable: true
        },
        {
            symbol: "DAI",
            contract: "0x16d088bb0A3Cbc645744017Fc722CD7E0C7F320c",
            icon: dai,
            enable: true
        },
        {
            symbol: "USDT",
            contract: "0x1B209f83c73Fb67d98E49b22556842E6d058Ac2c",
            icon: usdt,
            enable: true
        },
        {
            symbol: "USDC",
            contract: "0x003c0246252b3b1d4f8F556Da1653ddDc6f9c8Eb",
            icon: usdc,
            enable: true
        }
    ],
    80001: [
        {
            symbol: "ETH",
            contract: "0xD93dfc4f67387CF42Ea47af3741133AF4dAD9885",
            icon: bnb,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MATIC",
            contract: "0x418051CD72d7c09c73085C62FE5F5B08e95E2fe6",
            icon: pol,
            enable: true,
            mainToken: true
        },
        {
            symbol: "1INCH",
            contract: "0x2F53C78D644103FE98a2E258E8421eC18DE32122",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "AAVE",
            contract: "0xe9c59A9eFb1cD00B3b51dEabf4b1c5244499361a",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "APE",
            contract: "0xe9c59A9eFb1cD00B3b51dEabf4b1c5244499361a",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "ARB",
            contract: "0x7387D979751961a38bd01ba2298f5F0a082C6A50",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BAT",
            contract: "0x362503664665Cc03ECfb607BA77bd9681b150Ae8",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BTC",
            contract: "0x50Ed3894944f96a8EBB19F80b4885aC8fbdC8Db4",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "LINK",
            contract: "0x58D8e3b1AC92c09A5F09fe5CB6e0c05D6032101d",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MATIC",
            contract: "0x418051CD72d7c09c73085C62FE5F5B08e95E2fe6",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MKR",
            contract: "0xfD056A588E8212d1558091c065E34525220a3886",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "PEPE",
            contract: "0x8d28a8AbcBEe4a2B0584E323ce4f4b2fb663c0B9",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "SHIB",
            contract: "0xA965D4bcadFf52F7709AD18bBaBcb8d4255767f8",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "UNI",
            contract: "0xfbbA31314C753545dA9448c204751CfB78Cc6a10",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "TI",
            contract: "0xed452260487A49664aC52efA573496B8b4F32b84",
            icon: TI,
            enable: true
        },
        {
            symbol: "DAI",
            contract: "0xf2DCf4f19870c37ec56f7f4201dE9341C09167eA",
            icon: dai,
            enable: true
        },
        {
            symbol: "USDT",
            contract: "0x7b71A2EA00EA3c84d0889e98B73839Ddeeed4Cbd",
            icon: usdt,
            enable: true
        },
        {
            symbol: "USDC",
            contract: "0x737F608Bef88Ddfc02e082440E06bd1B5582b8de",
            icon: usdc,
            enable: true
        }
    ],
    420: [
        {
            symbol: "ETH",
            contract: "0xe5696C45B6ee6E88CD9a3c8f93c7DaD059D73bfd",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "1INCH",
            contract: "0x496ED3C9195Bae2beBF9043D49d1C1Ed01E87a72",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "AAVE",
            contract: "0xF70259706A3b04Dbfee75b3D4E85B5CBd40e14a0",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "APE",
            contract: "0xF70259706A3b04Dbfee75b3D4E85B5CBd40e14a0",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "ARB",
            contract: "0x65b089aFd491Bb368Fb9E79701DA35C3E789C867",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BAT",
            contract: "0x25674039F74dE4F499BD8FD78aCCCA725a957C1C",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BTC",
            contract: "0x25674039F74dE4F499BD8FD78aCCCA725a957C1C",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "LINK",
            contract: "0x6314Cc0668a0B2B3c8299B0b57CdC3bE047Cb180",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MATIC",
            contract: "0xEff96058A59223B1eB9986B2c75A0A3E964766d6",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MKR",
            contract: "0xB1D93d7fADee26f207f814E3D4b5D28e501D845e",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "PEPE",
            contract: "0x465C976C15aD91232Fc050B1C02dB91a9E07a3C8",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "SHIB",
            contract: "0x153b12E04afED333A955637eA424851a9141F474",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "UNI",
            contract: "0x512b16531F5831b2aC7b152ec5143951081548CE",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "TI",
            contract: "0x95294fB93C9a03885C8C7532da00DE177E30475a",
            icon: TI,
            enable: true
        },
        {
            symbol: "DAI",
            contract: "0x003c0246252b3b1d4f8F556Da1653ddDc6f9c8Eb",
            icon: dai,
            enable: true
        },
        {
            symbol: "USDT",
            contract: "0x7b71A2EA00EA3c84d0889e98B73839Ddeeed4Cbd",
            icon: usdt,
            enable: true
        },
        {
            symbol: "USDC",
            contract: "0x1B209f83c73Fb67d98E49b22556842E6d058Ac2c",
            icon: usdc,
            enable: true
        }
    ],
    421613: [
        {
            symbol: "ARB",
            contract: "0x65b089aFd491Bb368Fb9E79701DA35C3E789C867",
            icon: arb,
            enable: false
        },
        {
            symbol: "ETH",
            contract: "0xe5696C45B6ee6E88CD9a3c8f93c7DaD059D73bfd",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "1INCH",
            contract: "0xd6041e48db949e5f261DfF7B212dFea19389f0C0",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "AAVE",
            contract: "0xF70259706A3b04Dbfee75b3D4E85B5CBd40e14a0",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "APE",
            contract: "0xF70259706A3b04Dbfee75b3D4E85B5CBd40e14a0",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "ARB",
            contract: "0x25674039F74dE4F499BD8FD78aCCCA725a957C1C",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BAT",
            contract: "0x25674039F74dE4F499BD8FD78aCCCA725a957C1C",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "BTC",
            contract: "0x25674039F74dE4F499BD8FD78aCCCA725a957C1C",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "LINK",
            contract: "0x6314Cc0668a0B2B3c8299B0b57CdC3bE047Cb180",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MATIC",
            contract: "0xEff96058A59223B1eB9986B2c75A0A3E964766d6",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "MKR",
            contract: "0xB1D93d7fADee26f207f814E3D4b5D28e501D845e",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "PEPE",
            contract: "0x465C976C15aD91232Fc050B1C02dB91a9E07a3C8",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "SHIB",
            contract: "0x153b12E04afED333A955637eA424851a9141F474",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "UNI",
            contract: "0x512b16531F5831b2aC7b152ec5143951081548CE",
            icon: eth,
            enable: true,
            mainToken: true
        },
        {
            symbol: "TI",
            contract: "0x07130C5c38F5408868e7E51008381cB404fD2E95",
            icon: TI,
            enable: true
        },
        {
            symbol: "DAI",
            contract: "0xf2DCf4f19870c37ec56f7f4201dE9341C09167eA",
            icon: dai,
            enable: true
        },
        {
            symbol: "USDT",
            contract: "0xC69B946Bf7A2Ac9a23bfDfaAdf5d61a6b970792f",
            icon: usdt,
            enable: true
        },
        {
            symbol: "USDC",
            contract: "0xb343803e1cf71256b22F6Db95b5b6bCA61108547",
            icon: usdc,
            enable: true
        }
    ]
}