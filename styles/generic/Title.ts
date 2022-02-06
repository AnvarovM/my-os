// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5em;
    margin-top: 100px;
    text-align: center;
`;

export default Title;
