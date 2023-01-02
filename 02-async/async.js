const axios = require('axios');

const fetchData = async (id) => {
  console.log('before results fetchdata');

  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  console.log('After results fetchdata', results.data);
  return results.data;
};

/**
 * stuck ho jayega
 * promsie queue
 */

const aa = fetchData(2).then((harsh) => console.log('harsgh', harsh));
console.log('AAA', aa);

// const caller = async () => {
//   const aaa = await fetchData(2);
// };

const Test = async () => {};
module.exports = fetchData;
