import AuthedRoute from "components/AuthedRoute";
import { TokenProvider } from "contexts/Token";
import LoginPage from "pages/login";
import SchemasPage from "pages/schemas";
import NewSchemaPage from "pages/schemas/new";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TokenProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <AuthedRoute exact path="/schemas">
                <SchemasPage />
              </AuthedRoute>
              <AuthedRoute exact path="/schemas/new">
                <NewSchemaPage />
              </AuthedRoute>
            </Switch>
          </BrowserRouter>
        </TokenProvider>
      </div>
    </div>
  );
}

export default App;
