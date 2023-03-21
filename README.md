# mtsd_2

## Description

This repository contains two implementations of doubly linked list with valid values equal to single characters.
<br>It also has many methods to work with the list:
- length - returns the number of elements in the list (0 if the list is empty);
- append - adds the element to the end of the list;
- insert - adds the element with the specified value at the specified position ;
- delete - deletes the element at the specified position;
- deleteAll - removes all elements with the specified value;
- get - returns the value of the element at the specified position;
- clone - returns a copy of the list;
- reverse - reverses the order of list elements;
- findFirst - returns the position of the first element with the specified value;
- findLast - returns the position of the last element with the specified value;
- clear - removes all list items;
- extend - adds all the values of the specified list to the current one;

Tests are also written for list implementations, so you can make sure that the lists work correctly. 
## Calculate the variant:
```
1333 % 4 = 1
```

I needed to implement:
1. Doubly linked list ([Link](https://github.com/vladyatsuk/mtsd_2/tree/f924bb23515c6b4466c375729c1c8c397feaffc1))
2. Refactor it using built-in arrays/lists ([Link](https://github.com/vladyatsuk/mtsd_2/tree/78edccbfbc8990094e73eee79e0f39890bdd7c70))
## How to use

1. Install Node.js: [Download link](https://nodejs.org/en)

2. Open the terminal and move to the project root folder

3. Install dependencies:
```
npm install
```
4. Now you can run tests:
```
npm test
```

Also you can open or run `examples.js` file to look how methods of the lists work:
```
node examples.js
```
## Link to the failed CI tests commit

[Link](https://github.com/vladyatsuk/mtsd_2/commit/f23d922544d1fa2676dec50df839e7d5496cdb54)

## Conclusion

Although it was a small project, I was able to appreciate the benefits of writing tests due to the requirement to change the implementation of the list. This considerably reduced the time required to verify the correctness of the list's functionality. After writing the second implementation, I only needed to run the tests that had been written previously.