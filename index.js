// const person=require('./person');

// const person1 = new person('Negin' , 34);
// person1.greeting();

const Logger = require('./reference/logger');

const logger = new Logger();
logger.on('message' , (data)=> console.log('Called Listener:' ,data));

logger.log('Hello world');