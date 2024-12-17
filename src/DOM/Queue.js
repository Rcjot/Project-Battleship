class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(val) {
        this.stack1.push(val);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if (this.stack2.length === 0) return;
        return this.stack2.pop();
    }

    myPop() {
        if (this.stack1.length === 0) return;
        return this.stack1.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    lengthof1() {
        return this.stack1.length + this.stack2.length === 1;
    }

    clear() {
        this.stack1 = [];
        this.stack2 = [];
    }
}

module.exports = Queue;
