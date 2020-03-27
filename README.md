# NodeJS AsyncQueue

AsyncQueue is a simple NodeJS Module for running asynchronous functions in a series using a queue structure

## Installation

Use the npm package manager to install AsyncQueue.

```bash
npm install nodejs-async-queue --save
```

## Usage

```nodejs
const AsyncQueue = require('async-queue');
const asyncQueue = new AsyncQueue(YourFunction);
asyncQueue.add('foo','bar') // adds YourFunction('foo','bar') to queue
asyncQueue.list() // returns the queue list
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
