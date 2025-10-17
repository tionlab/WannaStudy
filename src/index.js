import ReactDOM from "react-dom";

import "./index.css";
import "./assets/clear.css";
import "./assets/font.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot && !window.frameElement) {
    console.log("HMR enabled");
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(<NextApp />, document.getElementById("root"));
    });
}
