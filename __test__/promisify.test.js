const promisify = require('../').default;

const customErr = new Error('Custom error message');

const asynFunc = (message, duration, callback) => {
  setTimeout(() => callback(null, message), duration);
};

const asyncException = (message, duration, callback) => {
  setTimeout(() => callback(customErr, message), duration);
};

describe('Test async function', () => {
  it('Async null', done => {
    expect.assertions(1);
    asynFunc('Hello World!', 500, (err, message) => {
      expect(err).toBeNull();
      done();
    });
  });

  it('Async print message', done => {
    expect.assertions(1);
    asynFunc('Hello World!', 500, (err, message) => {
      expect(message).toMatch('Hello World!');
      done();
    });
  });

  it('Async error', done => {
    expect.assertions(1);
    asyncException('Hello World!', 500, (err, message) => {
      expect(err).not.toBeNull();
      done();
    });
  });
});

describe('Test promisify', () => {
  const promiseFunc = promisify(asynFunc);
  const promisifyErr = promisify(asyncException);

  it('Resolve with message', () => {
    expect.assertions(1);
    return promiseFunc('Hello World!', 500).then(message => {
      expect(message).toMatch('Hello World!');
    });
  });

  it('Reject with err', () => {
    expect.assertions(1);
    return expect(promisifyErr('Hello World', 500)).rejects.toMatchObject(customErr);
  });
});
