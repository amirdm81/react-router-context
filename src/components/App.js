import React, { Suspense, lazy } from "react";
import UserProvider from "./UserProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "reactstrap";

const Header = lazy(() => import("./Header"));
const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<Spinner type="grow" color="primary" />}>
          <Header />
        </Suspense>
        <Switch>
          <div className="container">
            <Suspense fallback={<Spinner type="grow" color="primary" />}>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route path="/about" render={() => <h1>About</h1>} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Suspense>
          </div>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
