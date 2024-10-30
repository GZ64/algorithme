/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const m = parseInt(readline());
var allInputs = [];
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputSignal = inputs[1];
    allInputs.push({name: inputName, signal: inputSignal});
}

let types = [];
let entriesList = [];
let outputsName = [];

for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];
    types.push(type);
    entriesList.push(inputName1 + ' ' + inputName2);
    outputsName.push(outputName);
}

for (let i = 0; i < m; i++) {

    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');

    console.log(outputsName[i] + ' ' + getOutPut(types[i], entriesList[i]));
}

function getOutPut(type, entriesList) {
    let entries = entriesList.split(' ');
    let signals = [];
    for(let i = 0, c = entries.length; i < c; i++) {
        signals.push(getSignal(entries[i]));
    }
    return compareSignals(type, signals);
}
function getSignal(entry) {
    for(let i = 0, c = allInputs.length; i <c; i++) {
        if (allInputs[i].name === entry) {
            return allInputs[i].signal;
        }
    }
}

function compareSignals(type, signals) {
    let output = '';

    switch(type) {
        case 'AND':
            for(let i = 0, c = signals[0].length; i < c; i++) {
                if(signals[0][i] === '-' && signals[1][i] === '-') {
                    output += '-';
                } else {
                    output += '_';
                }
            }
            return output;
        case 'OR':
            for(let i = 0, c = signals[0].length; i < c; i++) {
                if(signals[0][i] === '_' && signals[1][i] === '_') {
                    output += '_';
                } else {
                    output += '-';
                }
            }
            return output;
        case 'XOR':
            for(let i = 0, c = signals[0].length; i < c; i++) {
                if(signals[0][i] === '_' && signals[1][i] === '_' ||
                    signals[0][i] === '-' && signals[1][i] === '-') {
                    output += '_';
                } else {
                    output += '-';
                }
            }
            return output;
        case 'NAND':
            for(let i = 0, c = signals[0].length; i < c; i++) {
                if(signals[0][i] === '-' && signals[1][i] === '-') {
                    output += '_';
                } else {
                    output += '-';
                }
            }
            return output;
        case 'NOR':
            for(let i = 0, c = signals[0].length; i < c; i++) {
                if(signals[0][i] === '_' && signals[1][i] === '_') {
                    output += '-';
                } else {
                    output += '_';
                }
            }
            return output;
        case 'NXOR':
            for(let i = 0, c = signals[0].length; i < c; i++) {
                if(signals[0][i] === '_' && signals[1][i] === '_' ||
                    signals[0][i] === '-' && signals[1][i] === '-') {
                    output += '-';
                } else {
                    output += '_';
                }
            }
            return output;
    }
}

/* best answer */

const n = parseInt(readline());
const m = parseInt(readline());
const inputs = {}
for (let i = 0; i < n; i++) {
    const input = readline().split(' ');
    inputs[input[0]] = input[1]
}

function operation(type, a, b) {
    return a.split('').map((e, x) => {
        const r = (e === '_' ? 0 : 1);
        const l = (b[x] === '_' ? 0 : 1);
        const operations = {
            AND: r & l,
            OR: r | l,
            XOR: r ^ l,
            NAND: !(r & l),
            NOR: !(r | l),
            NXOR: !(r ^ l)
        }
        return operations[type] ? '-' : '_';
    }).join('')
}

for (let i = 0; i < m; i++) {
    const input = readline().split(' ');
    console.log(input[0], operation(input[1], inputs[input[2]], inputs[input[3]]))
}