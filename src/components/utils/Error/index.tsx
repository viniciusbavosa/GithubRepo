import { FallbackProps } from "react-error-boundary";
import * as S from './styles';

export function Fallback({ error }: FallbackProps) {
  return (
    <>
      <S.Container role="alert">
      <h1>Something went wrong:</h1>
      <pre style={{ color: "red" }}>{error.message}</pre>
      </S.Container>
    </>
  )
}