// Promises

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Ping");
}, 5000);

setTimeout(() => {
  console.log("Almost pinging...");
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 3000);

setTimeout(() => {
  console.log("Pinging soon...");
}, 1000);

console.log("Hello!");
