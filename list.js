'use strict'

class DoublyLinkedList {
    #list = []

    length() {
        return this.#list.length
    }

    append(value) {
        if (typeof (value) !== 'string' || value.length !== 1) throw new Error('Invalid value')
        this.#list.push(value)
    }

    insert(value, index) {
        if (typeof value != 'string' || value.length !== 1) throw new Error('Invalid value')
        if (typeof index != 'number' || index < 0 || index > this.length()) throw new Error('Invalid index')
        this.#list.splice(index, 0, value)
    }

    delete(index) {
        if (!this.#list.length) throw new Error('Trying to delete from empty list')
        if (typeof index != 'number' || index < 0 || index > this.length() - 1) throw new Error('Invalid index of the value to delete')
        return this.#list.splice(index, 1)[0]
    }

    deleteAll(value) {
        if (typeof value != 'string' || value.length !== 1) return
        this.#list = this.#list.filter(elem => elem !== value)
    }

    get(index) {
        if (typeof index != 'number' || index < 0 || index > this.length() - 1) throw new Error('Invalid index')
        return this.#list[index]
    }

    clone() {
        const list = new DoublyLinkedList()
        list.#list = this.#list.slice(0)
        return list
    }

    reverse() {
        this.#list.reverse()
    }

    findFirst(value) {
        return this.#list.indexOf(value)
    }

    findLast(value) {
        return this.#list.lastIndexOf(value)
    }

    clear() {
        this.#list.length = 0
    }

    extend(list) {
        for (const value of list.#list) this.append(value)
    }
}

module.exports = { DoublyLinkedList };
