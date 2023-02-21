import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button', () => {
  it('Renders correctly', () => {
    const button = renderer.create(<Button text="Test content" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Correctly calls click handler', () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(<Button text="Test content" onClick={mockOnClick} />);

    fireEvent.click(getByRole('button'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
