const even = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of arr) {
    if (num % 2 === 0) {
        even.push(num);
    }
}
console.log(even);