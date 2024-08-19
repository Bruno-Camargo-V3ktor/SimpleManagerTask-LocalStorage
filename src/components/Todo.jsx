import { useRef, useState } from 'react';
import '../styles/Todo.css'
import { AiFillCalendar, AiFillCheckSquare, AiFillDelete, AiOutlineBorder, AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';


const Todo = (props) => {

    //Atributos
    const { title, id } = props
    const dateRef = useRef(null);

    //States
    const [isDone, setIsDone] = useState(false);
    const [date, setDate] = useState( new Date() );

    //Métodos
    function updateDate(time) {
        const [year, month, day] = time.split('-');
        setDate( new Date( `${year}-${month}-${ Number.parseInt(day) + 1}` ) )
    }

    //Render
    return (
        <div className={ isDone ? 'Todo done' : 'Todo'  } >

            <div className='titleContainer '>
                <h2>{title}</h2>

                <div className='calendarContainer'>
                    

                    { isDone 

                    ?  <AiFillCalendar 
                            size={25} 
                            color='black' 
                            className='icon icon-calendar'
                            onClick={ () => { dateRef.current.focus(); dateRef.current.showPicker(); } }
                        /> 

                    :  <AiOutlineCalendar 
                            size={25} 
                            color='white' 
                            className='icon icon-calendar'
                            onClick={ () => { dateRef.current.focus(); dateRef.current.showPicker(); } }
                        /> 
                    }

                    <input 
                    onChange={ (event) => updateDate( event.currentTarget.value ) }
                      ref={dateRef} 
                      style={ {width: '0px', opacity: 0, position: 'absolute'} } 
                      type='date'
                    />
                    <span>{ date.toLocaleDateString() }</span>
                </div>
            </div>
            
            { isDone 

             ?  <div className='buttonsContainer' >
                    <AiFillCheckSquare className='icon icon-check' color='black' size={25} 
                      onClick={ () => { setIsDone( !isDone ) } }
                    />

                    <AiFillDelete className='icon icon-delete' color='black' size={25} 
                      onClick={ () => { props.onDeleteTodo(id) } }
                    />
                </div>

             :  <div className='buttonsContainer' >
                    <AiOutlineBorder className='icon icon-check' color='white' size={25} 
                      onClick={ () => { setIsDone( !isDone ) } }
                    />

                    <AiOutlineDelete className='icon icon-delete' color='white' size={25} 
                      onClick={ () => { props.onDeleteTodo(id) } }
                    />
                </div>
            }
            

        </div>
    )
}

export default Todo;