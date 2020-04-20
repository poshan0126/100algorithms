function addTwoDigits(n: number): number {
    let numberToString = n.toString();
    let splitNumberStringArray: string[] = numberToString.split('');
    console.log(splitNumberStringArray);

    // Parse int from string and sum them and return sum
    let sum = 0;
    splitNumberStringArray.forEach(el => {
        sum += parseInt(el);
    })

    return sum;


}


console.log(addTwoDigits(89759836536486));

// console.log(addTwoDigits(29));