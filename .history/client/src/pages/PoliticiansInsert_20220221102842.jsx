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

class PoliticiansInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        const { nombre, partido, salarioAnual} = this.state
        const payload = { nombre, partido, salarioAnual }

        await api.insertPolitician(payload).then(res => {
            window.alert(`Politician inserted successfully`)
            this.setState({
                nombre: '',
                salarioAnual: '',
                partido: '',
            })
        })
    }

    render() {
        const { nombre, partido, salarioAnual } = this.state
        return (
            <Wrapper>
                <Title>Crear Politician</Title>

                <Label>Nombre y apellidos: </Label>
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

export default PoliticiansInsert