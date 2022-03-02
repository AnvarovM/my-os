import styled from 'styled-components';

const StyledTitleBar = styled.header`
  align-items: center;
  background-color: #000;
  display: flex;

  h1 {
    color: #fff;
    flex-grow: 1;
    font-size: 11.5px;
    font-weight: normal;
    height: 25px;
  }

  figure {
    align-items: center;
    display: flex;
    margin: 2.5px 0;

    img {
      height: 16px;
      margin: 0 8px;
      width: 16px;
    }

    figcaption {
      .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100px;
      }
    }
  }

  nav {
    button {
      height: 100%;
      width: 45px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);

        &.close {
          background-color: rgba(232, 17, 35);
          transition: background-color 0.3s ease;
        }
      }

      svg {
        fill: #fff;
        height: 100%;
        width: 15px;
      }
    }
  }
`;

export default StyledTitleBar;
