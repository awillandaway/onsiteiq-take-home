import { capitalizeFirstLetter } from 'utils/StringUtils';

describe('StringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('Capitalizes first letter of a string', () => {
      expect(capitalizeFirstLetter('test')).toBe('Test');
      expect(capitalizeFirstLetter('this is a sentence instead of just one word')).toBe(
        'This is a sentence instead of just one word',
      );
    });
  });
});
