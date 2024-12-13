function printOddNumbersDivisibleBy7(N) {
    let count = 0;
    let num = 7;

    while (count < N) {
        if (num % 2 !== 0) {
            console.log(num);
            count++;
        }
        num += 7;
    }
}

printOddNumbersDivisibleBy7(7);