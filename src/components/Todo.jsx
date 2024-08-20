import { useEffect, useRef, useState } from 'react';
import '../styles/Todo.css'
import { AiFillCalendar, AiFillCheckSquare, AiFillDelete, AiOutlineBorder, AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';


const Todo = (props) => {

    //Atributos
    const { title, id, done, date  } = props
    const dateRef = useRef(null);

    //States
    const [isDone, setIsDone] = useState( done );
    const [targetDate, setTargetDate] = useState( date );
    const [isDestroy, setIsDestroy] = useState( false );
    const [todoClasses, setTodoClasses] = useState( ['entered'] )

    //Métodos
    function onDestroy() {
      setIsDestroy(true)
      setTimeout(() => {
        props.onDeleteTodo(id)
      }, 250);
    }

    function updateDate(time) {
      const [year, month, day] = time.split('-');
      const newDate = new Date( `${year}-${month}-${day}T12:01:00` )
      setTargetDate( newDate )
      props.onUpdateTodo( {title, id, done: isDone, date: newDate} )
    }

    function updateIsDone(_done) {

      setTimeout(() => {
        setTodoClasses( ['entered'] )  
      }, 100);

      setTimeout(() => {
        setTodoClasses( [] )
        props.onUpdateTodo( {title, id, done: isDone, date: targetDate} )
      }, 400);

      setIsDone(_done)
    }

    function getClassesTodo() {
      return 'Todo'.concat( 
          `${ isDone ? ' done' : '' }`,
          `${ isDestroy ? ' destroy' : '' }`,
          ' ' + todoClasses.join(' ')
        )
    }

    // Effect
    useEffect( () => {
      setTodoClasses( [] )
        console.log("Effect");
        
    }, [setTodoClasses] )

    //Render
    return (
        <div className={ getClassesTodo() } >

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
                      style={ {width: '0px', opacity: 0, position: 'relative', left: '-20px'} } 
                      type='date'
                    />

                    <span>{ targetDate.toLocaleDateString() }</span>
                </div>
            </div>
            
            { isDone 

             ?  <div className='buttonsContainer' >
                    <AiFillCheckSquare className='icon icon-check' color='black' size={25} 
                      onClick={ () => { updateIsDone( !isDone ) } }
                    />

                    <AiFillDelete className='icon icon-delete' color='black' size={25} 
                      onClick={ onDestroy }
                    />
                </div>

             :  <div className='buttonsContainer' >
                    <AiOutlineBorder className='icon icon-check' color='white' size={25} 
                      onClick={ () => { updateIsDone( !isDone ) } }
                    />

                    <AiOutlineDelete className='icon icon-delete' color='white' size={25} 
                      onClick={ onDestroy }
                    />
                </div>
            }
            

        </div>
    )
}

export default Todo;