import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import PoliticiansData from '../politicians.json'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdatePolitician extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/politicians/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Modificar político</Update>
    }
}

class DeletePolitician extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the politician ${this.props.id} permanently?`,
            )
        ) {
            api.deletePoliticianById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Borrar político</Delete>
    }
}

class PoliticiansList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            politicians: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPoliticians().then(politicians => {
            this.setState({
                politicians: politicians.data.data && PoliticiansData,
                isLoading: false,
            })
        })
    }

    render() {
        const { politicians, isLoading } = this.state
        console.log('TCL: PoliticiansList -> render -> politicians', politicians)

        const columns = [
            {
                Header: 'Nombre y apellidos',
                accessor: 'nombre',
                filterable: true,
            },
            {
                Header: 'Salario Anual',
                accessor: 'salarioAnual',
                filterable: true,
            },
            {
                Header: 'Partido',
                accessor: 'partido',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeletePolitician id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdatePolitician id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!politicians.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={politicians}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={50}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default PoliticiansList