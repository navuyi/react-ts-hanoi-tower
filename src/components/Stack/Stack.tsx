import "./style.scss"
import useStack from "./useStack";
import Disk from "../Disk/Disk";

type PropsType = {
    initial_stack: number[]
}

const Stack = (props: PropsType) => {
    const {take_disk, put_disk, stack} = useStack(props.initial_stack)

    return(
        <div className="stack">
            {
                stack.map((width: number, index: number) => {
                    return(
                        <Disk key={index} index={index} width={width} stack_height={stack.length}/>
                    )
                }).reverse()
            }
        </div>
    )
}

export default  Stack

