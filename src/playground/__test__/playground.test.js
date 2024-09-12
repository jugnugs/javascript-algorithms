import Playground from '../playground';

describe('linkedListInsertHead', () => {
  it('should return proper values for head and tail', () => {
    const [a, b, c] = Playground.linkedListInsertHead();
    expect(a).toEqual([3, 2, 1]);
    expect(b).toBe(3);
    expect(c).toBe(1);
  });
});

describe('linkedListInsertTail', () => {
  it('should return proper values for head and tail', () => {
    const [a, b, c] = Playground.linkedListInsertTail();
    expect(a).toEqual([1, 2, 3]);
    expect(b).toBe(1);
    expect(c).toBe(3);
  });
});

describe('linkedListInsertRandom', () => {
  it('should return proper result array', () => {
    const [a, b, c] = Playground.linkedListInsertRandom();
    expect(a).toEqual([1, 2, 3, 4, 5]);
    expect(b).toBe(1);
    expect(c).toBe(5);
  });
});

describe('linkedListTraverse', () => {
  it('should return proper result array', () => {
    expect(Playground.linkedListTraverse()).toEqual([3, 2, 1]);
  });
});

describe('linkedListAccess', () => {
  it('should return proper result value', () => {
    expect(Playground.linkedListAccess(0)).toBe(3);
    expect(Playground.linkedListAccess(2)).toBe(1);
    expect(Playground.linkedListAccess(1)).toBe(2);
  });
});

describe('linkedListDeleteHead', () => {
  it('should return proper result array', () => {
    const [a, b, c] = Playground.linkedListDeleteHead();
    expect(a).toEqual([2, 3, 4]);
    expect(b).toBe(2);
    expect(c).toBe(4);
  });
});

describe('linkedListDeleteTail', () => {
  it('should return proper result array', () => {
    const [a, b, c] = Playground.linkedListDeleteTail();
    expect(a).toEqual([1, 2, 3]);
    expect(b).toBe(1);
    expect(c).toBe(3);
  });
});

describe('linkedListDeleteRandom', () => {
  it('should return proper result array', () => {
    const [a, b, c] = Playground.linkedListDeleteRandom();
    expect(a).toEqual([1, 2, 4]);
    expect(b).toBe(1);
    expect(c).toBe(4);
  });
});

describe('linkedListReverse', () => {
  it('should return proper result array', () => {
    const [a, b, c] = Playground.linkedListReverse();
    expect(a).toEqual([4, 3, 2, 1]);
    expect(b).toBe(4);
    expect(c).toBe(1);
  });
});
