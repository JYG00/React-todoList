import styled,{css} from "styled-components"
import {MdDone, MdDelete} from 'react-icons/md';
import { useRef } from "react";
import { useTodoDispatch } from "../todoContext";


const TodoItemBlock = styled.div`
    display:flex;
    align-items: center;
    padding-top:12px;
    padding-bottom:12px;
`;

const CheckCircle = styled.div`
    width:32px;
    height:32px;
    border-radius:16px;
    border:1px solid #ced4da;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
    ${props=>props.done && css`border:1px solid #38d9a9;`}
`;

const Text = styled.div`
    flex:1;
    font-size:21px;
    color:#495057;
    ${props=>props.done && css`color:#999;`}
`;

const Remove = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size:24px;
    cursor:pointer;
    opacity:0;
    &:hover{
        color:red;
    }
`;

export default function TodoItem({id,text,done}){
    const icon = useRef();
    const container = useRef();

    const dispatch = useTodoDispatch();

    // 동그라미를 클릭했을때
    const onToggle = () => {
        dispatch({type: 'TOGGLE', id});
    }

    // 삭제 아이콘을 클릭했을때
    const onRemove = () => {
        dispatch({type: 'REMOVE', id});
    }

    const onMouseEnter = () => {
        icon.current.style = "opacity:1";
    }

    const onMouseLeave = () => {
        icon.current.style = "opacity:0";
    }

    return(
        <TodoItemBlock ref={container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove ref={icon} onClick={onRemove}><MdDelete/></Remove>
        </TodoItemBlock>
    );
}