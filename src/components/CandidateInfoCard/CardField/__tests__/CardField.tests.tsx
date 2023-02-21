import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CardField } from '../CardField';

describe('CardField', () => {
  it('Renders correctly', () => {
    const cardField = renderer.create(<CardField label="Test label">Test content</CardField>).toJSON();
    expect(cardField).toMatchSnapshot();
  });

  it('Renders label with content', () => {
    const { getByText } = render(<CardField label="Test label">Test content</CardField>);

    expect(getByText('Test label')).toBeVisible();
    expect(getByText('Test content')).toBeVisible();
  });
});
