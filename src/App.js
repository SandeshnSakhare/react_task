import './App.css';
import AppRouter from './AppRouter/AppRouter.js';
import { HashRouter as Router } from 'react-router-dom';
import UserStateContextProvider from './ContextApi/UserStateContext';

function App() {
  return (
    <div className="App">
      <UserStateContextProvider>
        <Router>
          <AppRouter />
        </Router>
      </UserStateContextProvider>
    </div>
  );
}

export default App;
