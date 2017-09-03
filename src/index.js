import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import projectStore from './stores/projectStore'

ReactDOM.render(
    <Provider store={projectStore}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();