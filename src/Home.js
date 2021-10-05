import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import injectContext from './store/appContext';
import Characters from './views/Characters';
import Planets from './views/Planets';
import StarShips from './views/StarShips';
import NotFound from './views/NotFound';

const Home = () => {

    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/starships" component={StarShips} />
                <Route exact path="/planets" component={Planets} />
                <Route exact path="/" component={Characters} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Home);
