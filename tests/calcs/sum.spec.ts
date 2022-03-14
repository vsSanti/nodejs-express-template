import { sum } from '@/calcs/sum';

describe('Sum', () => {
  it('should sum two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
