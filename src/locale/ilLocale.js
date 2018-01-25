import numeral from 'numeral';

numeral.register('locale', 'il', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  currency: {
    symbol: '₪'
  }
});

numeral.locale('il');
