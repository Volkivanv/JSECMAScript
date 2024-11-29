//вернуть четные числа
const getEvenNumbers = (...args) => args.filter((val) => val%2 === 0);
console.log(getEvenNumbers(1,2,3,4,5,5,6,8,10,4));
//посчитать среднее
const calculateAverage = (...args) => {
    // let sum = 0;
    // args.forEach(element => {
    //     sum+=element;
    // });
    // return sum/args.length;
    const sum = args.reduce((acc, item) => acc + item, 0);
    return sum / args.length;
}



console.log(calculateAverage(1,2,3,4,5));

const capitalizeFirstLetter = (str) => {
    const strArray = str.split(' ');
    const capitalizedArray = strArray.map((word)=> word[0].toUpperCase() + word.slice(1, word.length));
    return capitalizedArray.join(' ');

}

console.log(capitalizeFirstLetter('asadfsa dsfp4r gvkja dsadfam, da'));