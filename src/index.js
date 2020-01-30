import 'destyle.css';
import localforage from 'localforage';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';

localforage.config({ name: 'Greevil DB' });

const App = hot(() => <AppRouter />);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
