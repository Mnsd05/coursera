import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {useNavigate} from "react-router-dom"
export default function Payment() {
    
    const [formData, setFormData] = React.useState(
        {
            cardNumber: "", 
            expiryDate: "", 
            cvv: "",
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
        navigate("/")
    }
    return (
        <div>
            <Header/>
                <h1 className="h1--header">Payment</h1>
                <form onSubmit={handleSubmit}>
                    <label for = "cardNumber">Card number *</label>
                    <input
                        type="number"
                        placeholder="Type your card number here"
                        onChange={handleChange}
                        name="cardNumber"
                        value={formData.cardNumber}
                        required
                    />
                    <label for = "expiryDate">Expiry date *</label>
                    <input
                        type="number"
                        placeholder="type your expiry date here"
                        onChange={handleChange}
                        name="expiryDate"
                        value={formData.expiryDate}
                        required
                    />
                    <label for = "number">cvv *</label>
                    <input
                        type="number"
                        placeholder="type your cvv here"
                        onChange={handleChange}
                        name="cvv"
                        value={formData.cvv}
                        required
                    />
                    <button className="submit--button">Finish payment</button>
            </form>
            <Footer/>
        </div>  
    )
}

