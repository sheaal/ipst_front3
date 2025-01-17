function breakIntoBills(sum) {
const denominations = [100, 50, 10, 5, 2, 1];

const result = {};

for (const denomination of denominations) {
    const count = Math.floor(sum / denomination);

    if(count > 0) {
        result[denomination] = count;
        sum -= count * denomination;
    }
}
return result;
}
const sum = 276;
const breakdown = breakIntoBills(sum);
console.log(breakdown);