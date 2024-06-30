import styled from "styled-components";
import { Button } from "./types";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    margin-top: 18px;
`;
export const Filters = styled.button<Button>`
    outline: 0;
    border: 0;
    background-color: #0D2636;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;

    & + button {
        margin-left: 8px;
    }

    &:nth-child(${props => props.active + 1}) {
        background-color: #0071DB;
        color: white;
    }
`;