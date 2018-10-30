import React, { Component } from 'react'
import styled from 'styled-components'

const C = styled.div`
    padding: 20px;
    border-radius: 15px;
    border: 2px solid #99E1D9;
    width: 360px;
    margin: 20px auto;
    font-size: 22px;
`

export default class Scores extends Component {
    render() {
        const {roles, score} = this.props
        return (
            <C>
                Human({roles.human}): {score.human}<br />
                Computer({roles.computer}): {score.computer}
            </C>
        )
    }
}
