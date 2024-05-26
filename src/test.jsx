// Input
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6];
// Output: [3, 4, 5]
let len1 = array1.length;
let len2 = array2.length;
let res= [];
for(let i =0; len1-1; i++){
    for(let j = 0; len2-1; j++){
        if(array1[i] === array2[j]){
            res.push(array1[i]);
        }
    }
};

console.log(res);