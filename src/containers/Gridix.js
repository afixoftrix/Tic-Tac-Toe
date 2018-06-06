import React from "react";
import styled from "styled-components";
import { Sbox } from "../components/Sbox";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.x}, 200px);
  grid-template-columns: repeat(${props => props.y}, 200px);
`;

function raycreator(num) {
  let ray = [];
  for (let i = 0; i < num; i++) {
    ray.push(1);
  }
  return ray;
}

export class Gridix extends React.Component {
  render() {
    const x = this.props.dx;
    const y = this.props.dy;
    const area = x * y;
    const mount = raycreator(area);
    const { userValue, compValue, cTurn, comChoice, humChoice, lines } = this.props;
    return (
      <Container x={x} y={y}>
        {mount.map((ray, index) => {
          if (lines[index] === undefined) {
            lines[index] = [true, true, true, true];
          }
          const id = index + 1
          return (
            <Sbox 
                key={index}
                t={lines[index][0]} rt={lines[index][1]} b={lines[index][2]} l={lines[index][3]}
                id={id.toString()} 
                val={ userValue } 
                cVal={ compValue }
                cTurn={cTurn}
                comChoice={comChoice}
                humChoice={humChoice}
                onClick={this.props.onClick} />
          );
        })}
      </Container>
    );
  }
}