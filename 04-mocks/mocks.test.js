const axios = require('axios');

const fetchData = async (id) => {
  console.log('before results fetchdata');

  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  console.log('After results fetchdata', results.data);
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i += 1) {
    callback(items[i]);
  }
};

test('mock callback', () => {
  const mockCallback = jest.fn((x) => x + 42);
  forEach([1, 2, 3], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(3);
  console.log('EEE', mockCallback.mock.calls);
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  console.log('EEE', mockCallback.mock.results);
  expect(mockCallback.mock.results[0].value).toBe(43);
});

test('mock return', () => {
  const mockedFn = jest.fn();
  mockedFn.mockReturnValueOnce('apoorv');
  const res = mockedFn();
  expect(res).toBe('apoorv');
});

test('mutiple mock return', () => {
  const mockedFn = jest.fn();
  mockedFn
    .mockReturnValueOnce('apoorv')
    .mockReturnValueOnce('gupta')
    .mockReturnValueOnce('ankur');
  const res = mockedFn();
  const res2 = mockedFn();
  const res3 = mockedFn();
  expect(res).toBe('apoorv');
  expect(res2).toBe('gupta');
  expect(res3).toBe('ankur');
});

test('mock axios', async () => {
  jest.spyOn(axios, 'get').mockReturnValueOnce({
    data: { id: '1', completed: true, toDo: 'hello mock' }
  });
  const results = await fetchData(1);
  expect(results.toDo).toBe('hello mock');
});
