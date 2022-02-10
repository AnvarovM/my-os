/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApps';
// eslint-disable-next-line import/no-unresolved
import Index from 'pages/index';

test('renders main role', () => {
  render(
    <StyledApp>
      <Index />
    </StyledApp>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(screen.getByRole('main')).toBeInTheDocument();
});
