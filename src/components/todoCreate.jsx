import styled,{css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { useState } from 'react';
import {useTodoNextId} from "../todoContext";

const CircleButton = styled.button`
    background-color: #38d9a9;
    &:hover{
        background-color:#63e6be;
    }
    &:active{
        background-color:#20c997;
    }
    cursor:pointer;
    width:80px;
    height:80px;

    display:flex;
    justify-content:center;
    align-items:center;
    font-size:60px;
    
    position:absolute;
    left:50%;
    bottom:0px;
    z-index:5;
    transform:translate(-50%,50%);
    color:white;
    border-radius:50%;
    border:none;
    transition: 0.2s all ease-in;
    ${props=>props.open&&css`
    &:hover{
        background:#ff8787;
    }
    &:active{
        background:#fa5252;
    }
    background:#ff8787;
    transform:translate(-50%,50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width:100%;
    position: absolute;
    bottom:0;
    left:0;
`;

const InsertForm = styled.form`
    background:#f8f9fa;
    padding: 32px 32px 72px 32px;

    border-bottom-left-radius:16px;
    border-bottom-right-radius:16px;
    border-top:1px solid #e9ecef;
`;

const Input = styled.input`
    width:100%;
    outline:none;
    font-size:18px;
    box-sizing:border-box;
    padding:12px;
    border-radius:4px;
    border:1px solid #dee2e6;
`;

// 각각의 컴포넌트가 연결하는 함수들
export default function TodoCreate(){
    const [open, setOpen] = useState(false);    
    const [value, setValue] = useState('');

    const nextId = useTodoNextId();

    const onToggle = () => {
        setOpen(!open);       
    }

    const onChange = (e) => {        
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault(); // 서버로 데이터를 전송하는 기능을 막음 (새로고침 X)
        dispatchEvent({
            type:'CREATE',
            todo:{
                id:nextId.current,
                text:value,
                done:false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current +=1;
    }

    return(
        <div>
            {open && (
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    <Input type="text" placeholder='할 일을 입력 후, Enter를 누르세요' onChange={onChange} value={value}/>
                </InsertForm>
            </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </div>
    );
}