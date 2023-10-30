import styled from 'styled-components';

export const List = styled.ul`
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
`;
export const ListFriends = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px 5px 10px;
  box-shadow: -0.2px 1px 0px 1px rgba(209, 207, 209, 1);
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.$status ? 'green' : 'red')};
  }
`;
