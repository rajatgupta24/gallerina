import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./Router/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <ProtectedRoute exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
