import TickerList from './components/TickerList'
import SearchBar from './components/SearchBar'
import './App.css';
import { SecuritiesProvider } from './Contexts/SecuritiesContext';
import AuthProvider from './Contexts/AuthContext';
import LoginPage from './Pages/loginPage';
import Nav from './components/Nav';
import { auth } from './Util/firebase'


function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>

      {
        auth.currentUser ? (
          <AuthProvider>
            <SecuritiesProvider>
              <Nav />
              <SearchBar />
              <TickerList />
            </SecuritiesProvider>
          </AuthProvider>
        ) :
          <LoginPage />
      }

    </div>
  );
}

export default App;
