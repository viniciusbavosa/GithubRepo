import { Fallback } from "./components";
import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./routes";
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <ErrorBoundary 
        FallbackComponent={Fallback}
        >
        <GlobalStyle />
        <AppRoutes />
      </ErrorBoundary>
    </>
  )
}

export default App
