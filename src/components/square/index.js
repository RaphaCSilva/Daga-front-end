import React from "react";

export default function Square(props){

    return(
        <div
            style={{
                width: '34px',
                height: '34px',
                backgroundColor: 'green',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: "12px",
                border: '1px black solid'
            }}
        >   
            {props.X}, {props.Y}
        </div>
    )
}