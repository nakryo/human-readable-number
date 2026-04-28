const ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

function convertTens(num) {
  if (num === 0) return '';
  if (num < 10) return ones[num];
  if (num >= 10 && num < 20) return teens[num - 10];
  const tenPart = tens[Math.floor(num / 10)];
  const onePart = num % 10 !== 0 ? ` ${ones[num % 10]}` : '';
  return tenPart + onePart;
}

function convertHundreds(num) {
  if (num === 0) return '';
  if (num > 99) {
    const hundredPart = `${ones[Math.floor(num / 100)]} hundred`;
    const remainder = num % 100;
    const remainderPart = remainder !== 0 ? ` ${convertTens(remainder)}` : '';
    return hundredPart + remainderPart;
  }
  return convertTens(num);
}

function convertThousand(num) {
  if (num < 1000) {
    return convertHundreds(num);
  }
  const thousandPart = `${convertHundreds(Math.floor(num / 1000))} thousand`;
  const remainder = num % 1000;
  const remainderPart = remainder !== 0 ? ` ${convertHundreds(remainder)}` : '';
  return thousandPart + remainderPart;
}

function toReadable(num) {
  if (num === 0) return 'zero';
  return convertThousand(num);
}

module.exports = toReadable;
