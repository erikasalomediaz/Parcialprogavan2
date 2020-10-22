import React from 'react'


export default function InfoMoves(props) {
    const info = props.props;
    console.log(info)
    return (
        <div>
            <h3>Moves: </h3>
            {info?.moves?.map(move => {
                return <div key={move.name}>{move.move.name}
                </div>

            })}
        </div>
    )



}

