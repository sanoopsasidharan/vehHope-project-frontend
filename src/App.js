import "./App.css";
import PageRouters from "./routers/PageRouters";
import { AuthContextProvider } from "./store/AuthContextProvider";
import UserContextProvider from "./store/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <AuthContextProvider>
          <PageRouters />
        </AuthContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
