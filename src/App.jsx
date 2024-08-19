import './styles/App.css'
//import commingSoon from './asserts/Animated Rotating Coming Soon.gif'

import Card from './components/Card';
import TodoList from './components/TodoList';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">

      <Modal />

      {/* <img 
        src={commingSoon} 
        style={ {width: '400px', height:'400px', position:'absolute', right: '25px', bottom: '25px'} } 
      /> */}

      <main>

        <Card showTitle={false} >

          <TodoList />

        </Card>

      </main>

    </div>
  );
}

export default App;
