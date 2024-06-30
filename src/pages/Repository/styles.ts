import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background-color: #eee;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }

  h1, p {
    color: #0D2636;
  }
`;

export const ReturnButton = styled(Link)`
  border: none;
  outline: none;
  background-color: transparent;
`;


export const Issues = styled.ul`
  padding-top: 18px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
  }

  & + li {
    margin-top: 12px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #0D2636;
  }

  div {
    flex: 1;
    margin-left: 12px;

    p {
      margin-top: 10px;
      font-size: 12px;
      color: black;
    }

  }

  strong {
    font-size: 15px;

    a {
      text-decoration: none;
      color: #222;
      transform: 0.3s;
      cursor: pointer;

      &:hover {
        color: #0071DB;
      }
    }
  }

`;

export const Pagination = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   button {
    outline: 0;
    border: 0;
    background-color: #0D2636;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
   }
`;