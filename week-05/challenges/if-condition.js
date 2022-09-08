// Challenge 1
let a = 10;

a < 20
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log('10 To 40')
    : a > 40
    ? console.log('> 40')
    : console.log('Unknown');

//----------------------------------------------------------------------------------------------------------------------

// Challenge 2
let st = 'Elzero Web School';

if (typeof st === typeof '34') {
    console.log('Good');
}

// Challenge 3
if (st.charAt(st.indexOf('W')).toLowerCase() === 'w') {
    console.log('Good');
}

// Challenge 4
if (typeof st.length !== 'string') {
    console.log('Good');
}

// Challenge 5
if (typeof st.length === 'number') {
    console.log('Good');
}

// Challenge 6
if (st.substring(0, 6).repeat(2) === 'ElzeroElzero') {
    console.log('Good');
}
