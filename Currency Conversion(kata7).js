const convertMyDollars = ($, currency) => 
      `You now have ${ $ * parseInt(CONVERSION_RATES[currency], /[AEIOU]/.test(currency[0]) ? 10 : 2) } of ${currency}.`;