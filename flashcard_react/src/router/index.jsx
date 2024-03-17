import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "../page/Not-found.jsx"
import App from "../App.jsx"
import Home from "../page/Home.jsx"
import Deck from "../page/Deck.jsx"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "decks", 
                element: <Deck/>
            
            }
        ]
    },
])

export default router