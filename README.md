## Promisify

#### Usage
##### Declaration
```
const promisify = require('promisify-basic');

const asynFunc = (message, duration, callback) => {
  setTimeout(() => callback(message), duration);
};

export const promiseFunc = promisify(asyncFunc);
```

##### Difference
```
asyncFunc('Hello World', 3000, (error, message) => {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})

promiseFunc('Hello World', 3000)
  .then(message => {
    console.log(message)
  })
  .catch(error => {
    console.error(error)
  })
```