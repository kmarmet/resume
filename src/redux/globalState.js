import {createSlice} from "@reduxjs/toolkit"

const initialState = {activeSection: null, blur: false}

const globalState = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        setActiveSection: (state, action) => {
            state.activeSection = action.payload
        },
        setBlur: (state, action) => {
            state.blur = action.payload
        },
    },
})

export const {setActiveSection, setBlur} = globalState.actions
export default globalState.reducer
