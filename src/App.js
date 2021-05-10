import { Switch, Route } from "react-router-dom"
import SignIn from "./components/auth/SignIn"
import Register from "./components/auth/Register"
import Homepage from "./components/NotLogged/Homepage"
import Courses from "./components/NotLogged/Courses"
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/courses/:grade_id" component={Courses} />
                <Route exact path="/auth/login" component={SignIn} />
                <Route exact path="/auth/register" component={Register} />
            </Switch>
        </div>
    );
}

export default App;
