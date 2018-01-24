import numeral from 'numeral';

export default () => { 
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
};