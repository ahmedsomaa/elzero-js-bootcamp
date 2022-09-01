// Assignment 1
function sayHello(theName, theGender) {
    if (theGender === undefined) {
        console.log(`Hello ${theName}`);
    } else {
        console.log(`Hello ${theGender === 'Male' ? 'Mr' : 'Miss'} ${theName}`);
    }
}

// Needed Output
sayHello('Osama', 'Male'); // "Hello Mr Osama"
sayHello('Eman', 'Female'); // "Hello Miss Eman"
sayHello('Sameh'); // "Hello Sameh"

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log('Second Number Not Found');
    } else {
        switch (operation) {
            case 'add':
                console.log(firstNum + secondNum);
                break;
            case 'subtract':
                console.log(firstNum - secondNum);
                break;
            case 'multiply':
                console.log(firstNum * secondNum);
                break;
            default:
                console.log(firstNum + secondNum);
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
        console.log('Age Out Of Range');
    } else {
        console.log(`${theAge * 12} Months`);
        console.log(`${((theAge * 365) / 7).toFixed()} Weeks`);
        console.log(`${theAge * 365} Days`);
        console.log(`${theAge * 365 * 8} Hours`);
        console.log(`${theAge * 365 * 8 * 60} Minutes`);
        console.log(`${theAge * 365 * 8 * 60 * 60} Seconds`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
function checkStatus(a, b, c) {
    console.log(
        `Hello ${typeof a === 'string' ? a : typeof b === 'string' ? b : c}, Your Age Is ${
            typeof a === 'number' ? a : typeof b === 'number' ? b : c
        }, You Are${(typeof a === 'boolean' ? a : typeof b === 'noolean' ? b : c) ? '' : ' Not'} Available For Hire`
    );
}

// Needed Output
checkStatus('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//----------------------------------------------------------------------------------------------------------------------

// Assignment 5
function createSelectBox(startYear, endYear) {
    document.write('<select>');
    for (let year = startYear; year <= endYear; year++) {
        document.write(`<option value=${year}>${year}</option>`);
    }
    document.write('</select>');
}
createSelectBox(2000, 2021);

//----------------------------------------------------------------------------------------------------------------------

// Assignemnt 6
function multiply(...operands) {
    let product = 1;
    for (let i = 0; i < operands.length; i++) {
        if (typeof operands[i] === 'string') continue;
        else {
            product *= parseInt(operands[i]);
        }
    }
    console.log(product);
}

multiply(10, 20); // 200
multiply('A', 10, 30); // 300
multiply(100.5, 10, 'B'); // 1000
