import React from 'react'
import "./Checkout.scss"
import Navbar from '../../Components/Navbar';
import { loadStripe } from '@stripe/stripe-js';

const Checkout = () => {

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51NQ5UrSIT3ox0SMj0sa0QZfWEIbFTdsGEpoTFawZy3fRwBbrn1JNZYMaHSH6vwDJqZaYafPzBC2n52lNxj12BgTH00hfgZcLFm");
        const body = {
            id: 2,
            plan: "basic",
            price: "33"
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:3001/v1/api/payment/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });
        console.log(response)
        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error);
        }
    }

    return (
        <div className='main_container 
'><Navbar />

            <div className="center-wrapper">
                <div className="content">

                    <div className="top-bar">
                        <i className="fas fa-arrow-left"></i>
                        <span>Continue Purching</span>
                    </div>
                    <div className="bag">
                        <p className="bag-head"><span style={{ textTransform: "uppercase" }}>Your Bag</span> - 1 item</p>
                    </div>
                    <div className="bag-product">
                        <div className="image">
                            <img src="https://www.elenanelmes.com/images/test/ui/suunto_d4i_novo_sun_front_dive_metric.png" className="product-image" />
                        </div>
                        <div className="description">
                            <p className="product-code small muted">Plan Code: 002</p>
                            <h1>Basic Plan</h1>
                            <p>For students between 0-300 : Price for each paper Rs.35</p>
                            <p className="description-text">Validity 1 Academic Year.</p>
                            <p style={{ marginBottom: "0.5rem" }}>One Paper</p>
                            <h2>Rs 35.00</h2>
                          
                        </div>
                    </div>
                    <div className="bag-total">
                        <div className="subtotal">
                            <p className="small">Subtotal:</p>
                            <p className="small">Rs 3500.00</p>
                        </div>
                        <div className="delivery">
                            <p className="small">Discount :<br />
                            </p>
                            <p className="small">20%</p>
                        </div>
                        <div className="total">
                            <h3>Total:</h3>
                            <h3>Rs3500.00</h3>
                        </div>
                        <div className="promo-checkbox">
                            <input type="checkbox" name="promo-check" checked />
                            <label for="promo-check">I have a promo code</label>
                        </div>
                        <div className="promo-code">
                            <input type="text" name="promo-checkbox" placeholder="Enter your promo code here" checked />
                            <button className="apply">Apply</button>
                        </div>
                        <button className="btn-go-checkout" onClick={makePayment}>
                            <i className="fas fa-lock"></i>
                            <span>Go to Checkout</span>
                        </button>
                    </div>
                    <div className="help">
                        <p>Need help? Call free 01234 567 890</p>
                    </div>
                </div>
            </div>
            <div className="bg"></div>
        </div>
    )

}

export default Checkout