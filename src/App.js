import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routingComponents} from './data/foolData'


import './assets/vendors/fontAwesome/css/font-awesome.min.css'
import './assets/dist/css/plugins.css'
import './assets/dist/css/style.css'
import './assets/dist/css/theme-3.css'
import './assets/vendors/simple-line-icons/css/simple-line-icons.css'
import './assets/dist/css/plugins.css'
import './assets/dist/css/style.css'
import './assets/dist/css/theme-1.css'


class App extends Component {
    render() {
        const {home, login, registration} = routingComponents
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={home.path} component={home.component} exact/>
                    <Route path={login.path} component={login.component}/>
                    <Route path={registration.path} component={registration.component}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;