const { DoublyLinkedList } = require("./list")

test(
    'The length of the empty list is 0',
    () => {
        const list = new DoublyLinkedList()
        expect(list.length()).toBe(0)
    }
)

test(
    'The length of non-empty list is correct',
    () => {
        const list = new DoublyLinkedList()
        list.append('1')
        expect(list.length()).toBe(1)
        list.append('2')
        expect(list.length()).toBe(2)
        list.append('3')
        list.append('4')
        list.append('5')
        expect(list.length()).toBe(5)
    }
)

test(
    'Can append an element to empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        expect(list.get(0)).toBe('0')
    }
)

test(
    'Can append an element to non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        expect(list.get(0)).toBe('0')
        expect(list.get(1)).toBe('1')
    }
)

test(
    'Cannot append an element with invalid value',
    () => {
        const list = new DoublyLinkedList()
        expect(list.append.bind(list, 0)).toThrow('Invalid value')
        expect(list.append.bind(list, 42)).toThrow('Invalid value')
        expect(list.append.bind(list, '42')).toThrow('Invalid value')
        expect(list.append.bind(list, 'abc')).toThrow('Invalid value')
    }
)

test(
    'Can insert an element to empty list',
    () => {
        const list = new DoublyLinkedList()
        list.insert('0', 0)
        expect(list.get(0)).toBe('0')
    }
)

test(
    'Can insert an element in the beginning of non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.insert('1', 0)
        list.insert('0', 0)
        expect(list.get(0)).toBe('0')
        expect(list.get(1)).toBe('1')
    }
)

test(
    'Can insert an element in the end of non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.insert('0', 0)
        list.insert('1', 1)
        expect(list.get(0)).toBe('0')
        expect(list.get(1)).toBe('1')
    }
)

test(
    'Can insert an element between 2 elements in non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.insert('0', 0)
        list.insert('2', 1)
        list.insert('1', 1)
        expect(list.get(0)).toBe('0')
        expect(list.get(1)).toBe('1')
        expect(list.get(2)).toBe('2')
    }
)

test(
    'Cannot insert an element with invalid value',
    () => {
        const list = new DoublyLinkedList()
        expect(list.insert.bind(list, 1, 0)).toThrow('Invalid value')
        expect(list.insert.bind(list, 42, 0)).toThrow('Invalid value')
        expect(list.insert.bind(list, '42', 0)).toThrow('Invalid value')
    }
)

test(
    'Cannot insert an element with invalid index',
    () => {
        const list = new DoublyLinkedList()
        expect(list.insert.bind(list, '0', -1)).toThrow('Invalid index')
        list.insert('0', 0)
        expect(list.insert.bind(list, '0', 'a')).toThrow('Invalid index')
        expect(list.insert.bind(list, '0', 2)).toThrow('Invalid index')
    }
)

test(
    'Cannot delete 1 element from empty list',
    () => {
        const list = new DoublyLinkedList()
        expect(list.delete.bind(list, 0)).toThrow('Trying to delete from empty list')
    }
)

test(
    'Can delete 1 element in the beginning of non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        list.delete(0)
        expect(list.get(0)).toBe('1')
    }
)

test(
    'Can delete 1 element in the end of non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        list.delete(2)
        expect(list.length()).toBe(2)
    }
)

test(
    'Can delete 1 element between 2 elements in non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        list.delete(1)
        expect(list.get(1)).toBe('2')
    }
)

test(
    'Cannot delete 1 element with invalid index from non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        expect(list.delete.bind(list, -2)).toThrow('Invalid index of the value to delete')
        expect(list.delete.bind(list, 3)).toThrow('Invalid index of the value to delete')
        expect(list.delete.bind(list, '42')).toThrow('Invalid index of the value to delete')
    }
)

test(
    'Cannot delete same-value elements from empty list',
    () => {
        const list = new DoublyLinkedList()
        expect(list.deleteAll.bind(list, '42')).toThrow('Trying to delete from empty list')
    }
)

test(
    'Can delete same-value elements from non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        list.deleteAll('2')
        expect(list.length()).toBe(2)
        list.append('1')
        list.deleteAll('1')
        expect(list.length()).toBe(1)
    }
)

test(
    'Cannot get an element from empty list',
    () => {
        const list = new DoublyLinkedList()
        expect(list.get.bind(list, 0)).toThrow('Invalid index')
        expect(list.get.bind(list, 1)).toThrow('Invalid index')
    }
)

test(
    'Can get an element from non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        expect(list.get(0)).toBe('0')
        expect(list.get(1)).toBe('1')
        expect(list.get(2)).toBe('2')
    }
)

test(
    'Cannot get an element with wrong index from non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        expect(list.get.bind(list, -1)).toThrow('Invalid index')
        expect(list.get.bind(list, 42)).toThrow('Invalid index')
        expect(list.get.bind(list, '42')).toThrow('Invalid index')
    }
)

test(
    'Can clone empty list',
    () => {
        const list = new DoublyLinkedList()
        const clonedList = list.clone()
        expect(clonedList.length()).toBe(0)
    }
)

test(
    'Can clone non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        const clonedList = list.clone()
        expect(clonedList.length()).toBe(3)
        expect(clonedList.get(0)).toBe('0')
        expect(clonedList.get(1)).toBe('1')
        expect(clonedList.get(2)).toBe('2')
    }
)

test(
    'Can reverse empty list',
    () => {
        const list = new DoublyLinkedList()
        list.reverse()
        expect(list.length()).toBe(0)
    }
)

test(
    'Can reverse non-empty list',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        list.append('1')
        list.append('2')
        list.reverse()
        expect(list.length()).toBe(3)
        expect(list.get(0)).toBe('2')
        expect(list.get(1)).toBe('1')
        expect(list.get(2)).toBe('0')
    }
)

test(
    'Can find a first element with a certain value',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        expect(list.findFirst('0')).toBe(0)
        list.append('1')
        list.append('0')
        list.append('0')
        expect(list.findFirst('0')).toBe(0)
    }
)

test(
    'If cannot find an element with a certain value, findFirst returns -1',
    () => {
        const list = new DoublyLinkedList()
        expect(list.findFirst('a')).toBe(-1)
        list.append('0')
        list.append('1')
        list.append('2')
        expect(list.findFirst('a')).toBe(-1)
    }
)

test(
    'Can find a last element with a certain value',
    () => {
        const list = new DoublyLinkedList()
        list.append('0')
        expect(list.findLast('0')).toBe(0)
        list.append('1')
        list.append('0')
        list.append('0')
        expect(list.findLast('0')).toBe(3)
    }
)

test(
    'If cannot find an element with a certain value, findLast returns -1',
    () => {
        const list = new DoublyLinkedList()
        expect(list.findFirst('a')).toBe(-1)
        list.append('0')
        list.append('1')
        list.append('2')
        expect(list.findFirst('a')).toBe(-1)
    }
)

test(
    'Can clear a list',
    () => {
        const list = new DoublyLinkedList()
        list.clear()
        expect(list.length()).toBe(0)
        list.append('0')
        list.append('1')
        list.append('2')
        list.clear()
        expect(list.length()).toBe(0)
    }
)

test(
    'Can extend an empty list with empty list',
    () => {
        const list1 = new DoublyLinkedList()
        const list2 = new DoublyLinkedList()
        list1.extend(list2)
        expect(list1.length()).toBe(0)
    }
)

test(
    'Can extend an empty list with non-empty list',
    () => {
        const list1 = new DoublyLinkedList()
        const list2 = new DoublyLinkedList()
        list2.append('0')
        list2.append('1')
        list1.extend(list2)
        expect(list1.length()).toBe(2)
        expect(list1.get(0)).toBe('0')
        expect(list1.get(1)).toBe('1')
    }
)

test(
    'Can extend a non-empty list with empty list',
    () => {
        const list1 = new DoublyLinkedList()
        list1.append('0')
        list1.append('1')
        const list2 = new DoublyLinkedList()
        list1.extend(list2)
        expect(list1.length()).toBe(2)
        expect(list1.get(0)).toBe('0')
        expect(list1.get(1)).toBe('1')
    }
)

test(
    'Can extend a non-empty list with non-empty list',
    () => {
        const list1 = new DoublyLinkedList()
        list1.append('0')
        list1.append('1')
        const list2 = new DoublyLinkedList()
        list2.append('2')
        list2.append('3')
        list1.extend(list2)
        expect(list1.length()).toBe(4)
        expect(list1.get(0)).toBe('0')
        expect(list1.get(1)).toBe('1')
        expect(list1.get(2)).toBe('2')
        expect(list1.get(3)).toBe('3')
    }
)
