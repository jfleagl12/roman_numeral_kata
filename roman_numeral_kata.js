var convert = function(num) {

  // The two arrays with default conversion with matching indices.
  
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  //empty string variable for the final roman number

  var romanized = '';

  // Below loops through the indices of the decimalValue array.
  
  for (var index = 0; index < decimalValue.length; index++) {
    //  The loop continues only if the value at the current index will fit into numCopy
    
    while (decimalValue[index] <= num) {
      // This adds the Roman numeral & decreases numCopy by the decimal equivalent.
      
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

convert(/* arabic number */ );