import styled, {keyframes, css} from 'styled-components';
import { CustomFormProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;


export const Form = styled.form<CustomFormProps>`
  margin-top: 30px;
  display: flex;

  input {
   flex: 1;
   border: 1px solid ${props => (props.$error ? '#FF0000' : '#ddd')};
   padding: 10px 15px;
   border-radius: 8px;
   font-size: 17px;
   
   &:focus {
    border-color: black;
   }
  } 
`;

// Spinner Animation
const SpinnerAnimation = keyframes`
  from{
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button`
  background-color: #0D2636;
  border: 0;
  border-radius: 8px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.9;
  }

  ${props => props.disabled && css`
    svg {
      animation: ${SpinnerAnimation} 2s linear infinite;
    }
  `}
`;

export const ReposList = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & + li {
      border-top: 1px solid #bbbbbb95;
    }

    span {
      display: flex;
      align-items: center;
    }

    a {
      color: #0D2636;
      text-decoration: none;
    }
    
  }
`;

export const DeleteRepo = styled.button`
  background-color: transparent;
  border: none;
  color: crimson;
  padding: 6px;
`;