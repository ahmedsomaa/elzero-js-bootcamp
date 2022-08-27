// Switch Challenge Solution
let job = 'Manager';
let salary = 0;

switch (job) {
    case 'Manager':
        salary = 8_000;
        console.log(salary);
        break;
    case 'IT':
    case 'Support':
        salary = 6_000;
        console.log(salary);
        break;
    case 'Developer':
    case 'Designer':
        salary = 7_000;
        console.log(salary);
        break;
    default:
        salary = 4_000;
        console.log(salary);
}

// If Challenge Solution
let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5_000;
    console.log(`My money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3_000;
    console.log(`My money is ${money}`);
} else if (holidays === 3) {
    money = 2_000;
    console.log(`My money is ${money}`);
} else if (holidays === 4) {
    money = 1_000;
    console.log(`My money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My money is ${money}`);
} else {
    money = 0;
    console.log(`My money is ${money}`);
}
