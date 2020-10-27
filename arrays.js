"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(items[i], i);
  }

}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const emptyList = [];
  for (const i in items) {
    if (i % 2 === 0) {
      emptyList.push(items[i]);
    }
  }
  console.log(emptyList);
}


// emptyList = []
// for i in Range(len(items)):
//   i % 2 = 0
// empty_list.append(i)





// #fruits.push('Mango')
// // ["Strawberry", "Banana", "Mango"]

// let pos = fruits.indexOf('Banana')
// // 1




// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  items.sort((a, b) => a - b);
  const items2 = items.slice(0, n);
  items2.reverse();
  console.log(items2);
}



// SORTING NUMBERS
//  
//   > const nums = [1, 30, 4, 21, 100000];
//     > nums.sort((a, b) => a - b);
// [1, 4, 21, 30, 100000]

// smallestNItems([1, 30, 4, 21, 100000], 4)


//const months = ['March', 'Jan', 'Feb', 'Dec'];
//months.sort();
//console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

//const array1 = [1, 30, 4, 21, 100000];
//array1.sort();
//console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
