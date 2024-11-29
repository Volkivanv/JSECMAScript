// function createCalculator(init) {
//    const obj = {};
//    obj.add = function(number){
//         return init + number;
//    };
//    obj.sub = function(number){
//         return init - number;
//    }
//    return obj;
// }

function createCalculator(init) {
    let value = init;

    return {
        add: function(num){
            value += num;
        },
        subtract: function(num){
            value -= num;
        },
        getValue: function(){
            return value;
        },
    }
}

// const prim = createCalculator(8);

// console.log(prim.add(4));
// console.log(prim.sub(3));

const calculator = createCalculator(10);
console.log(calculator.getValue());
calculator.add(5);
console.log(calculator.getValue());
calculator.subtract(7);
console.log(calculator.getValue());

function createGreeting(name){
    return () => {
        return `Hello, ${name}`;
    }
}

const greeter = createGreeting('Пётр');
console.log(greeter());

function createPasswordChecker(maxLength) {
    return (password)=>{
        return password.length <= maxLength;
    }
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('adsag'));
console.log(isPasswordValid('adfggc25d'));

const sumDigits = (number) => {
    if (number < 10){
        return number%10;
    }
    return number%10 + sumDigits(Math.floor(number/10));
}

console.log(sumDigits(123467));
