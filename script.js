let a = [
    [1, 2, 6, "c", "s", "c"],
    ["Không có gì quý hơn độc lập tự do", 11, 9, 4],
    ["Ăn chơi hết thời", 0, "Không có gì quý hơn độc lập tự do", 27],
    [7, "Không-có-gì-quý-hơn-độc-lập-tự-do", 28, 14],
    [3, 10, 26, 7]
];

// for (let i in a) {
//     console.log("row " + i);
//     for (let j in a[i]) {
//         console.log(a[i][j]);
//     }
// }

let b = [];
for (let j = a[0].length - 1; j >= 0; j--) {
    b.push(a[0][j]);
}

let count = 0;
for (let i = 0; i < b.length; i++) {
    if (typeof b[i] === "number") {
        count++;
    }
}

let demtu = a[1][0];
count = 0;
for (let i = 0; i < demtu.length; i++) {
    if (demtu.substring(i, i + 1) === " ") count++
}

let sosanh1 = a[1][0];
let sosanh2 = a[2][2];
let flag = "2 strings aren't same !";
if (sosanh1.length === sosanh2.length) {
    for (let i = 0; i < sosanh1.length; i++) {
        if (sosanh1[i] === sosanh2[i]) {
            flag = "2 strings are same !";
        } else flag = "2 strings aren't same !";
    }
}

let c = a[3][1];
let rp = "";
for (let i = 0; i < c.length; i++) {
    if (c.substr(i, 1) === "-") rp += "_";
    else rp += c.substr(i, 1);
}
console.log(rp);