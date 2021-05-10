import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <h1>React is Working!</h1>
        <App />
    </Provider>
);

export default Root;
