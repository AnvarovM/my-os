// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Title = styled.h1`
  border: 3px solid #232323;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5em;
`;

export default Title;
