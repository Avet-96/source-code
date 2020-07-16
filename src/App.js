import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/ligin-registration/Login";
import Registration from "./component/ligin-registration/Registration";


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
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/login' component={Login}/>
                    <Route path='/registration' component={Registration}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;