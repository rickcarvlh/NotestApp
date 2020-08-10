const doWorkCasllback = (callback) => {
  setTimeout(() => {
    // callback('This is my error', undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCasllback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});

// * with callback order is important
