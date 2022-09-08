/*
  Loop Challenge
*/

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployees = ['Amgad', 'Samah', 'Ameer', 'Omar', 'Othman', 'Amany', 'Samia', 'Anwar'];

let adminsNumber = myAdmins.length;

document.write(`<div>We Have ${adminsNumber} Admins</div>`);
document.write('<hr/>');

// loop over admins
for (let i = 0; i < adminsNumber; i++) {
    // Count of employees that has the same first letter
    // as the first letter of the amdmin
    let employeesCount = 0;

    // Break if 'Stop' is reached
    if (myAdmins[i] === 'Stop') break;

    document.write('<div>');
    document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
    document.write('<h3>Team Members:</h3>');

    // loop over employees
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j].startsWith(myAdmins[i][0])) {
            employeesCount++;
            document.write(`<p> - ${employeesCount} ${myEmployees[j]} </p>`);
        }
    }
    document.write('</div>');
    document.write('<hr/>');
}
