import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PoliticiansUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nombre: '',
            salarioAnual: '',
            partido: '',
        }
    }
    handleChangeInputNombre = async event => {
        const nombre = event.target.value
        this.setState({ nombre })
    }

    handleChangeInputSalarioAnual = async event => {
        const salarioAnual = event.target.validity.valid
            ? event.target.value
            : this.state.salarioAnual

        this.setState({ salarioAnual })
    }

    handleChangeInputPartido = async event => {
        const partido = event.target.value
        this.setState({ partido })
    }

    handleIncludePolitician = async () => {
        const { id, nombre, partido, salarioAnual } = this.state
        const payload = { nombre, partido, salarioAnual}

        await api.insertPolitician(id, payload).then(res => {
            window.alert(`Politician inserted successfully`)
            this.setState({
                nombre: '',
                salarioAnual: '',
                partido: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const politician = await api.getPoliticianById(id)

        this.setState({
            nombre: politician.data.data.nombre,
            salarioAnual: politician.data.data.salarioAnual,
            partido: politician.data.data.partido,
        })
    }

    render() {
        const { nombre, partido, salarioAnual  } = this.state
        return (
            <Wrapper>
                <Title>Modificar Político</Title>

                <Label>Nombre: </Label>
                <InputText
                    type="text"
                    value={nombre}
                    onChange={this.handleChangeInputNombre}
                />

                <Label>Salario anual: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={salarioAnual}
                    onChange={this.handleChangeInputSalarioAnual}
                />

                <Label>Partido político: </Label>
                <InputText
                    type="text"
                    value={partido}
                    onChange={this.handleChangeInputPartido}
                />

                <Button onClick={this.handleIncludePolitician}>Añade un Político</Button>
                <CancelButton href={'/politicians/list'}>Cancelar</CancelButton>
            </Wrapper>
        )
    }
}

export default PoliticiansUpdate