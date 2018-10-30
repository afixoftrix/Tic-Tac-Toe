import React, { Component } from 'react'
import styled from 'styled-components'
import { Row } from '../components/Board'
import Score from '../components/Score'
import { Play } from '../components/UserChoice'
import { initState } from '../data/state'
import { Gridix } from './Gridix';
import { lines } from '../data/lines'

const Board = styled.div`
    margin: 0 auto;
`

const BoardBox = Row.extend`
    display: ${props => props.viz? "flex" : "none"};
    flex-direction: column;
    margin-bottom: 50px;
`
const Msg = styled.div`
    margin: 20px auto;
`

const TitleBlock = styled.div`
    margin-bottom: 20px;
    margin-top: 30px;
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
`

const Useris = styled.div`
    display: ${props => props.viz? "flex" : "none"};
`

const ModalBG = styled.div `
    display: ${props => props.mode ? 'block' : 'none'};
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 100%;
`
const Modal = styled.div `
    border-radius: 15px;
    margin: 25% auto;
    position: relative;
    background-color: rgb(83, 18, 83, 0.8);
    color: #99E1D9 ;
    width: 500px;
    height: 280px;
    border: 2px solid #95b;
    padding-top: 40px;
`
const Btn = styled.div`
    border-radius: 10px;
    cursor: pointer;
    background-color: #99E1D9;
    color: rgb(83, 18, 83);
    padding: 10px;
    font-size: 28px;
    width: 300px;
    margin: 60px auto;
`
//need component that asks user to choose x or o
/**
 * win conditions
 *["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], 
 ["1", "4", "7"], ["2", "5", "8"], ["3", "6, "9"],
 ["1", "5", "9"], ["3", "5", "7"],
 */

export default class Game extends Component {

    state = initState

    winCheck( arr, player ){
        const winTest = this.state.winConditions
        let test = false
        winTest.map((winray, index) => {
            let counter = 0
            for (let i = 0; i < winray.length; i++) {
                if (arr.indexOf(winray[i]) !== -1) {
                    counter++
                }
            }
            if (counter === 3) {
                console.log(player + "wins!")
                test = true
            }      
        })
        if (test === true){
            const {score} = this.state
            const pointAdded = (player === "human") ? 
            {
                human: score.human + 1,
                computer: score.computer
            } : 
            {
                human: score.human,
                computer: score.computer + 1
            }
            this.setState({ 
                score: pointAdded,
                gameover: true,
                winnerIs: player
            })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.turn === "computer"){
            console.log("Memory after human played: " + this.state.memory)
            this.computerPlays();
            this.setState({turn: "human"});
      } else { console.log("Memory after computer played: " + this.state.memory) }
    }
    computerPlays = () =>{
        //TODO: make sure that computer cant pick the same choice twice. If its all out of options then it should print and terminate.
        const ray = this.state.memory
        const {winnerIs} = this.state
        const rng = Math.round(Math.random() * (ray.length - 1))
        const compChoice = ray[rng];
        if ((compChoice !== undefined) && (winnerIs === "")){
            ray.splice(ray.indexOf(compChoice), 1)
            this.state.computerChoices.push(compChoice)
            this.setState({ memory: ray });
            this.winCheck(this.state.computerChoices, "computer")
            console.log("Thse are what the computer chose" + this.state.computerChoices)
        } else {
            console.log("compChoice variable is undefined \n rng: %s , memory: %s, memory length: %s", rng, ray, ray.length)
        }
    }
    handleBoxData = id =>{
        //remove id from array. handleAvailSpots
        const ray = this.state.memory
        if (ray.indexOf(id) === -1){
            console.log("has already been picked")
        } else { 
            ray.splice(ray.indexOf(id), 1) 
            this.state.humanChoices.push(id)
            this.setState({ 
                memory: ray,
                turn: "computer"
            });
        }
        console.log(this.state.humanChoices)
        this.winCheck(this.state.humanChoices, "human")
    }
    handleSboxClick = choice =>{
        //pick who is x and who is o
        console.log(`I have received: ${choice}`)
        if (choice === "x"){
            this.setState({
                users: {
                    human: "x",
                    computer: "o",
                    selectionMade: true
                }
            })
            console.log(this.state.users);
        } 
        else {
            this.setState({
                users: {
                    human: "o",
                    computer: "x",
                    selectionMade: true
                }
            })
        }
        console.log(this.state.users);
    }
    reset = () => {
        this.setState({ 
            memory: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            computerChoices: [],
            humanChoices: [],
            gameover: false,
            winnerIs: ""
         })
        console.log(this.state.computerChoices)
    }
    
    restart = () =>{
        this.setState({
            users: {
                human: '',
                computer: ' ',
                selectionMade: false
            },
            score: {
                human: 0,
                computer: 0
            },
            winnerIs: "",
            gameover: false,
            turn: "human",
            memory: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            computerChoices: [],
            humanChoices: [],
            winConditions: [
                ["1", "2", "3"],
                ["4", "5", "6"],
                ["7", "8", "9"],
                ["1", "4", "7"],
                ["2", "5", "8"],
                ["3", "6", "9"],
                ["1", "5", "9"],
                ["3", "5", "7"]
            ]
        })
    }
    
//TODO: make
    render() {
        const { users, score, turn, computerChoices, humanChoices, gameover, winnerIs} = this.state
        const currentTurn = (turn === "human") ? true : false
        console.log( currentTurn )

        return (
            <Col>
            <ModalBG mode={gameover} >
                <Modal>
                    <div> {winnerIs} has won the game!</div>
                    <Msg> Game has ended !</Msg>
                    <Btn onClick={this.reset} > Play Again </Btn>
                </Modal>
            </ModalBG>
                <TitleBlock>
                    <div className="sub-header" >A</div>
                    <div className="main-header" > 
                        TIC TAC TOE
                    </div>
                    <div className="sub-header" >Game</div>
                </TitleBlock>

                <div className="txt-box" >
                    "Tic - tac - toe is a paper - and - pencil game
                    for two players, X and O, who take turns marking the spaces in a 3× 3 grid.
                    The player who succeeds in placing three of their marks in a horizontal,
                    vertical, or diagonal row wins the game."
                    - Wikipedia
                </div>
        
                <Play onClick={this.handleSboxClick} viz={users.selectionMade}/>
                <BoardBox viz={users.selectionMade}>
                    <Score 
                        roles={users}
                        score={score}
                        />
                    <Board>
                        <Gridix
                        dx={3} dy={3} lines={lines}
                        userValue={users.human} 
                        compValue={users.computer} 
                        onClick={this.handleBoxData} 
                        cTurn={ currentTurn }
                        comChoice={computerChoices}
                        humChoice={humanChoices}
                        /> 

                        <Btn onClick={this.restart} > Reset </Btn>
                    </Board>
                </BoardBox>
            </Col>
        )
    }
}
