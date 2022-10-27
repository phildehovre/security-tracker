import TickerList from './components/TickerList'
import SearchBar from './components/SearchBar'
import './App.css';
import { SecuritiesProvider } from './Contexts/SecuritiesContext';
import AuthProvider from './Contexts/AuthContext';
import Login from './components/Login';


function App() {

  const userLoggedIn = localStorage.getItem('isAuth')

  console.log('Logged in:', userLoggedIn)

  return (
    <div className="App">
      <header className="App-header">
      </header>

      {
        userLoggedIn ? (
          <AuthProvider>
            <SecuritiesProvider>
              <SearchBar />
              <TickerList />
            </SecuritiesProvider>
          </AuthProvider>
        ) :
          <Login />
      }

    </div>
  );
}

export default App;
