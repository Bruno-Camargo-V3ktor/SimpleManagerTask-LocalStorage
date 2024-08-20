import './styles/App.css'


import Card from './components/Card';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

      <main>

        <Card showTitle={false} >
          <TodoList />
        </Card>

      </main>

    </div>
  );
}

export default App;
