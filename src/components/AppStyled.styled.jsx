import styled from '@emotion/styled';

export const AppStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    gap: 20px;
  }
  input {
    border: 3px outset;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    margin-left: 20px;
  }
  button {
    border: 3px outset;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: green;
    }
    :active {
      background-color: red;
    }
  }
  label {
    font-size: 24px;
  }
`;
