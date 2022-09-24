import React from "react";
import "./style.scss"

type PropsType = {
    width: number,
    index: number,
    stack_height: number
}

const Disk = (props: PropsType) => {

    const style: React.CSSProperties = {
        width: props.width * 50 + "px"
    }

    const class_list = `
        ${props.index === props.stack_height-1 ? "enabled" : "disabled"}
    `

    return(
        <div className={class_list+"disk"} style={style}>

        </div>
    )
}



export default Disk