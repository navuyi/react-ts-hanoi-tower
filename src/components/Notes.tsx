import {useReducer, useState, ChangeEvent} from "react";


type Note = {
    id: number
    note: string
}
type Action = {
    type: string
    payload: any
}
type ActionTypes = {
    ADD: string
    UPDATE: string
    DELETE: string
}

const actionType: ActionTypes = {
    ADD: "ADD",
    UPDATE: "UPDATE",
    DELETE: "DELETE"
}

const initialNotes: Note[] = [
    {
        id: 1,
        note: "Note number 1"
    },
    {
        id: 2,
        note: "Note number 2"
    },
    {
        id: 3,
        note: "Note number 3"
    }
]


const reducer = (state: Note[], action: Action) => {
    switch(action.type){
        case actionType.ADD:
            return [...state, action.payload]
        case actionType.DELETE:
            return state.filter(note => note.id !== action.payload)
        case actionType.UPDATE:
            return state.map((n: Note) => n.id === action.payload.id ? action.payload : n)
        default:
            return state
    }
}





const Notes = () => {
    const [notes, dispatch] = useReducer(reducer, initialNotes)
    const [note, setNote] = useState('')


    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const newNote = {
            id: Date.now(),
            note: note
        }

        dispatch({type: actionType.ADD, payload: newNote})
    }

    return(
        <>
            <h2>Notes</h2>
            <ul>
                {
                    notes.map((n: Note) => {
                        return(
                            <li key={n.id}>
                                {n.note} {''}
                                <button onClick={() => {
                                    dispatch({
                                        type: actionType.DELETE,
                                        payload: n.id
                                    })
                                }}>
                                    X
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default Notes