// features/exampleSlice.ts
import { createSlice } from "@reduxjs/toolkit";
interface ExampleState {
    value: number;
    loggedUser: null,

}
const initialState: ExampleState = {
    value: 0,
    loggedUser: null,
};

const Slice: any = createSlice({
    name: "example",
    initialState,
    reducers: {
        addUser: (state, actions) => {
            state.loggedUser = actions?.payload
        },
        removeUser: (state, actions) => {
            state.loggedUser = actions?.payload
        }
    },
});
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
