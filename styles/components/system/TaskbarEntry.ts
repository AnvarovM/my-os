import styled from 'styled-components';

const centered = `
  display: flex;
`;

export const StyledTaskbarEntry = styled.li`
  border-bottom: 2px solid #add8e6;
  color: #fff;
  font-size: 13px;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  ${centered};

  figure {
    align-items: center;
    display: flex;

    img {
      height: 18px;
      margin: 0 5px;
      width: 18px;
    }

    p {
      text-align: center;
    }
  }
`;

export default StyledTaskbarEntry;
