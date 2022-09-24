import {useState} from "react";


type StackType = number[]
type DiskWidthType = number

const useStack = (initial_stack: StackType) => {
    const [stack, set_stack] = useState(initial_stack)

    const take_disk = (): DiskWidthType => {
        const disk_width: DiskWidthType = stack[stack.length-1]
        set_stack(stack.splice(-1))
        return disk_width
    }

    const put_disk = (disk_width: DiskWidthType) : void => {
        set_stack([...stack, disk_width])
    }

    return{
        take_disk,
        put_disk,
        stack
    }
}

export default useStack