import React, { Component } from 'react'
import styled from 'styled-components'
import { Sbox } from './Sbox'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Container = styled.div`
    margin: 100px auto;
    width: 600px;
`

export default class Board extends Component {

    componentDidMount() {
        console.log(this.props.modal)
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.modal)
    }
    
  render() {
      const { userValue, compValue, cTurn, comChoice } = this.props;
    return (
        <div>
            <Container>
            
                <Row>
                    <Sbox 
                        id="1" 
                        t={false} rt={true} b={true} l={false} 
                        val={ userValue } 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick} />

                    <Sbox id="2" 
                        t={false} rt={false} b={true} l={false} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />

                    <Sbox id="3" 
                        t={false} rt={false} b={true} l={true} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />    
                </Row>

                <Row>
                    <Sbox 
                        id="4" 
                        t={false} rt={true} b={true} l={false} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />

                    <Sbox 
                        id="5" 
                        t={false} rt={false} b={true} l={false} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />

                    <Sbox 
                        id="6" 
                        t={false} rt={false} b={true} l={true} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />
                </Row>

                <Row>
                    <Sbox 
                        id="7" 
                        t={false} rt={true} b={false} l={false} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />

                    <Sbox 
                        id="8" 
                        t={false} rt={false} b={false} l={false} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}/>

                    <Sbox id="9" 
                        t={false} rt={false} b={false} l={true} 
                        val={userValue} 
                        cVal={ compValue }
                        cTurn={cTurn}
                        comChoice={comChoice}
                        onClick={this.props.onClick}
                    />
                </Row>
            </Container>
        </div>
      
    )
  }
}
