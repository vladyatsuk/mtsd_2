'use strict'

class ListNode {
    constructor(value, next = null, prev = null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    length() {
        let length = 0
        for (let currentNode = this.head; currentNode; currentNode = currentNode.next) length++
        return length
    }

    append(value) {
        if (typeof (value) !== 'string' || value.length !== 1) throw new Error('Invalid value')
        const node = new ListNode(value)
        if (!this.head) {
            this.head = node
        } else {
            node.prev = this.tail
            this.tail.next = node
        }
        this.tail = node
    }

    insert(value, index) {
        if (typeof (value) != 'string' || value.length !== 1) throw new Error('Invalid value')
        if (typeof (index) != 'number' || index < 0 || index > this.length()) throw new Error('Invalid index')
        const node = new ListNode(value)
        if (index === 0) {
            if (!this.head) {
                this.head = node
                this.tail = node
            } else {
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
        } else if (index === this.length()) {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        } else {
            let currentNode = this.head
            for (let i = 1; i <= index - 1; i++) {
                currentNode = currentNode.next
            }
            node.next = currentNode.next
            node.prev = currentNode
            currentNode.next = node
            node.next.prev = node
        }
    }

    delete(index) {
        if (!this.head) throw new Error('Trying to delete from empty list')
        if (typeof (index) != 'number' || index < 0 || index > this.length() - 1) throw new Error('Invalid index of the value to delete')
        let currentNode = this.head
        if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
        } else if (index === this.length() - 1) {
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            for (let i = 0; i < index; i++) currentNode = currentNode.next
            let value = currentNode.value
            currentNode.prev.next = currentNode.next
            currentNode.next.prev = currentNode.prev
            return value
        }
    }

    deleteAll(value) {
        if (!this.head) throw new Error('Trying to delete from empty list')
        if (typeof (value) != 'string' || value.length !== 1) return
        let currentNode = this.head
        for (let i = 0; i < this.length(); i++) {
            if (currentNode.value === value) {
                this.delete(i)
                i--
            }
            currentNode = currentNode.next
        }
    }

    get(index) {
        if (typeof (index) != 'number' || index < 0 || index > this.length() - 1) throw new Error('Invalid index')
        let currentNode = this.head
        for (let i = 0; i < index; i++) currentNode = currentNode.next
        return currentNode.value
    }

    clone() {
        let list = new DoublyLinkedList()
        for (let i = 0; i < this.length(); i++) list.append(this.get(i))
        return list
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }

    findFirst(value) {
        let currentNode = this.head
        for (let i = 0; currentNode; i++) {
            if (currentNode.value === value) return i
            currentNode = currentNode.next
        }
        return -1
    }

    findLast(value) {
        let currentNode = this.tail
        for (let i = this.length() - 1; currentNode; i--) {
            if (currentNode.value === value) return i
            currentNode = currentNode.prev
        }
        return -1
    }

    clear() {
        this.head = null
        this.tail = null
    }

    extend(list) {
        const newList = new DoublyLinkedList();
        for (let i = 0; i < list.length(); i++) newList.append(list.get(i));
        this.tail.next = newList.head;
        newList.head.prev = this.tail;
        this.tail = newList.tail;
    }

}

module.exports = { DoublyLinkedList };
