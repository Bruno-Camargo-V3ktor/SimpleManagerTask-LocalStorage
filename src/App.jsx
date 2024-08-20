import './styles/App.css'

import StorageProvider from './contexts/StorageContext';
import Card from './components/Card';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

      <main>

        <Card>

          <StorageProvider>
            <TodoList />
          </StorageProvider>
          
        </Card>

      </main>

    </div>
  );
}

export default App;
