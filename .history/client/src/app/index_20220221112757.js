import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PoliticiansList, PoliticiansInsert, PoliticiansUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={PoliticiansList} />
                <Route path="/politicians/create" exact component={PoliticiansInsert} />
                <Route
                    path="/politicians/update/:id"
                    exact
                    component={PoliticiansUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App