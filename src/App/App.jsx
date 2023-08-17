import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import MultiComponent from '../routes/MultiComponent/';
import SingleComponent from '../routes/SingleComponent/';
import WithRouter from '../routes/WithRouter/';
import styles from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/multi">Multi Components</Link>
            </li>
            <li>
              <Link to="/single">Single Component</Link>
            </li>
            <li>
              <Link to="/router">With Router</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/multi">
            <MultiComponent />
          </Route>
          <Route path="/single">
            <SingleComponent />
          </Route>
          <Route path="/router/:stepKey?">
            <WithRouter />
          </Route>
          <Route path="*">
            <Redirect to="/multi" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
