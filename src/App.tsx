import { Switch, Route, HashRouter } from "react-router-dom";
import LoginPage from "pages/login";
import SchemasPage from "pages/schemas";
import NewSchemaPage from "pages/schemas/new";
import SchemaPage from "pages/schemas/[id]";
import AuthedRoute from "components/AuthedRoute";
import { TokenProvider } from "contexts/Token";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TokenProvider>
          <HashRouter>
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
              <AuthedRoute exact path="/schemas/:id">
                <SchemaPage />
              </AuthedRoute>
            </Switch>
          </HashRouter>
        </TokenProvider>
      </div>
    </div>
  );
}

export default App;
