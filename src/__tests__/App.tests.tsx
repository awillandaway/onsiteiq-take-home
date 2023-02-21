import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('Renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
