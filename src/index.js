module.exports = function toReadable (number) {
    var ones = new Array('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var hundred = 'hundred';
    var result = '';
    var numString = number.toString();
    if (number == 0) {
        return 'zero';
    }
    else if  (number < 20) {
        result = ones[number-1];
    }
    else if(number > 20 && number < 100 && numString.charAt(1) !== '0'){
      result = tens[parseInt(numString.charAt(0))] + ' ' + ones[parseInt(numString.charAt(1))-1]
    }else if(number > 20 && number < 100 && numString.charAt(1) == '0'){
      result = tens[parseInt(numString.charAt(0))]
    }else if (number >= 100 && number < 1000 && numString.charAt(1) !== '0' && numString.charAt(1) !== '1' && numString.charAt(2) !== '0') {
      result = ones[parseInt(numString.charAt(0))-1] + ' ' + hundred + ' ';
      result += tens[parseInt(numString.charAt(1))] + ' ' + ones[parseInt(numString.charAt(2))-1];
    }
    else if (number >= 100 && number < 1000 && numString.charAt(1) === '0'&& numString.charAt(2) !== '0') {
        result = ones[parseInt(numString.charAt(0))-1] + ' ' + hundred;
        result += ' ' + ones[parseInt(numString.charAt(2))-1];
  }else if(number >= 100 && number < 1000 && numString.charAt(1) === '1')
  {
    result = ones[parseInt(numString.charAt(0))-1] + ' ' + hundred +' ';
        result += ones[parseInt(numString.charAt(1) + numString.charAt(2)) -1];
  }else if(number >= 100 && number < 1000 && numString.charAt(2) === '0')
  {
   result = ones[parseInt(numString.charAt(0))-1] + ' ' + hundred + ' ';
      result += tens[parseInt(numString.charAt(1))];
  }else if(number >= 100 && number < 1000 && numString.charAt(2) === '0' && numString.charAt(1) === '0')
  {
   result = ones[parseInt(numString.charAt(0))-1] + ' ' + hundred + ' ';
      
  }
    return result;
  }   
