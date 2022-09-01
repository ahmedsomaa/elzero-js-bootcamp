/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
    console.log(
        `Hello ${typeof a === 'string' ? a : typeof b === 'string' ? b : c}, Your Age Is ${
            typeof a === 'number' ? a : typeof b === 'number' ? b : c
        }, You Are${(typeof a === 'boolean' ? a : typeof b === 'noolean' ? b : c) ? '' : ' Not'} Available For Hire`
    );
}

showDetails('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
