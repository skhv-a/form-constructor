import SchemasPage from "pages/schemas";
import NewSchemaPage from "pages/schemas/new";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/schemas">
              <SchemasPage />
            </Route>
            <Route exact path="/schemas/new">
              <NewSchemaPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
