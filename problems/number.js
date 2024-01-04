

function naturalno(num) {
    for (let n = 1; n <= num; n++) {
        document.write(`<td>${n}</td>`);
    }
}

function evenNo(num) {
    for (let n = 2; n <= num; n += 2) {
        document.write(`<td>${n}</td>`);
    }
}

function oddNo(num) {
    for (let n = 1; n <= 20; n += 2) {
        document.write(`<td>${n}</td>`);
    }
}

let inputno = +prompt();
                naturalno(inputno);
                evenNo(inputno);
                oddNo(inputno);