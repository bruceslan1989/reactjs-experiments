import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './modules/app/components/App';
import Projects from './modules/projects/components/Projects';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './modules/projects/stores/stores';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Projects}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </App>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
