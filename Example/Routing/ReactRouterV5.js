// This is a React Router v5 app
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
