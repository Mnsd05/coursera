import React from "react";
import {useNavigate} from "react-router-dom"

export default function Main () {
    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault()
        navigate("/ReservePage")
    }
    return (
        <main>
            <div id="discount">
                <img src="./images/sale-discount.jpg" id="discount--img" alt=""></img>
                <h2 id="discount--number">30% discount</h2>
            </div>
            <button className="reserve--button" onClick={handleSubmit}>Reserve a table now</button>
            <div id="card--container">
                <div class="card">
                    <h5>Our menu</h5>
                    <img src="./images/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg" height="225px" class="card--img"></img>
                    <p>This is the list of foods that we are offering. Hope you have the best experience with our fresh delicious foods</p>
                    <ol>
                        <li><b>Beef Burger(Must try)</b></li>
                        <li>Chicken&amp;Fish Burger</li>
                        <li>Snacks</li>
                        <li>Drinks</li>
                    </ol>
                </div>
                <div class="card">
                    <h5>Operating hours</h5>
                    <img src="./images/about-opening-hours-sidebar.png" height="225px" class="card--img"></img>
                    <p>Please refer to our working schedule as below</p>
                    <ul>
                        <li>Monday to Friday(9am to 10pm)</li>
                        <li>Saturday to Sunday(9am to 5pm)</li>
                    </ul>
                    <p>Closed on public holidays</p>
                </div>
                <div class="card">
                    <h5>Vouchers</h5>
                    <img src="./images/190414_Corona-Voucher_Artenauta.png" height="225px" class="card--img"></img>
                    <p>Let come to our restaurant to collect the best vouchers. These are all the vouchers we are giving</p>
                    <ul>
                        <li>Get 5$ discount for every 30$ spending</li>
                        <li>Get a 10% discount when you own membership card</li>
                        <li>Buy our membership card to enjoy some worthy priviledges and get a beef burger</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}