import React from 'react'
import styled from 'styled-components'

//determine if user is x or o. 
/**
 * start off with a display that asks the user to pick x or o.
 * if the user picks either, the computer is automatically the other.
 * when choice has been made, the board is brought up and the score board is brought up also.
 */

const Btn = styled.div`
    font-size: 180px;
    border: 2px solid #99E1D9;
    color: #99E1D9;
    width: 180px;
    height: 180px;
    cursor: pointer;
    margin: 0 auto;
    line-height: 140px;
`
const Container = styled.div`
    display: ${props => props.viz ? "none" : "block"};
    text-align: center;
    height: 350px;
    width: 500px;
    margin: 0 auto;
    padding-top: 10px;
    border: 2px solid #99E1D9;
    border-radius: 10px;
`

const BtnCase = styled.div`
    display: flex;
    flex-direction: row;
`

export class Play extends React.Component {

    handleClick = e => {
        const choice = e.target.id;
        this.props.onClick(choice);
        console.log(`"I have sent": ${choice}`);
    }

    render() {
        return (
            <Container viz={this.props.viz}>
                <div className="main-header" > User Choice</div>
                <div className="txt-box" >
                    Will you be X or O ? Make your choice and the game will begin!
                </div>
                <BtnCase>
                    <Btn onClick={this.handleClick} value="x" id="x" >x</Btn> 
                    or 
                    <Btn value="o" onClick={this.handleClick} id="o" >o</Btn>
                </BtnCase>
            </Container>
        )
    }
}
