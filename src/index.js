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
    let pairs = [];
    for (let i = 0; i < expr.length; i = i+2) {
        pairs.push(`${expr[i]}${expr[i+1]}`)
    }

    let string = [], size = 5;
    while (pairs.length > 0){
        string.push(pairs.splice(0, size));
    }

    let morseStr = [];
    for (let letter of string) {
        let morseLetter = [];
        for (let item of letter) {
            switch (item) {
                case '10':
                    morseLetter.push('.');
                    break;
                case '11':
                    morseLetter.push('-');
                    break;
                case '00':
                    break;
                case '**':
                    morseLetter.push('s');
                    break;
            }
        }
        morseStr.push(morseLetter.join(''))
    }

    let result = [];
    for (let item of morseStr) {
        for (let key in MORSE_TABLE) {
            if (item === key) {
                result.push(MORSE_TABLE[key])
            }
            if (item === 'sssss') {
                result.push(' ');
                break;
            }
        }
    }
    return result.join('')
}

module.exports = {
    decode
}