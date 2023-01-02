let animals = ['cat', 'dog', 'cow'];

describe('Animals array', () => {
  beforeAll(() => {
    console.log('Runs before all the test', animals);
  });

  afterAll(() => {
    console.log('Runs after all the test', animals);
  });
  beforeEach(() => {
    console.log('Runs before each test', animals);

    animals = ['cat', 'dog', 'cow'];
  });

  afterEach(() => {
    console.log('Runs after each test', animals);

    animals = ['cat', 'dog', 'cow'];
  });
  test('should add animals to end of array', () => {
    animals.push('tiger');
    expect(animals[animals.length - 1]).toBe('tiger');
  });
  test('should add animals to start of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });
  test('should have initial length 4', () => {
    expect(animals.length).toBe(3);
  });
});

describe('Do sth elese', () => {
  console.log('DO sth esle');
  test.only('do sth else', () => {
    console.log('Expect sth else');
  });
});
