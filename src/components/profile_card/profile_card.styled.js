import styled from 'styled-components';

export const ProfileCardBlock = styled.div`
  text-align: center;
  font-size: 8;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02;
  color: #4d4d51;
  margin: 0 auto;
  padding-top: 12px;
  width: 160px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);

  div {
  }

  img {
    border-radius: 75px;
    overflow: hidden;
    background-color: rgb(179 179 179);
  }

  p {
    font-size: 10px;
  }

  p:not(:last-child) {
    margin-bottom: 4px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }

  li {
    font-size: 10px;
    width: 0;
    flex: 1;
    border: 1px solid rgba(119, 118, 118, 0.284);
    background-color: rgb(241, 247, 248);
  }
  span {
    display: block;
  }
`;
