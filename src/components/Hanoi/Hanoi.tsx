import React from "react";
import {Container} from "react-bootstrap";
import Stack from "../Stack/Stack";
import "./style.scss"
import {useState} from "react";



const initialState: number[][] = [
    [4,3,2,1],
    [],
    [],
]

const Hanoi = () => {

    const [game_state, set_game_state] = useState()

    return(
        <Container className={"hanoi-container"}>
            <div className={"hanoi-row"}>
                <Stack initial_stack={[5,4,3,2,1]}/>
                <Stack initial_stack={[]}/>
                <Stack initial_stack={[]}/>
            </div>
        </Container>
    )
}



export default Hanoi

