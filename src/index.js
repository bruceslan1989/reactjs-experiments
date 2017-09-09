import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app/components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './modules/projects/stores/stores';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
