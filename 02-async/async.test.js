const fetchData = require('./async');

test('should return corrct todo', () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});

test('should return corrct todo', async () => {
  const toDo = await fetchData(1);
  expect(toDo.id).toBe(1);
});
