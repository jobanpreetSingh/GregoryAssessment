const foobar = (num) => {
    if (num < 0) {
        return console.log('enter positive number')
    }
    var str = '';

    if (num % 2 === 0) {
        str += 'foo '
    }
    if (num % 7 === 0) {
        str += 'bar '
    }

    if (num % 14 === 0) {
        str += 'foobar '
    }
    else {
        console.log(num)
    }
    console.log(str)
}
foobar(1);