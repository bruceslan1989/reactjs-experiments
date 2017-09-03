import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import projectStore from './stores/projectStore'

ReactDOM.render(
    <Provider store={projectStore}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();