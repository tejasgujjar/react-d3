import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import Thunk from 'redux-thunk';

// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

import reducers from './reducers';



// const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(reducers,
  applyMiddleware(middleware, Thunk)
)

const routes = makeMainRoutes(history, store);

ReactDOM.render(
    routes,
  document.getElementById('root')
);
