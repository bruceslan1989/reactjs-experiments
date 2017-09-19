import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './modules/app/components/App';
import Projects from './modules/projects/components/Projects';
import About from './components/About';
import Container from './components/Container';
import Error404 from './components/Error404';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './modules/projects/stores/stores';
import RouteWithLayout from './components/RouteWithLayout';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <RouteWithLayout layout={App} exact path="/" component={Projects}/>
                <RouteWithLayout layout={App} exact path="/about" component={About}/>
                <RouteWithLayout layout={Container} exact path="/container/projects" component={Projects}/>
                <RouteWithLayout layout={Container} exact path="/container/about" component={About}/>
                <Route component={Error404}/>
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
