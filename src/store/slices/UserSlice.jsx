import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action) {
            // console.log("hii delete");
            return [];
        }
    },

    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return [];
        })
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
