import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { deleteUsers } from "../store/slices/UserSlice";
import { deleteUsers } from "../store/actions";

const DeleteAllUser = () => {
    const dispatch = useDispatch();

    const clearUsers = () => {
        dispatch(deleteUsers())
    }
    return (
        <Wrapper>
            <button className="btn clear-btn" onClick={clearUsers} >Clear Users</button>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .clear-btn{
        margin-top: 10px;
        text-transform: capitalize;
        background-color: #db338a;
    }
`

export default DeleteAllUser;