class AsyncQueue {
    constructor(worker) {
        this.worker = worker;
        this.queue = [];
        this.running = false;
    }
    add(...args) {
        this.queue.push(args);
        if (!this.running) {
            this.running = true;
            this.runWorker();
        }
    }
    list() {
        return this.queue;
    }
    async runWorker() {
        try {
            await this.worker(...this.queue[0]);
        } catch (err) {
            console.error('AsyncQueue Error',err);
        }
        this.queue.shift();
        if (this.queue[0]) {
            this.runWorker();
        } else {
            this.running = false;
        }
    }
}

module.exports = AsyncQueue;
