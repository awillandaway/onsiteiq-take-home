import renderer from 'react-test-renderer';
import { Card } from '../Card';

describe('Card', () => {
  it('Renders correctly', () => {
    const card = renderer.create(<Card>Test content</Card>).toJSON();
    expect(card).toMatchSnapshot();
  });
});
