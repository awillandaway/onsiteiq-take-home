import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // the non-null assertion is recommended by the React team for this case (https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)
root.render(<App />);
