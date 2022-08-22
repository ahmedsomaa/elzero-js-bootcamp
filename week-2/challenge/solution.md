-   Solution #1

```javascript
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

document.write(markUp);
document.write(markUp);
document.write(markUp);
document.write(markUp);
```

- Solution #2 (more elegant)

```javascript
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

document.write(markUp.repeat(4));
```