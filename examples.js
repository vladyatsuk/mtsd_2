const { DoublyLinkedList } = require('./list')

const list = new DoublyLinkedList() // {}
console.log(`The length of the empty list is ${list.length()}`)

list.append('1') // {'1'}
console.log(`After appending 1 element the length is ${list.length()}`)
list.append('2') // {'1', '2'}
list.append('4') // {'1', '2', '4'}
console.log(`After appending 3 elements the length is ${list.length()}`)

list.insert('3', 2) // {'1', '2', '3', '4'}
console.log(`Inserted element at the position 2 is ${list.get(2)}, new length is ${list.length()}`)

list.delete(3) // {'1', '2', '3'}
console.log(`Deleted element at the position 3 is 4, new length is ${list.length()}`)

list.append('2') // {'1', '2', '3', '2'}
list.deleteAll('2') // {'1', '3'}
console.log(`After deleting all '2' the new length is ${list.length()}`)

list.append('5') // {'1', '3', '5'}
console.log(`Getting the first element: ${list.get(0)}`)
console.log(`Getting the second element: ${list.get(1)}`)
console.log(`Getting the last element: ${list.get(2)}`)

const clonedList = list.clone() // {'1', '3', '5'}
console.log(`The first element of the cloned list is ${clonedList.get(0)}`)
console.log(`The second element of the cloned list is ${clonedList.get(1)}`)
console.log(`The last element of the cloned list is ${clonedList.get(2)}`)

list.reverse() // {'5', '3', '1'}
console.log(`The first element of the reversed list is ${list.get(0)}`)
console.log(`The second element of the reversed list is ${list.get(1)}`)
console.log(`The last element of the reversed list is ${list.get(2)}`)

list.insert('5', 2) // {'5', '3', '5', '1'}
console.log(`The index of the first element with value 5 is ${list.findFirst('5')}`)
console.log(`The index of the last element with value 5 is ${list.findLast('5')}`)

clonedList.clear() // {}
console.log(`The length of the cleared list is ${clonedList.length()}`)

clonedList.append('2')
list.extend(clonedList) // {'5', '3', '5', '1', '2'}
console.log(`The length of the extended list is ${list.length()}`)
