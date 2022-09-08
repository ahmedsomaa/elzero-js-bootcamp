// Assignment 1
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === exclude) continue;
    console.log(i);
}

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
start = 10;
end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
    if (i === stop) break;
    console.log(i === 10 ? i : `0${i}`);
}

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
start = 1;
end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
    console.log(i);
    for (let j = breaker; j <= end - breaker; j += breaker) {
        console.log(`-- ${j}`);
    }
}

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
let index = 10;
let jump = 2;
end = 0;

for (;;) {
    if (index > end + jump) console.log(index);
    else break;
    index -= jump;
}

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
let friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';

let count = friends.length - friends.length;
for (let i = 0; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) continue;
    count++;
    console.log(`${count} => ${friends[i]}`);
}

//----------------------------------------------------------------------------------------------------------------------

// Assignment 6
start = 0;
let swappedName = 'elZerO';

let swapped = '';
for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        swapped += swappedName[i].toUpperCase();
    } else {
        swapped += swappedName[i].toLowerCase();
    }
}

console.log(swapped);

//----------------------------------------------------------------------------------------------------------------------

// Assignment 7
start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];

for (let i = ++start; i < mix.length; i++) {
    if (typeof mix[i] !== 'number') continue;
    console.log(mix[i]);
}
