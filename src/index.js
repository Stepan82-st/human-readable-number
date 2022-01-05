module.exports = function toReadable (number) {
  var ones = new Array('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
  var tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var hundred = 'hundred';
  var result = '';
  var numString = number.toString();
  if (number == 0) {
      result = 'zero';
  }
  else if  (number < 20) {
      result = ones[number-1];
  }
  else if(number > 20 && number < 100){
    result = tens[parseInt(numString.charAt(0))] + ' ' + ones[parseInt(numString.charAt(1))-1]
  }
  else if (number >= 100 && number < 1000) {
      result = ones[parseInt(numString.charAt(0))-1] + ' ' + hundred + ' ' + tens[parseInt(numString.charAt(1))] + ' ' + ones[parseInt(numString.charAt(2))-1];
  }
  return result;
}
