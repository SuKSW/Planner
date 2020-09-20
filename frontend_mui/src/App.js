import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SideNavbar from './components/common/sideNavbar'
import Today from './components/pages/today'
import ThisMonth from './components/pages/thisMonth'
import Todos from './components/pages/todos'
import Appointments from './components/pages/appointments'
import Notes from './components/pages/notes'
import './App.css';

function App() {
    return (
        <div className="App">
            <SideNavbar>
                <Switch>
                    <Route path="/" component={Today} exact/>
                    <Route path="/this-month" component={ThisMonth} />
                    <Route path="/todos" component={Todos} />
                    <Route path="/appointments" component={Appointments} />
                    <Route path="/notes" component={Notes} />
                </Switch>
            </SideNavbar>
        </div>
    );
}

export default App;
