import * as S from './styles'

export function PageNotFound() {
  return (
    <S.Container>
      <h1>Something went wrong:</h1>
      <pre style={{ color: "red" }}>Oops, nothing to see here!</pre>
    </S.Container>
  )
}