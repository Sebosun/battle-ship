import React from 'react';
import "./DrawBoard.css"

export default function DrawBoard(props){

    const board = props.board;
    const generateBoard = board.map((element, mainIndex) => {
        return (
            <div key={mainIndex} class="row">
                {element.map((elem, index) => {
                    return(<div key={index} class="field"> {mainIndex} {index}</div>)
                })}
            </div>
        )
    });

    return(
        <div className="board">
            {generateBoard}
        </div>
    )
}