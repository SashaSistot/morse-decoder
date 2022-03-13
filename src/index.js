const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

        if (expr.length % 10 != 0) return NaN;
        const cloneMorseTable = {};
        for (let key in MORSE_TABLE) {
            cloneMorseTable[key] = MORSE_TABLE[key];
          }
        cloneMorseTable['**********'] = ' ';
        let output = '';
        for (let counter = 0; counter < expr.length; counter += 10) {
            let litter = expr.slice(counter, counter + 10);
            let key = litter.split('00').join('').split('10').join('.').split('11').join('-');
            output += cloneMorseTable[`${key}`];
        }
        return output;
}

module.exports = {
    decode
}