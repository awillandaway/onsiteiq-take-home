import { generateId } from 'utils/generateId';

describe('generateId', () => {
  it('Generates a unique ID', () => {
    const ids = [];

    for (let i = 0; i < 1000; i += 1) {
      ids.push(generateId());
    }
    // generate 1000 IDs and construct a set from them, then assert that the set has 1000 items (meaning they're all unique)
    expect(Array.from(new Set(ids))).toHaveLength(1000);
  });
});
