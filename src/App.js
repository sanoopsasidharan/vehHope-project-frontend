import "./App.css";
import PageRouters from "./routers/PageRouters";
import { AuthContextProvider } from "./store/AuthContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <PageRouters />
      </AuthContextProvider>
    </>
  );
}

export default App;
