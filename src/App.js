import { CookiesProvider } from "react-cookie";
import "./App.css";
import PageRouters from "./routers/PageRouters";
import { AuthContextProvider } from "./store/AuthContextProvider";
import { GlobalContextProvider } from "./store/GlobalContextProvider";
import { ShopContextProvider } from "./store/ShopContextProvider";
import UserContextProvider from "./store/UserContextProvider";

function App() {
  return (
    <>
      <CookiesProvider>
        <UserContextProvider>
          <AuthContextProvider>
            <ShopContextProvider>
              <GlobalContextProvider>
                <PageRouters />
              </GlobalContextProvider>
            </ShopContextProvider>
          </AuthContextProvider>
        </UserContextProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
