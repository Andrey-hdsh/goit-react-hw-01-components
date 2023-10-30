import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 100%;
  background-color: #e2e2e2;
  padding: 40px;

  div {
    margin: 0 auto;
    background-color: white;
    width: 250px;
    text-align: center;
  }

  h2 {
    font-weight: 400;
    padding: 10px 0 10px 0;
  }

  ul {
    display: flex;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
  }

  li {
    width: 0;
    height: 40px;
    flex: 1;
    color: rgb(255, 255, 255);
    padding: 5px 10px 5px 10px;
    font-size: 12px;
  }

  span {
    display: block;

    &:last-child {
      font-size: 16px;
    }
  }
`;
