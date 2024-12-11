// Remove Duplicates
const input = [1, 2, 3, 3];

function removeDuplicate(arr) {
    const result = [];
    let idx = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        } 
    }
    return result.join(" ");
}

console.log(removeDuplicate(input));


