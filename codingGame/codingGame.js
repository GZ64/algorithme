/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an action using console.log()
// To debug: console.error('Debug messages...');
console.error('Debug messages...', MESSAGE);
function textToBin(text) {
    return (
        Array
            .from(text)
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(7 - bin.length) + bin )
            .join(' ')
    );
}
console.error('MESSAGE', MESSAGE);
let binaire = textToBin(MESSAGE);
let groups = [];
let index = 0;
let answer = '';

console.error('binaire', binaire);

for (let i = 0; i < binaire.length; i++) {
    if (i === 0) groups[index] = binaire[i];
    else {
        if (groups[index][0] != binaire[i] && binaire[i] != ' ') {
            index++;
            groups[index] = binaire[i];
        } else if (binaire[i] != ' ') {
            groups[index] += binaire[i];
        }
    }
}
console.error('groups', groups);

for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] === '1') {
        answer += '0 ';
        for (let j = 0; j < groups[i].length; j++) {
            answer += '0';
            if (groups[i].length - 1 === j && groups.length - 1 != i) answer += ' ';
        }
    } else {
        answer += '00 ';
        for (let j = 0; j < groups[i].length; j++) {
            answer += '0';
            if (groups[i].length - 1 === j && groups.length - 1 != i) answer += ' ';
        }
    }
}

console.error('answer', answer);

console.log(answer);


/*__________________________________*/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
let typeMIME = {};
// var regex1 = /\w+/;

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    typeMIME[EXT.toLowerCase()] = MT;
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    let extension = FNAME.split(/[.]+/);

    if (extension.length > 2)
        extension = FNAME.split(/[.]+/)[extension.length -1];
    else if (extension.length === 2)
        extension = FNAME.split(/[.]+/)[1].toLowerCase();
    else extension = null;

    if (typeMIME.hasOwnProperty(extension))
        console.log(typeMIME[extension]);
    else console.log('UNKNOWN');
}


/*____________________________________*/

const LON = readline();
const LAT = readline();
const N = parseInt(readline());
let d = [];
let defibName = [];
let min = '';
let index = 0;

for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    var defibrilateur = DEFIB.split(';');

    defibName[i]= defibrilateur[1];
    let defibLong = parseFloat(defibrilateur[4].replace(',', '.'));
    let defibLat = parseFloat(defibrilateur[5].replace(',', '.'));

    let userLong = parseFloat(LON.replace(',', '.'));
    let userLat = parseFloat(LAT.replace(',', '.'));

    let x = (userLong - defibLong) * Math.cos((userLat + defibLat) / 2);
    let y = userLat - defibLat;
    d[i] = (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) * 6371;
}

for (let i = 0; i < d.length; i++) {
    if (i === 0) min = d[i];
    if (min > d[i]) {
        min = d[i];
        index = i;
    }
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log(defibName[index]);

/*_________________________________________*/

