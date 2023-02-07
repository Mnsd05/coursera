import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import PersonalInformation from "./PersonalInformation"
import ReservePage from "./ReservePage"
import Payment from "./Payment"
export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path = "/" element = {<Home/>} />
                    <Route path = "/ReservePage" element = {<ReservePage/>} />
                    <Route path = "/PersonalInformation" element = {<PersonalInformation/>} />
                    <Route path = "/Payment" element = {<Payment/>} />
                </Routes>
            </Router> 
        </div>  
    )
}

