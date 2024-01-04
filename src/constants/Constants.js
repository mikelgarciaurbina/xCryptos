const TIMELINE = '24 HOURS';
const LOCALE = 'EN';

export default {
  AFFILIATES: {
    ETORO: {
      id: 'etoro',
      label: 'www.etoro.com',
      url: 'https://etoro.tw/3DF2lJW',
    },
    FIVERR: {
      id: 'fiverr',
      label: 'www.fiverr.com',
      url: 'https://go.fiverr.com/visit/?bta=644151&brand=fiverrcpa',
    },
    REVOLUT: {
      id: 'revolut',
      label: 'www.revolut.com',
      url: 'https://revolut.com/referral/?referral-code=mikelso7!AUG1-23-AR-H1',
    },
    LETYSHOPS: {
      id: 'letyshops',
      label: 'www.letyshops.com',
      url: 'https://letyshops.com/es/winwin?ww=9378254',
    },
  },

  CURRENCY: {
    EUR: 'EUR',
    USD: 'USD',
    GBP: 'GBP',
    JPY: 'JPY',
  },

  DONATION_URL: 'https://www.buymeacoffee.com/overlayon',

  SYMBOL: {
    EUR: '€',
    USD: '$',
    GBP: '£',
    JPY: '¥',
  },

  DEFAULT: {
    FAVORITES: [
      {
        active: true,
        coin: 'BTC',
        hodl: undefined,
        image: 'https://www.cryptocompare.com/media/19633/btc.png',
        name: 'Bitcoin',
        price: 0,
      },
      {
        coin: 'ETH',
        hodl: undefined,
        image: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
        name: 'Ethereum',
        price: 0,
      },
      {
        coin: 'LTC',
        hodl: undefined,
        image: 'https://www.cryptocompare.com/media/19782/litecoin-logo.png',
        name: 'Litecoin',
        price: 0,
      },
    ],
    SETTINGS: { currency: 'USD', locale: LOCALE, nightMode: false },
    TIMELINE,
  },

  LOCALE,

  PRIVACY_URL: 'https://overlayon.com/privacy',

  SERVICE: {
    CURRENCIES: {
      API: 'https://www.cryptocompare.com/api/data',
      MIN_API: 'https://min-api.cryptocompare.com/data',
    },
  },

  TIMELINES: ['1 HOUR', TIMELINE, '30 DAYS', '3 MONTHS'],

  TIMEOUT_SERVICE: 10000,
};
