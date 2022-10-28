import TickerList from './components/TickerList'
import SearchBar from './components/SearchBar'
import './App.css';
import { SecuritiesProvider } from './Contexts/SecuritiesContext';
import AuthProvider from './Contexts/AuthContext';
import { useAuth } from './Contexts/AuthContext';
import LoginPage from './Pages/loginPage';
import Nav from './components/Nav';
import { auth } from './Util/firebase'


function App() {

  const { currentUser } = useAuth()

  return (
    <AuthProvider>
      <SecuritiesProvider>
        <div className="App">
          <header className="App-header">
          </header>

          {
            currentUser ? (
              <>
                <Nav />
                <SearchBar />
                <TickerList />
              </>
            ) :
              <LoginPage />
          }

        </div>
      </SecuritiesProvider>
    </AuthProvider>
  );
}

export default App;
