import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const borderColor = "#99E1D9"
const bgColor = "#531253"

const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: ${bgColor};
    border-top: ${ props => props.t ? `10px solid ${borderColor}` : "none"};
    border-right: ${ props => props.rt ? `10px solid ${borderColor}` : "none"};;
    border-bottom: ${ props => props.b ? `10px solid ${borderColor}` : "none"};
    border-left: ${ props => props.l ? `10px solid ${borderColor}` : "none"};
    cursor: ${ props => props.mode ? "default" : "pointer"};
`
const Content = styled.div`
    margin: 0 auto;
    text-align: center;
    font-size: 150px;
    font-weight: 700;
    padding-top: 8px;
    color: ${borderColor};
    line-height: 150px;
`

export class Sbox extends React.Component {

    handleClick = () => {
        const boxId = this.props.id;
        this.props.onClick(boxId);
    }
    
    render() {
        const { t, rt, b, l, val, cVal, cTurn, id, comChoice, humChoice} = this.props
        let hval = cTurn ? val : cVal
        let compPlayed = (comChoice.indexOf(id) !== -1)
        let manPlayed = (humChoice.indexOf(id) !== -1)
        const chosen = comChoice.concat(humChoice)
        let pointing = (chosen.indexOf(id) !== -1)
        
        //if props id == chosen value  innards == == === ===
        return (
            <Box id={this.props.id} 
                t={t} rt={rt} b={b} l={l} 
                onClick={this.handleClick} 
                mode={pointing} >
                {
                    (manPlayed) &&
                    <div>
                        <Content>{hval}</Content>
                    </div>
                }
                {
                    (compPlayed) &&
                    <div>
                        <Content>{cVal}</Content>
                    </div>
                }
            </Box>
        )
    }
}

Sbox.propTypes = {
    cVal: PropTypes.string
}