export const links = [
  {
    label: "Exchange",
    icon: "ExchangeIcon",
    href: "/exchange",
    items: [
      {
        label: "BEP20",
        href: "/exchange",
        icon: "BNBIcon",
        balance: 0.107725,
        cost: 43.62323875,
        items: [
          {
            label: "BNB",
            href: "/exchange?coin=bnb&token=bnb",
            icon: "BNBIcon",
            balance: 217034000,
            cost: 86812.60,
          },
          {
            label: "2LC",
            href: "/exchange?coin=bnb&token=2lc",
            icon: "L2LIcon",
            balance: 217034000,
            cost: 86812.60,
            coin: "BEP20",
          },
          {
            label: "BUSD",
            href: "/exchange?coin=bnb&token=busd",
            icon: "BUSDIcon",
            disabled: true,
            coin: "BEP20",
          },
          {
            label: "BETH",
            href: "/exchange?coin=bnb&token=beth",
            icon: "BETHIcon",
            disabled: true,
            coin: "BEP20",
          },
        ],
      },
      // {
      //   label: "ETH",
      //   href: "/exchange?coin=eth",
      //   icon: "ETHIcon",
      // },
      // {
      //   label: "USD",
      //   href: "/exchange?coin=usd",
      //   icon: "USDIcon",
      // },
      // {
      //   label: "XLM",
      //   href: "/exchange?coin=xlm",
      //   icon: "XLMIcon",
      // },
      // {
      //   label: "BTC",
      //   href: "/exchange?coin=btc",
      //   icon: "BTCIcon",
      // },
    ],
  },
  {
    label: "Pools",
    icon: "LaunchPoolIcon",
    href: "/pools",
    items: [
      {
        label: "Yield Farming",
        href: "/pools?type=yield",
        icon: "BNB2LCIcon",
        disabled: true,
      },
      {
        label: "Trading Pools",
        href: "/pools?type=trading",
        icon: "BETH2LCIcon",
        disabled: true,
      },
      {
        label: "Staking Pools",
        href: "/pools?type=staking",
        icon: "BUSD2LCIcon",
        disabled: true,
      },
    ],
  },
  {
    label: "Dapps",
    icon: "YieldFarmingIcon",
    href: "/yield-farming",
    items: [
      {
        label: "Multi-send",
        href: "/dapps?type=multisend",
        icon: "BNB2LCIcon",
        disabled: true,
      },
    ],
  },
  {
    label: "Airdrops",
    icon: "AirdropIcon",
    href: "/airdrops",
    items: [
      {
        label: "2LC 2local",
        href: "/airdrops",
        icon: "L2L2LCIcon",
        disabled: true,
      },
    ],
  },
  {
    label: "NFT",
    icon: "DiamondMenuIcon",
    href: "/airdrops",
    items: [
      {
        label: "2LC 2local",
        href: "/airdrops",
        icon: "DiamondIcon",
        disabled: true,
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/goosedefi",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      {
        label: "中文",
        href: "https://t.me/goosefinancechinese",
      },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      {
        label: "Italiano",
        href: "https://t.me/goosefinanceitalian",
      },
      {
        label: "русский",
        href: "https://t.me/goosefinancerussian",
      },
      {
        label: "Türkiye",
        href: "https://t.me/GooseFinanceTurkey",
      },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      {
        label: "Español",
        href: "https://t.me/goosefinancespanish",
      },
      {
        label: "日本語",
        href: "https://t.me/goosefinancejapanese",
      },
      {
        label: "Français",
        href: "https://t.me/goosefinancefrench",
      },
      {
        label: "Announcements",
        href: "https://t.me/goosefinanceann",
      },
      {
        label: "Price Bot",
        href: "https://t.me/BinanceRocketEGG",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/goosedefi",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/GooseFinanceofficial",
  },
];

export const MENU_HEIGHT = 80;
export const MENU_ENTRY_HEIGHT = 60;
export const SIDEBAR_WIDTH_FULL = 460;
export const SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE = 260;
export const SIDEBAR_WIDTH_REDUCED = 50;
