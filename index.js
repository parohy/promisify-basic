export default func => (...args) =>
  new Promise((resolve, reject) => {
    const callback = (err, value) => (err ? reject(err) : resolve(value));
    func.apply(this, [...args, callback]);
  });
