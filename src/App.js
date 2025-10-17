import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import { WannaStudy, NoMatch } from "./components";
import { useNoScale } from "./hooks";

const App = () => {
    useNoScale();
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={WannaStudy} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;
