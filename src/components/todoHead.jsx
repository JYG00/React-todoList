import styled from 'styled-components';
import { useTodoState } from '../todoContext';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin:0;
        font-size:36px;
        color:#343a40;
    }
    .day{
        margin-top:4px;
        color:#868e96;
        font-size:21px;
    }
    .tasks-left{
        color:#20c997;
        font-size:18px;
        margin-top:40px;
        font-weight:bold;
    }
`;

export default function ToDoHead(){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo=>!todo.done);
    // 조건식이 참인값이 저장되는 공간 const undoneTasks = filter(조건식)


    // 오늘 날짜를 가져오기
    const dateString = new Date().toLocaleDateString('ko-KR',{
        year:'numeric',
        month:'long',
        day:'numeric'
    });
    const dayName = new Date().toLocaleDateString('ko-KR',{
        weekday:'long'
    });

    return(
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className='day'>
                {dayName}
            </div>
            <div className='tasks-left'>
                오늘 할일들 {undoneTasks.length}개 남음
            </div>
        </TodoHeadBlock>
    );
}
