-   Solution #1

```javascript
document.write(
    "<h1 style='color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial'>Elzero</h1>"
);
```

-   Solution #2

```javascript
document.write('<h1>Elzero</h1>');
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = 'Arial';
```
