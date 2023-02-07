import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {useNavigate} from "react-router-dom"
export default function PersonalInformation() {
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            contact: "", 
            gmail: "",
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
        navigate("/Payment")
    }
    return (
        <div>
            <Header/>
                <h1 className="h1--header">Fill in your personal information</h1>
                <form onSubmit={handleSubmit}>
                    <label for = "name">Name *</label>
                    <input
                        type="text"
                        placeholder="Type your name here"
                        onChange={handleChange}
                        name="name"
                        value={formData.player1}
                        required
                    />
                    <label for = "contact">Contact number *</label>
                    <input
                        type="number"
                        placeholder="type your contact number here"
                        onChange={handleChange}
                        name="contact"
                        value={formData.contact}
                        required
                    />
                    <label for = "gmail">Email *</label>
                    <input
                        type="email"
                        placeholder="type your email here"
                        onChange={handleChange}
                        name="gmail"
                        value={formData.gmail}
                        required
                    />
                    <button className="submit--button">Proceed to payment</button>
            </form>
            <Footer/>
        </div>  
    )
}

