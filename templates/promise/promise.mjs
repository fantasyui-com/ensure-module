// your cache mechanism: const cache = cache();

export function main({context, setup, input}) {

  // store results in the output variable, it is returned through the promise
  const output = {
    // url: 'example.com',
    // data: null,
  };

  return new Promise((resolve, reject) => {
    // if(cache.valid()) return resolve(cache.data());
    // output = your code here ...
    // cache.store(output, '1 month');
    // resolve(output); // fulfilled, note hos whte output object is returned.
    // OR: reject("failure reason"); // rejected
  });

};
