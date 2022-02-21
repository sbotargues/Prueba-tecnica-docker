import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Prueba Newtral Sergi Botargues
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/politicians/list" className="nav-link">
                                Lista de poli
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/politicians/create" className="nav-link">
                                Create Politician
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links