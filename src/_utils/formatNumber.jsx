export function formatNumber(num) {
    return num.toLocaleString('en-US');
}


export function generateNumbers(n){
    const numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    return numbers;
}