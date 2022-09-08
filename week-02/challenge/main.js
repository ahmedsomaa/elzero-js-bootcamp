const siteTitle = 'Elzero',
    siteDescription = 'Elzero Web School',
    dateContent = '25/10';

const markUp = `
    <div class='card'>
        <h3>${siteTitle}</h3>
        <p>${siteDescription}</p>
        <span>${dateContent}</span>
    </div>
`;

// I used this as it's much simpler and cleaner
// Check solution.md for both ways
document.write(markUp.repeat(4));
