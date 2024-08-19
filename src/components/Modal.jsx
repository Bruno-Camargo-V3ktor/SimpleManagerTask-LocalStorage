import '../styles/Modal.css'

const Modal = (props) => {

    //Atributos
    const {  } = props

    // Render
    return (
        <div className="ModalContainer" onClick={ (event) => {console.log('Teste')} }>
            
            <div className='BodyContainer' onClick={ (event) => {event.stopPropagation(); console.log(event)} }>
                <div className='TitileContainer'>
                    <h2>Desejar realmente deleta esta tarefa?</h2>
                </div>

                <div className='ActionsContainer'>
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </div>

        </div>
    )

}


export default Modal;