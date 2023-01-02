const sum = require('./sum');

describe('Test Sum function', () => {
  test('test sum function - should add 1+2 == 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test('Object assignment', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe('truthy or falsy', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

describe('number', () => {
  test('2+2 === 4', () => {
    const val = 2 + 2;
    expect(val).toBe(4);
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(3);
    expect(val).toBeLessThan(7);
  });
  test('adding floats', () => {
    const val = 2.1 + 2.3;
    // expect(val).toBe(4.3);
    expect(val).toBeCloseTo(4.399999);
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(3);
    expect(val).toBeLessThan(7);
  });
});

describe('Strings', () => {
  test('ther is not i in team', () => {
    expect('team').not.toMatch(/I/);
  });
});

describe('arrays', () => {
  test('arrays', () => {
    const shopList = ['cleaner', 'diapers', 'paper towels', 'milk'];
    expect(shopList).toContain('milk');
  });
});

function compilesAndroidCode() {
  throw new Error('U are using the wrong jdk');
}

describe('expections', () => {
  test(' during compling not error', () => {
    expect(() => compilesAndroidCode()).toThrow('U are using the wrong jdk');
  });
});
