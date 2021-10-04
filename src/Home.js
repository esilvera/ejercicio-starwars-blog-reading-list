import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import injectContext from './store/appContext';
import Characters from './views/Characters';
import Planets from './views/Planets';
import Ships from './views/Ships';
import NotFound from './views/NotFound';

const Home = () => {

    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/ships" component={Ships} />
                <Route exact path="/planets" component={Planets} />
                <Route exact path="/" component={Characters} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Home);
