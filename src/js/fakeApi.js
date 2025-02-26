export async function fetchCoins() {
  // data = await fetch('api');
  const data = coins;
  return data;
}

export async function fetchUser() {
  // data = await fetch('api');
  const data = user;
  return data;
}

export async function fetchHistory() {
  // data = await fetch('api');
  const data = history;
  return data;
}

export async function fetchPools() {
  // data = await fetch('api');
  const data = pools;
  return data;
}

export async function fetchDailyUpgrade() {
  // data = await fetch('api');
  const data = dailyUpgrade;
  return data;
}

export async function fetchDailyTasks() {
  // data = await fetch('api');
  const data = dailyTasks;
  return data;
}

export async function fetchFriendList() {
  // data = await fetch('api');
  const data = friendList;
  return data;
}

export async function fetchTaskList() {
  // data = await fetch('api');
  const data = taskList;
  return data;
}

const coins = [
  {
    id: 1,
    name: "Toncoin",
    symbolName: "tonkoin.png",
    haveCoins: "3,47",
    price: "5,74",
    change: "3,65",
    total: "19,98",
  },
  {
    id: 2,
    name: "USD₮",
    symbolName: "usdt.png",
    haveCoins: "5,47",
    price: "1",
    change: "-5,3",
    total: "29.37",
  },
  {
    id: 3,
    name: "DOGS",
    symbolName: "dogs.png",
    haveCoins: "6,47",
    price: "0,0011",
    change: "10,55",
    total: "13.52",
  },
  {
    id: 1,
    name: "Toncoin",
    symbolName: "tonkoin.png",
    haveCoins: "3,47",
    price: "5,74",
    change: "3,65",
    total: "19,98",
  },
  {
    id: 2,
    name: "USD₮",
    symbolName: "usdt.png",
    haveCoins: "5,47",
    price: "1",
    change: "-5,3",
    total: "29.37",
  },
  {
    id: 3,
    name: "DOGS",
    symbolName: "dogs.png",
    haveCoins: "6,47",
    price: "0,0011",
    change: "10,55",
    total: "13.52",
  },
];

const user = {
  id: 23456,
  name: "John Doe",
  email: "john.doe@example.com",
  balance: "23567",
  photoUrl: "../img/user-photo.png",
  coins: [
    { code: "near", value: "4.25" },
    { code: "ton", value: "2.37" },
  ],
};

const history = [
  {
    id: 1,
    date: "Mar 12 2024 10:00:00 AM",
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    operation: "buy",
    amount: "3,53",
  },
  {
    id: 2,
    date: "Mar 13 2024 11:00:00 AM",
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    operation: "sold",
    amount: "5,27",
  },
  {
    id: 3,
    date: "Mar 12 2024 09:00:00 AM",
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    operation: "buy",
    amount: "5,65",
  },
  {
    id: 4,
    date: "Mar 14 2024 10:00:00 AM",
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    operation: "buy",
    amount: "7,35",
  },
  {
    id: 5,
    date: "Mar 13 2024 11:00:00 AM",
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    operation: "buy",
    amount: "2,03",
  },
  {
    id: 6,
    date: "Mar 15 2024 09:00:00 AM",
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    operation: "buy",
    amount: "2,65",
  },
  {
    id: 7,
    date: "Mar 13 2024 10:00:00 AM",
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    operation: "sold",
    amount: "3,65",
  },
  {
    id: 8,
    date: "Mar 15 2024 08:00:00 AM",
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    operation: "sold",
    amount: "3,25",
  },
  {
    id: 9,
    date: "Mar 14 2024 09:00:00 AM",
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    operation: "buy",
    amount: "9,65",
  },
];

const pools = [
  {
    id: 1,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    value: "10",
    status: "approve",
    days: "14",
    balance: "15.55",
  },
  {
    id: 2,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    value: "50",
    status: "approve",
    days: "30",
    balance: "15.55",
  },
  {
    id: 3,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    value: "15",
    status: "disapprove",
    days: "14",
    balance: "5.47",
  },
  {
    id: 4,
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    value: "25",
    status: "approve",
    days: "30",
    balance: "12.35",
  },
  {
    id: 5,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    value: "15",
    status: "approve",
    days: "30",
    balance: "5.47",
  },
  {
    id: 6,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    value: "10",
    status: "approve",
    days: "14",
    balance: "15.55",
  },
  {
    id: 7,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    value: "50",
    status: "approve",
    days: "30",
    balance: "15.55",
  },
  {
    id: 7,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    value: "50",
    status: "approve",
    days: "30",
    balance: "15.55",
  },
];

const dailyUpgrade = [
  {
    id: 1,
    nameUp: "Daily Check",
    value: "6,000",
    lvl: "3",
  },
  {
    id: 2,
    nameUp: "Week Check",
    value: "4,450",
    lvl: "2",
  },
  {
    id: 3,
    nameUp: "Bonus plus",
    value: "8,300",
    lvl: "3",
  },
  {
    id: 4,
    nameUp: "Daily Check",
    value: "3,230",
    lvl: "2",
  },
  {
    id: 5,
    nameUp: "Daily Check",
    value: "7,200",
    lvl: "4",
  },
  {
    id: 6,
    nameUp: "Daily Check",
    value: "6,000",
    lvl: "3",
  },
  {
    id: 7,
    nameUp: "Daily Check",
    value: "6,000",
    lvl: "3",
  },
  {
    id: 8,
    nameUp: "Daily Check",
    value: "6,000",
    lvl: "3",
  },
];

const dailyTasks = [
  {
    id: 1,
    nameTask: "Daily Check",
    buttonName: "Claim",
    buttonStatus: true,
    value: "3,230",
  },
  {
    id: 2,
    nameTask: "Daily Transaction",
    buttonName: "Send",
    buttonStatus: true,
    value: "4,870",
  },
  {
    id: 3,
    nameTask: "Daily Friends",
    buttonName: "Claim",
    buttonStatus: false,
    value: "5,350",
  },
  {
    id: 4,
    nameTask: "Week Transaction",
    buttonName: "Send",
    buttonStatus: true,
    value: "2,430",
  },
  {
    id: 5,
    nameTask: "Week Friends",
    buttonName: "Claim",
    buttonStatus: false,
    value: "1,230",
  },
  {
    id: 6,
    nameTask: "Daily Check",
    buttonName: "Claim",
    buttonStatus: true,
    value: "3,230",
  },
];

const friendList = [
  {
    id: 11245,
    name: "John Wick",
    coins: [
      { code: "near", value: "4.25" },
      { code: "ton", value: "2.37" },
    ],
    photoUrl: "",
  },
  {
    id: 34987,
    name: "John Wick",
    coins: [
      { code: "near", value: "2.35" },
      { code: "ton", value: "2.49" },
    ],
    photoUrl: "../img/user-photo.png",
  },
  {
    id: 34509,
    name: 'John Wick',
    coins: [
      { code: 'near', value: '6.35' },
      { code: 'ton', value: '1.47' },
    ],
    photoUrl: '',
  },
  {
    id: 12340,
    name: 'John Wick',
    coins: [
      { code: 'near', value: '5.45' },
      { code: 'ton', value: '7.33' },
    ],
    photoUrl: '../img/user-photo.png',
  },
  {
    id: 11245,
    name: 'John Wick',
    coins: [
      { code: 'near', value: '2.75' },
      { code: 'ton', value: '5.59' },
    ],
    photoUrl: '../img/user-photo.png',
  },
];

const taskList = [
  {
    id: 88,
    category: 'New',
    tasks: [
      {
        id: 2345,
        title: 'Navigating Crypto',
        value: '250',
        buttonName: 'Start',
        status: 'active',
      },
      {
        id: 3456,
        title: 'Secure your Crypto!',
        value: '250',
        buttonName: 'Verify',
        status: 'active',
      },
      {
        id: 4567,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 8769,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
      {
        id: 5467,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 7869,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
      {
        id: 1267,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 7362,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
    ],
  },
  {
    id: 77,
    category: 'Partners',
    tasks: [
      {
        id: 1345,
        title: 'Add Crypto Parner',
        value: '450',
        buttonName: 'Start',
        status: 'active',
      },
      {
        id: 4056,
        title: 'Connect to partner',
        value: '350',
        buttonName: 'Check',
        status: 'active',
      },
      {
        id: 4067,
        title: 'Add more partners',
        value: '550',
        buttonName: 'Start',
        status: 'done',
      },
      {
        id: 8069,
        title: 'Connect bigApple',
        value: '111',
        buttonName: 'Check',
        status: 'active',
      },
    ],
  },
  {
    id: 66,
    category: 'Onchain',
    tasks: [
      {
        id: 3445,
        title: 'Navigating Crypto',
        value: '250',
        buttonName: 'Start',
        status: 'active',
      },
      {
        id: 3786,
        title: 'Secure your Crypto!',
        value: '250',
        buttonName: 'Verify',
        status: 'active',
      },
      {
        id: 4907,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 2169,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
    ],
  },
  {
    id: 55,
    category: 'Socials',
    tasks: [
      {
        id: 1345,
        title: 'Navigating Crypto',
        value: '250',
        buttonName: 'Start',
        status: 'active',
      },
      {
        id: 1456,
        title: 'Secure your Crypto!',
        value: '250',
        buttonName: 'Verify',
        status: 'active',
      },
      {
        id: 1567,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 1769,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
    ],
  },
  {
    id: 33,
    category: 'Academic',
    tasks: [
      {
        id: 4345,
        title: 'Navigating Crypto',
        value: '250',
        buttonName: 'Start',
        status: 'active',
      },
      {
        id: 4456,
        title: 'Secure your Crypto!',
        value: '250',
        buttonName: 'Verify',
        status: 'active',
      },
      {
        id: 5567,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 7769,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
    ],
  },
  {
    id: 22,
    category: 'Academic',
    tasks: [
      {
        id: 7345,
        title: 'Navigating Crypto',
        value: '250',
        buttonName: 'Start',
        status: 'active',
      },
      {
        id: 7456,
        title: 'Secure your Crypto!',
        value: '250',
        buttonName: 'Verify',
        status: 'active',
      },
      {
        id: 8567,
        title: 'The Open League Quest',
        value: '450',
        buttonName: 'Start',
        status: 'rejected',
      },
      {
        id: 9769,
        title: 'Backing from Binance Labs',
        value: '111',
        buttonName: 'Start',
        status: 'done',
      },
    ],
  },
];