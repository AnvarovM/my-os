// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved
import Index from 'pages/index';

test('renders index page', () => {
  const { getByText } = render(<Index />);
  const howAreYou = getByText('Hi how are you?');
  expect(howAreYou).toBeInTheDocument();
});
