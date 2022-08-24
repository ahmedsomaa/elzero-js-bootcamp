# Challenges

## Challenge 1

```javascript
let a = 10;
let b = '20';
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
```

### Solution

```txt
    First console.log
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]
    [++a]
        - Value: 11
        - Explain: Pre-increment Operator
    [+]
        - Explain: Addition Operator because operands are two numbers
    [+b++]
        - Value: 20
        - Explain: Unary Operator converts the string to a number and
                the Post-increment will be executed after the current line (21)
    [+]
        - Explain: Addition Operator because operands are two numbers
    [+c++]
        - Value: 80
        - Explain: Unary Operator return the number value and
            the Post-increment will be executed after the current line (81)
    [-]
        - Explain: Subtraction because operands are two numbers
    [+a++]
        - Value: 11
        - Explain: Unary Operator return the number value and
            the Post-increment will be executed after the current line (12)
    Final Output:
        [11] [+] [20] [+] [80] [-] [11] -> 100
```

```txt
    Second console.log
    current values:
        a = 12
        b = 21
        c = 81
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
    [++a]
        - Value: 13
        - Explain: Pre-increment Operator
    [+]
        - Explain: Addition Operator because operands are two numbers
    [-b]
        - Value: -21
        - Explain: Negation Operator
    [+]
        - Explain: Addition Operator because operands are two numbers
    [+c++]
        - Value: 81
        - Explain: Unary Operator return the number value and
            the Post-increment will be executed after the current line (82)
    [-]
        - Explain: Subtraction because operands are two numbers
    [-a++]
        - Value: -13
        - Explain: Negation Operator returns the negative value of
            the number and the Post-increment will be executed after
            the current line (14)
    [+]
        - Explain: Addition Operator because operands are two numbers
    [+a]
        - Value: 14
        - Explain: Unary Operator returns the value of the number
    Final Output:
        [13] [+] [-21] [+] [81] [-] [-13] [+] [14] -> 100
```

```txt
    Third console.log
    current values:
        a = 14
        b = 21
        c = 82
    [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
    [--c]
        - Value: 81
        - Explain: Pre-decrement Operator
    [+]
        - Explain: Addition Operator because operands are two numbers
    [+b]
        - Value: 21
        - Explain: Unray Operator returns the number value
    [+]
        - Explain: Addition Operator because operands are two numbers
    [--a]
        - Value: 13
        - Explain: Pre-decrement Operator
    [*]
        - Explain: Multiplication Operator because operands are two numbers
    [+b++]
        - Value: 21
        - Explain: Unary Operator returns the value of the number and
            the Post-increment will be executed after the current line (22)
    [-]
        - Explain: Subtraction Operator because operands are two numbers
    [+b]
        - Value: 22
        - Explain: Unary Operator returns the value of the number
    [*]
        - Explain: Multiplication Operator because operands are two numbers
    [a]
        - Value: 13
        - Explain: The variable returns the value of the number
     [+]
        - Explain: Addition Operator because operands are two numbers
    [--a]:
        - Value: 12
        - Explain: Pre-decrement Operator
    [-]
        - Explain: Subtraction Operator because operands are two numbers
    [+true]
        - Value: 1
        - Explain: Unray Operator returns the integer value of the boolean
    Final Output:
        [81] [+] [21] [+] [13] [*] [21] [-] [22] [*] [13] [+] [12] [-] [1] -> 100
```

## Challenge 2

```javascript
let d = '-100';
let e = '20';
let f = 30;
let g = true;

// Only use variables value
// Don't user variable twice

console.log(); // 2000
console.log(); // 173
```

### Solution

```javascript
console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 173
```
