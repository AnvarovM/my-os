// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved
import Index from 'pages/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import defaultTheme from 'themes/default.json';

test('renders index page', () => {
  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <Index />
    </ThemeProvider>
  );
  const howAreYou = getByText('Hi how are you?');
  expect(howAreYou).toBeInTheDocument();
});
