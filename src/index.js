module.exports = function toReadable(number) {
    const numbers = { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty', '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety' };
    const numToStr = number.toString();
    let isInObject;

    if (number === 0) {
        return 'zero'
    } else if (numToStr.length === 3 && number % 100 === 0) {
        return `${numbers[numToStr[0]]} hundred`      
    } else if (numToStr.length === 3) {
        numbers[number % 100] !== undefined ? isInObject = numbers[number % 100] : isInObject = `${numbers[numToStr[1] * 10]} ${numbers[numToStr[2]]}`
        return `${numbers[numToStr[0]]} hundred ${isInObject}`
    } else if (numToStr.length === 2) {
        numbers[number] !== undefined ? isInObject = numbers[number] : isInObject = `${numbers[numToStr[0] * 10]} ${numbers[numToStr[1]]}`
        return `${isInObject}`
    }
    return numbers[number];
}
