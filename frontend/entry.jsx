import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    debugger 
    const root = document.getElementById('root');
    debugger 
    const store = configureStore();

    debugger 
    ReactDOM.render(<Root store={store}/>, root);
});