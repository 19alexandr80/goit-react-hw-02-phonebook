import styled from '@emotion/styled';

export const ContactsLitsStyled = styled.ul`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  gap: 20px;
`;
export const ContactStyled = styled.li`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 32px;
  gap: 5px;
  p {
    margin: 0px;
  }
  button {
    border: 3px outset;
    padding: 2px;
    font-size: 12px;
    border-radius: 5px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: red;
    }
    :active {
      background-color: green;
    }
  }
`;