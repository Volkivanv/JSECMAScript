const arr1 = [1, 2, 3];
//console.log(arr1);

const arr2 = [4, 5, 6];
//console.log([...arr1,...arr2]);

function mergeArrays(inArr1, inArr2) {

    const both = [...inArr1, ...inArr2];
  //  console.log(both);

    return both;
}
console.log(mergeArrays(arr1, arr2));

// function removeDuplicates(...rest) {
//     // let output=[];

//     // rest.forEach(element => {`
//     //     if(!output.includes(element)){
//     //         output.push(element);
//     //     }
//     // });
//     // return output;
//     return rest.filter((val, index) => rest.indexOf(val) === index);
// }
const removeDuplicates = (...args) => args.filter((val, index) => args.indexOf(val) === index);
console.log(removeDuplicates(1, 1, 3, 4, 4, 2, 6, 8, 1));