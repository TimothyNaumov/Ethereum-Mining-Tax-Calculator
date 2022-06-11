import generateGainLossTransactions from '../TaxGenerator';

const incomeTransactions = [
  {
    "epoch": "1610654014",
    "isoDate": "2021-01-14T19:53:34.000Z",
    "incomeInUSD": 15.753721305590824,
    "ether": 0.012945624011589465,
    "etherPriceOnIncomeDate": 1216.9147884634556
  },
  {
    "epoch": "1611259182",
    "isoDate": "2021-01-21T19:59:42.000Z",
    "incomeInUSD": 13.313457948698229,
    "ether": 0.011856185364886798,
    "etherPriceOnIncomeDate": 1122.912432537305
  },
  {
    "epoch": "1612013849",
    "isoDate": "2021-01-30T13:37:29.000Z",
    "incomeInUSD": 13.730861978514834,
    "ether": 0.01000480148508673,
    "etherPriceOnIncomeDate": 1372.427228964234
  },
  {
    "epoch": "1612618894",
    "isoDate": "2021-02-06T13:41:34.000Z",
    "incomeInUSD": 25.707178350471413,
    "ether": 0.01526607749513815,
    "etherPriceOnIncomeDate": 1683.941297865053
  },
  {
    "epoch": "1613828637",
    "isoDate": "2021-02-20T13:43:57.000Z",
    "incomeInUSD": 54.690816276557314,
    "ether": 0.028346497393106494,
    "etherPriceOnIncomeDate": 1929.367692879665
  },
  {
    "epoch": "1615038426",
    "isoDate": "2021-03-06T13:47:06.000Z",
    "incomeInUSD": 55.60437696788807,
    "ether": 0.033457753870789,
    "etherPriceOnIncomeDate": 1661.9279698998157
  },
  {
    "epoch": "1617286813",
    "isoDate": "2021-04-01T14:20:13.000Z",
    "incomeInUSD": 19.760373711318096,
    "ether": 0.01002824792166402,
    "etherPriceOnIncomeDate": 1970.4711995232753
  },
  {
    "epoch": "1617958753",
    "isoDate": "2021-04-09T08:59:13.000Z",
    "incomeInUSD": 214.16418389784712,
    "ether": 0.103477565,
    "etherPriceOnIncomeDate": 2069.6677960855295
  },
  {
    "epoch": "1618631099",
    "isoDate": "2021-04-17T03:44:59.000Z",
    "incomeInUSD": 81.29134816168764,
    "ether": 0.03466187408595126,
    "etherPriceOnIncomeDate": 2345.266962776132
  },
  {
    "epoch": "1619593268",
    "isoDate": "2021-04-28T07:01:08.000Z",
    "incomeInUSD": 137.4621018259706,
    "ether": 0.050008320975751,
    "etherPriceOnIncomeDate": 2748.7845851218613
  },
  {
    "epoch": "1620933327",
    "isoDate": "2021-05-13T19:15:27.000Z",
    "incomeInUSD": 187.58624547626493,
    "ether": 0.05001844251291464,
    "etherPriceOnIncomeDate": 3750.3415950592753
  },
  {
    "epoch": "1621692227",
    "isoDate": "2021-05-22T14:03:47.000Z",
    "incomeInUSD": 115.33603473595848,
    "ether": 0.050007575273267414,
    "etherPriceOnIncomeDate": 2306.371266867117
  },
  {
    "epoch": "1622470507",
    "isoDate": "2021-05-31T14:15:07.000Z",
    "incomeInUSD": 103.00685458617183,
    "ether": 0.03803194459162246,
    "etherPriceOnIncomeDate": 2708.429865793973
  },
  {
    "epoch": "1624834514",
    "isoDate": "2021-06-27T22:55:14.000Z",
    "incomeInUSD": 197.4361441939962,
    "ether": 0.10002201586641106,
    "etherPriceOnIncomeDate": 1973.9268648383472
  },
  {
    "epoch": "1626193948",
    "isoDate": "2021-07-13T16:32:28.000Z",
    "incomeInUSD": 99.82269546453338,
    "ether": 0.05133869126921272,
    "etherPriceOnIncomeDate": 1944.3950166372085
  },
  {
    "epoch": "1627338882",
    "isoDate": "2021-07-26T22:34:42.000Z",
    "incomeInUSD": 126.78834251100825,
    "ether": 0.05685035264080166,
    "etherPriceOnIncomeDate": 2230.212067673471
  },
  {
    "epoch": "1628521123",
    "isoDate": "2021-08-09T14:58:43.000Z",
    "incomeInUSD": 158.77643357941525,
    "ether": 0.05019702436959277,
    "etherPriceOnIncomeDate": 3163.0646551948857
  },
  {
    "epoch": "1631940012",
    "isoDate": "2021-09-18T04:40:12.000Z",
    "incomeInUSD": 346.5710184597435,
    "ether": 0.10111232635455816,
    "etherPriceOnIncomeDate": 3427.58426153173
  },
  {
    "epoch": "1639291914",
    "isoDate": "2021-12-12T06:51:54.000Z",
    "incomeInUSD": 710.3253075411544,
    "ether": 0.1717486769742185,
    "etherPriceOnIncomeDate": 4135.841510137412
  },
  {
    "epoch": "1644395655",
    "isoDate": "2022-02-09T08:34:15.000Z",
    "incomeInUSD": 343.76001425023077,
    "ether": 0.10606861738730407,
    "etherPriceOnIncomeDate": 3240.9210444877285
  }
];

const exchangeTransactions = [
    {
      "Date": "2021-02-08T22:03:15Z",
      "Epoch": 1612821795000,
      "EpochAtEndOfDay": 1612828800,
      "Proceeds": "9",
      "QuantityDisposed": "0.00588416",
      "EtherPriceOnSellDate": 1750.997553719215
    },
    {
      "Date": "2021-07-02T17:37:33Z",
      "Epoch": 1625247453000,
      "EpochAtEndOfDay": 1625270400,
      "Proceeds": "117.01",
      "QuantityDisposed": "0.05714455",
      "EtherPriceOnSellDate": 2157.880584866453
    },
    {
      "Date": "2021-07-23T23:13:30Z",
      "Epoch": 1627082010000,
      "EpochAtEndOfDay": 1627084800,
      "Proceeds": "97.01",
      "QuantityDisposed": "0.04797119",
      "EtherPriceOnSellDate": 2117.154607794504
    },
    {
      "Date": "2021-07-27T19:31:19Z",
      "Epoch": 1627414279000,
      "EpochAtEndOfDay": 1627430400,
      "Proceeds": "246.28",
      "QuantityDisposed": "0.11233348",
      "EtherPriceOnSellDate": 2292.579636803809
    },
    {
      "Date": "2021-08-06T22:05:47Z",
      "Epoch": 1628287547000,
      "EpochAtEndOfDay": 1628294400,
      "Proceeds": "97.01",
      "QuantityDisposed": "0.03476476",
      "EtherPriceOnSellDate": 2888.7322742752317
    },
    {
      "Date": "2021-08-14T20:14:04Z",
      "Epoch": 1628972044000,
      "EpochAtEndOfDay": 1628985600,
      "Proceeds": "122.01",
      "QuantityDisposed": "0.03871843",
      "EtherPriceOnSellDate": 3268.5481770314927
    },
    {
      "Date": "2021-08-17T14:08:19Z",
      "Epoch": 1629209299000,
      "EpochAtEndOfDay": 1629244800,
      "Proceeds": "394.04",
      "QuantityDisposed": "0.12446132",
      "EtherPriceOnSellDate": 3007.1440271712713
    }
];

const expectedResults = [
  {
    "AcquireDate": "Thu Jan 14 2021 13:53:34 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-02-08T22:03:15Z",
    "QuantityLeftInBasis": 0.007061464011589465,
    "CostBasis": "7.16",
    "Proceeds": "9.00",
    "CapitalGainLoss": "1.84"
  },
  {
    "AcquireDate": "Thu Jan 14 2021 13:53:34 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-02T17:37:33Z",
    "QuantityDepletedFromCostBasis": 0.007061464011589465,
    "CostBasis": "8.59",
    "Proceeds": "14.46",
    "CapitalGainLoss": "5.87"
  },
  {
    "AcquireDate": "Thu Jan 21 2021 13:59:42 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-02T17:37:33Z",
    "QuantityDepletedFromCostBasis": 0.011856185364886798,
    "CostBasis": "13.31",
    "Proceeds": "24.28",
    "CapitalGainLoss": "10.96"
  },
  {
    "AcquireDate": "Sat Jan 30 2021 07:37:29 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-02T17:37:33Z",
    "QuantityDepletedFromCostBasis": 0.01000480148508673,
    "CostBasis": "13.73",
    "Proceeds": "20.49",
    "CapitalGainLoss": "6.76"
  },
  {
    "AcquireDate": "Sat Feb 06 2021 07:41:34 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-02T17:37:33Z",
    "QuantityDepletedFromCostBasis": 0.01526607749513815,
    "CostBasis": "25.71",
    "Proceeds": "31.26",
    "CapitalGainLoss": "5.55"
  },
  {
    "AcquireDate": "Sat Feb 20 2021 07:43:57 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-02T17:37:33Z",
    "QuantityLeftInBasis": 0.015390475749807632,
    "CostBasis": "25.00",
    "Proceeds": "26.53",
    "CapitalGainLoss": "1.53"
  },
  {
    "AcquireDate": "Sat Feb 20 2021 07:43:57 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-23T23:13:30Z",
    "QuantityDepletedFromCostBasis": 0.015390475749807632,
    "CostBasis": "29.69",
    "Proceeds": "31.12",
    "CapitalGainLoss": "1.43"
  },
  {
    "AcquireDate": "Sat Mar 06 2021 07:47:06 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-23T23:13:30Z",
    "QuantityLeftInBasis": 0.0008770396205966396,
    "CostBasis": "54.15",
    "Proceeds": "65.89",
    "CapitalGainLoss": "11.74"
  },
  {
    "AcquireDate": "Sat Mar 06 2021 07:47:06 GMT-0600 (Central Standard Time)",
    "SellDate": "2021-07-27T19:31:19Z",
    "QuantityDepletedFromCostBasis": 0.0008770396205966396,
    "CostBasis": "1.46",
    "Proceeds": "1.92",
    "CapitalGainLoss": "0.47"
  },
  {
    "AcquireDate": "Thu Apr 01 2021 09:20:13 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-07-27T19:31:19Z",
    "QuantityDepletedFromCostBasis": 0.01002824792166402,
    "CostBasis": "19.76",
    "Proceeds": "21.99",
    "CapitalGainLoss": "2.23"
  },
  {
    "AcquireDate": "Fri Apr 09 2021 03:59:13 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-07-27T19:31:19Z",
    "QuantityLeftInBasis": 0.002049372542260647,
    "CostBasis": "209.92",
    "Proceeds": "222.37",
    "CapitalGainLoss": "12.45"
  },
  {
    "AcquireDate": "Fri Apr 09 2021 03:59:13 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-06T22:05:47Z",
    "QuantityDepletedFromCostBasis": 0.002049372542260647,
    "CostBasis": "4.24",
    "Proceeds": "5.72",
    "CapitalGainLoss": "1.48"
  },
  {
    "AcquireDate": "Fri Apr 16 2021 22:44:59 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-06T22:05:47Z",
    "QuantityLeftInBasis": 0.0019464866282119103,
    "CostBasis": "76.73",
    "Proceeds": "91.29",
    "CapitalGainLoss": "14.56"
  },
  {
    "AcquireDate": "Fri Apr 16 2021 22:44:59 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-14T20:14:04Z",
    "QuantityDepletedFromCostBasis": 0.0019464866282119103,
    "CostBasis": "4.57",
    "Proceeds": "6.13",
    "CapitalGainLoss": "1.57"
  },
  {
    "AcquireDate": "Wed Apr 28 2021 02:01:08 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-14T20:14:04Z",
    "QuantityLeftInBasis": 0.013236377603962915,
    "CostBasis": "101.08",
    "Proceeds": "115.88",
    "CapitalGainLoss": "14.80"
  },
  {
    "AcquireDate": "Wed Apr 28 2021 02:01:08 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-17T14:08:19Z",
    "QuantityDepletedFromCostBasis": 0.013236377603962915,
    "CostBasis": "36.38",
    "Proceeds": "41.91",
    "CapitalGainLoss": "5.52"
  },
  {
    "AcquireDate": "Thu May 13 2021 14:15:27 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-17T14:08:19Z",
    "QuantityDepletedFromCostBasis": 0.05001844251291464,
    "CostBasis": "187.59",
    "Proceeds": "158.36",
    "CapitalGainLoss": "-29.23"
  },
  {
    "AcquireDate": "Sat May 22 2021 09:03:47 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-17T14:08:19Z",
    "QuantityDepletedFromCostBasis": 0.050007575273267414,
    "CostBasis": "115.34",
    "Proceeds": "158.32",
    "CapitalGainLoss": "42.99"
  },
  {
    "AcquireDate": "Mon May 31 2021 09:15:07 GMT-0500 (Central Daylight Time)",
    "SellDate": "2021-08-17T14:08:19Z",
    "QuantityLeftInBasis": 0.026833019981767424,
    "CostBasis": "30.33",
    "Proceeds": "35.46",
    "CapitalGainLoss": "5.12"
  }];

const singleSell = [{
  "Date": "2021-02-08T22:03:15Z",
  "Epoch": 1612821795000,
  "EpochAtEndOfDay": 1612828800,
  "Proceeds": "9",
  "QuantityDisposed": "0.00588416",
  "EtherPriceOnSellDate": 1750.997553719215
}];

const expectedSoloResult = [{
  "AcquireDate": "Thu Jan 14 2021 13:53:34 GMT-0600 (Central Standard Time)",
  "SellDate": "2021-02-08T22:03:15Z",
  "QuantityLeftInBasis": 0.007061464011589465,
  "CostBasis": "7.16",
  "Proceeds": "9.00",
  "CapitalGainLoss": "1.84"
}];

const testcaseincome1 = [
  {
    "epoch": "1612618894",
    "isoDate": "2021-02-06T13:41:34.000Z",
    "incomeInUSD": 25.707178350471413,
    "ether": 0.01526607749513815,
    "etherPriceOnIncomeDate": 1683.941297865053
  }
]




test('Single Transaction Test', () => {
    expect(generateGainLossTransactions(incomeTransactions, singleSell)).toEqual(expectedSoloResult);
});

test('All Transactions test', () => {
  expect(generateGainLossTransactions(incomeTransactions, exchangeTransactions)).toEqual(expectedResults);
});
