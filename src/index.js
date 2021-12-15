import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ContextProvider } from "./Context"
import App from "./App"

import "./styles.css"

render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>,
    document.getElementById("root")
)
