const logger = require('pino')({})
const Stack = require(".");
const s = new Stack();

// s.push(7);
// logger.info(s);

// s.push(5);
// logger.info(s)
// const popped = s.pop()
// logger.info({popped, length: s.size()}, `my stack result after operations`);

s.pushArray([2,5,7])
logger.info(s)


