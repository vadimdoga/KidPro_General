import { Switch, Route } from "react-router-dom"
import SignIn from "./components/auth/SignIn"
import Register from "./components/auth/Register"
import MainPages from "./components/MainPages"
import PublicEnroll from "./components/Logged/PublicEnroll"
import PrivateEnroll from "./components/Logged/PrivateEnroll"
import Subscription from "./components/Logged/Subscription"
import CourseAction from "./components/CourseAction/CourseAction"
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={MainPages} />
                <Route exact path="/courses/enroll/public" component={PublicEnroll} />
                <Route exact path="/courses/enroll/private" component={PrivateEnroll} />
                <Route exact path="/courses/solve/:id" component={CourseAction} />
                <Route exact path="/subscription" component={Subscription} />
                <Route exact path="/auth/login" component={SignIn} />
                <Route exact path="/auth/register" component={Register} />
            </Switch>
        </div>
    );
}

export default App;
