import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {useNavigate} from "react-router-dom"
export default function ReservePage() {
    const [formData, setFormData] = React.useState(
        {
            pax: "", 
            time: "", 
            date: "",
        }
    )
    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }
    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault()
        navigate("/PersonalInformation")
    }
    return (
        <div>
            <Header/>
                <h1 className="h1--header">Reserve Table</h1>
                <form onSubmit={handleSubmit}>
                    <label for = "pax">Pax *</label>
                    <input
                        type="number"
                        placeholder="Type pax here"
                        onChange={handleChange}
                        name="pax"
                        value={formData.pax}
                        required
                    />
                    <label for = "time">Time *</label>
                    <input
                        type="text"
                        placeholder="type the time you prefer"
                        onChange={handleChange}
                        name="time"
                        value={formData.time}
                        required
                    />
                    <label for = "date">Date *</label>
                    <input
                        type="text"
                        placeholder="type the date you prefer"
                        onChange={handleChange}
                        name="date"
                        value={formData.date}
                        required
                    />
                    <button className="submit--button">Proceed</button>
            </form>
            <Footer/>
        </div>  
    )
}

