import "./App.css";
import PageRouters from "./routers/PageRouters";
import { AuthContextProvider } from "./store/AuthContextProvider";
import { ShopContextProvider } from "./store/ShopContextProvider";

import UserContextProvider from "./store/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <AuthContextProvider>
          <ShopContextProvider>
            <PageRouters />
          </ShopContextProvider>
        </AuthContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
