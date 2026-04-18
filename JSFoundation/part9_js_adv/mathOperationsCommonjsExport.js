// named export

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

module.exports = {     // format we use to export using "common js".
    add,
    subtract,
    multiply,
};